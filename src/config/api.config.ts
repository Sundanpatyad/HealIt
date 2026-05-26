/**
 * API Configuration
 * Update the BASE_URL to match your backend server
 */

// IMPORTANT: Update this with YOUR computer's IP address!
// To find your IP:
// - Windows: Run 'ipconfig' in CMD, look for IPv4 Address
// - Mac/Linux: Run 'ifconfig' or 'ip addr'

export const API_CONFIG = {
  BASE_URL: __DEV__ 
    ? 'http://192.168.1.7:3000/api/v1' // ← CHANGE THIS to your computer's IP!
    : 'https://your-production-api.com/api/v1',
  TIMEOUT: 30000, // 30 seconds
};

export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: '/auth/login',
  REFRESH_TOKEN: '/auth/refresh',
  LOGOUT: '/auth/logout',
  GET_PROFILE: '/auth/me',
};
