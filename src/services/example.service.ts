/**
 * Example Service
 * Demonstrates how to create additional API services with authentication
 */

import { ApiService } from './api.service';
import type { ApiResponse } from '../types/auth.types';

// Example: Product types
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

// Example: Order types
interface Order {
  id: string;
  userId: string;
  products: Product[];
  total: number;
  status: string;
  createdAt: string;
}

export class ExampleService {
  /**
   * Get all products (public endpoint)
   */
  static async getProducts(): Promise<Product[]> {
    try {
      const response = await ApiService.get<Product[]>('/products', false);
      return response.data;
    } catch (error: any) {
      console.error('Get products error:', error);
      throw error;
    }
  }

  /**
   * Get user orders (protected endpoint)
   */
  static async getUserOrders(): Promise<Order[]> {
    try {
      const response = await ApiService.get<Order[]>('/orders/my-orders', true);
      return response.data;
    } catch (error: any) {
      console.error('Get orders error:', error);
      throw error;
    }
  }

  /**
   * Create order (protected endpoint)
   */
  static async createOrder(productIds: string[]): Promise<Order> {
    try {
      const response = await ApiService.post<Order>(
        '/orders',
        { productIds },
        true
      );
      return response.data;
    } catch (error: any) {
      console.error('Create order error:', error);
      throw error;
    }
  }

  /**
   * Update user profile (protected endpoint)
   */
  static async updateProfile(data: { fullName?: string; email?: string }): Promise<void> {
    try {
      await ApiService.put('/users/profile', data, true);
    } catch (error: any) {
      console.error('Update profile error:', error);
      throw error;
    }
  }

  /**
   * Upload profile picture (protected endpoint with FormData)
   */
  static async uploadProfilePicture(imageUri: string): Promise<string> {
    try {
      // Note: For file uploads, you might need to use a different approach
      // This is a simplified example
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'profile.jpg',
      } as any);

      // You would need to modify ApiService to handle FormData
      // or use fetch directly for file uploads
      const response = await fetch('YOUR_API_URL/users/profile-picture', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${await import('./storage.service').then(m => m.StorageService.getAccessToken())}`,
        },
        body: formData,
      });

      const result = await response.json();
      return result.data.imageUrl;
    } catch (error: any) {
      console.error('Upload profile picture error:', error);
      throw error;
    }
  }
}

/**
 * Usage Examples:
 * 
 * // In a component:
 * import { ExampleService } from '../services/example.service';
 * 
 * // Get products (no auth required)
 * const products = await ExampleService.getProducts();
 * 
 * // Get user orders (auth required)
 * const orders = await ExampleService.getUserOrders();
 * 
 * // Create order (auth required)
 * const order = await ExampleService.createOrder(['product-id-1', 'product-id-2']);
 * 
 * // Update profile (auth required)
 * await ExampleService.updateProfile({ fullName: 'John Doe', email: 'john@example.com' });
 */
