/**
 * API Service
 * Handles all HTTP requests with automatic token refresh
 */

import { API_CONFIG, API_ENDPOINTS } from '../config/api.config';
import { StorageService } from './storage.service';
import type { ApiResponse, RefreshTokenRequest } from '../types/auth.types';

interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpoint: string;
  data?: any;
  requiresAuth?: boolean;
  isRetry?: boolean;
}

export class ApiService {
  private static isRefreshing = false;
  private static refreshSubscribers: Array<(token: string) => void> = [];

  /**
   * Subscribe to token refresh
   */
  private static subscribeTokenRefresh(callback: (token: string) => void) {
    this.refreshSubscribers.push(callback);
  }

  /**
   * Notify all subscribers when token is refreshed
   */
  private static onTokenRefreshed(token: string) {
    this.refreshSubscribers.forEach((callback) => callback(token));
    this.refreshSubscribers = [];
  }

  /**
   * Refresh access token
   */
  private static async refreshAccessToken(): Promise<string> {
    try {
      const refreshToken = await StorageService.getRefreshToken();
      
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await fetch(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.REFRESH_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken } as RefreshTokenRequest),
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const result: ApiResponse<{ accessToken: string; refreshToken: string }> = await response.json();

      if (result.success && result.data) {
        await StorageService.saveTokens(result.data.accessToken, result.data.refreshToken);
        return result.data.accessToken;
      }

      throw new Error('Invalid refresh response');
    } catch (error) {
      // Clear auth data if refresh fails
      await StorageService.clearAuthData();
      throw error;
    }
  }

  /**
   * Make HTTP request
   */
  static async request<T>(config: RequestConfig): Promise<ApiResponse<T>> {
    const { method, endpoint, data, requiresAuth = false, isRetry = false } = config;

    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      // Add authorization header if required
      if (requiresAuth) {
        const accessToken = await StorageService.getAccessToken();
        if (accessToken) {
          headers['Authorization'] = `Bearer ${accessToken}`;
        }
      }

      const requestConfig: RequestInit = {
        method,
        headers,
      };

      if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
        requestConfig.body = JSON.stringify(data);
      }

      const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, requestConfig);

      // Handle 401 Unauthorized - try to refresh token
      if (response.status === 401 && requiresAuth && !isRetry) {
        if (!this.isRefreshing) {
          this.isRefreshing = true;

          try {
            const newToken = await this.refreshAccessToken();
            this.isRefreshing = false;
            this.onTokenRefreshed(newToken);

            // Retry the original request with new token
            return this.request<T>({ ...config, isRetry: true });
          } catch (refreshError) {
            this.isRefreshing = false;
            throw refreshError;
          }
        } else {
          // Wait for token refresh to complete
          return new Promise((resolve, reject) => {
            this.subscribeTokenRefresh(async (token: string) => {
              try {
                const result = await this.request<T>({ ...config, isRetry: true });
                resolve(result);
              } catch (error) {
                reject(error);
              }
            });
          });
        }
      }

      const result: ApiResponse<T> = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Request failed');
      }

      return result;
    } catch (error: any) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  /**
   * GET request
   */
  static async get<T>(endpoint: string, requiresAuth = false): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'GET', endpoint, requiresAuth });
  }

  /**
   * POST request
   */
  static async post<T>(endpoint: string, data: any, requiresAuth = false): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'POST', endpoint, data, requiresAuth });
  }

  /**
   * PUT request
   */
  static async put<T>(endpoint: string, data: any, requiresAuth = false): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'PUT', endpoint, data, requiresAuth });
  }

  /**
   * DELETE request
   */
  static async delete<T>(endpoint: string, requiresAuth = false): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'DELETE', endpoint, requiresAuth });
  }

  /**
   * PATCH request
   */
  static async patch<T>(endpoint: string, data: any, requiresAuth = false): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'PATCH', endpoint, data, requiresAuth });
  }
}
