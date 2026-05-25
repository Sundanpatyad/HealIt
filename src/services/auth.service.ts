/**
 * Authentication Service
 * Handles all authentication-related API calls
 */

import { API_ENDPOINTS } from '../config/api.config';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import type { LoginRequest, LoginResponse, User, ApiResponse } from '../types/auth.types';

export class AuthService {
  /**
   * Login or register with phone number
   */
  static async loginWithPhone(phoneNumber: string, fullName?: string): Promise<LoginResponse> {
    try {
      const response = await ApiService.post<LoginResponse>(
        API_ENDPOINTS.LOGIN,
        { phoneNumber, fullName } as LoginRequest,
        false
      );

      if (response.success && response.data) {
        // Save tokens and user data
        await StorageService.saveTokens(
          response.data.accessToken,
          response.data.refreshToken
        );
        await StorageService.saveUserData(response.data.user);

        return response.data;
      }

      throw new Error(response.message || 'Login failed');
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    }
  }

  /**
   * Logout user
   */
  static async logout(): Promise<void> {
    try {
      // Call logout endpoint
      await ApiService.post(API_ENDPOINTS.LOGOUT, {}, true);
    } catch (error) {
      console.error('Logout API error:', error);
      // Continue with local logout even if API call fails
    } finally {
      // Clear local storage
      await StorageService.clearAuthData();
    }
  }

  /**
   * Get current user profile
   */
  static async getProfile(): Promise<User> {
    try {
      const response = await ApiService.get<User>(API_ENDPOINTS.GET_PROFILE, true);

      if (response.success && response.data) {
        // Update stored user data
        await StorageService.saveUserData(response.data);
        return response.data;
      }

      throw new Error(response.message || 'Failed to get profile');
    } catch (error: any) {
      console.error('Get profile error:', error);
      throw error;
    }
  }

  /**
   * Check if user is authenticated
   */
  static async isAuthenticated(): Promise<boolean> {
    return await StorageService.isLoggedIn();
  }

  /**
   * Get stored user data
   */
  static async getCurrentUser(): Promise<User | null> {
    return await StorageService.getUserData();
  }

  /**
   * Refresh tokens
   */
  static async refreshToken(): Promise<void> {
    try {
      const refreshToken = await StorageService.getRefreshToken();
      
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await ApiService.post<{ accessToken: string; refreshToken: string }>(
        API_ENDPOINTS.REFRESH_TOKEN,
        { refreshToken },
        false
      );

      if (response.success && response.data) {
        await StorageService.saveTokens(
          response.data.accessToken,
          response.data.refreshToken
        );
      } else {
        throw new Error('Token refresh failed');
      }
    } catch (error) {
      console.error('Refresh token error:', error);
      // Clear auth data if refresh fails
      await StorageService.clearAuthData();
      throw error;
    }
  }
}
