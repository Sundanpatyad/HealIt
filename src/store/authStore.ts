/**
 * Authentication Store using Zustand
 * Manages global authentication state
 */

import { create } from 'zustand';
import { AuthService } from '../services/auth.service';
import type { User } from '../types/auth.types';

interface AuthState {
  // State
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  login: (phoneNumber: string, fullName?: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  initialize: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  // Initial state
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,

  // Initialize auth state on app start
  initialize: async () => {
    try {
      set({ isLoading: true, error: null });
      
      const isAuth = await AuthService.isAuthenticated();
      
      if (isAuth) {
        const userData = await AuthService.getCurrentUser();
        set({ 
          user: userData, 
          isAuthenticated: true,
          isLoading: false 
        });
      } else {
        set({ 
          user: null, 
          isAuthenticated: false,
          isLoading: false 
        });
      }
    } catch (error: any) {
      console.error('Auth initialization error:', error);
      set({ 
        user: null, 
        isAuthenticated: false, 
        isLoading: false,
        error: error.message 
      });
    }
  },

  // Login with phone number
  login: async (phoneNumber: string, fullName?: string) => {
    try {
      set({ isLoading: true, error: null });
      
      const response = await AuthService.loginWithPhone(phoneNumber, fullName);
      
      set({ 
        user: response.user, 
        isAuthenticated: true,
        isLoading: false,
        error: null
      });
    } catch (error: any) {
      console.error('Login error:', error);
      set({ 
        isLoading: false,
        error: error.message || 'Login failed'
      });
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    try {
      set({ isLoading: true, error: null });
      
      await AuthService.logout();
      
      set({ 
        user: null, 
        isAuthenticated: false,
        isLoading: false,
        error: null
      });
    } catch (error: any) {
      console.error('Logout error:', error);
      set({ 
        isLoading: false,
        error: error.message || 'Logout failed'
      });
      throw error;
    }
  },

  // Refresh user data
  refreshUser: async () => {
    try {
      const userData = await AuthService.getProfile();
      set({ user: userData, error: null });
    } catch (error: any) {
      console.error('Refresh user error:', error);
      // If refresh fails, logout user
      await get().logout();
      throw error;
    }
  },

  // Set loading state
  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },

  // Set error
  setError: (error: string | null) => {
    set({ error });
  },
}));
