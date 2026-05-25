/**
 * Protected Route Hook
 * Returns authentication status without manual navigation
 * (Navigation is handled by RootNavigator's conditional rendering)
 */

import { useAuth } from '../context/AuthContext';

export const useProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // Just return the auth state
  // Navigation is handled automatically by RootNavigator
  return { isAuthenticated, isLoading };
};
