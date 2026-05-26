/**
 * Authentication Types
 */

export enum UserRole {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
  VENDOR = 'VENDOR',
  RIDER = 'RIDER',
  PHARMACY_MANAGER = 'PHARMACY_MANAGER',
}

export interface User {
  id: string;
  phoneNumber: string;
  fullName?: string | null;
  email?: string | null;
  role: UserRole;
  isActive?: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
  errors?: string[];
}

export interface LoginRequest {
  phoneNumber: string;
  fullName?: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}
