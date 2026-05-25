# Authentication Setup Documentation

## Overview

This document describes the complete authentication system integrated into the HealIt React Native app, connecting to the backend API.

## Features

✅ **Phone-based Authentication** - Login/Register with phone number  
✅ **JWT Token Management** - Access and refresh tokens  
✅ **Automatic Token Refresh** - Seamless token renewal on expiry  
✅ **Protected Routes** - Secure screens requiring authentication  
✅ **Persistent Sessions** - User stays logged in across app restarts  
✅ **Context-based State** - Global auth state management  

## Architecture

### File Structure

```
HealIt/src/
├── config/
│   └── api.config.ts          # API endpoints and configuration
├── context/
│   └── AuthContext.tsx        # Global authentication state
├── hooks/
│   └── useProtectedRoute.ts   # Hook for protecting routes
├── screens/
│   ├── LoginScreen.tsx        # Login/Register screen
│   └── ProfileScreen.tsx      # Protected profile screen
├── services/
│   ├── api.service.ts         # HTTP client with auto-refresh
│   ├── auth.service.ts        # Authentication API calls
│   └── storage.service.ts     # Secure token storage
└── types/
    └── auth.types.ts          # TypeScript types
```

## Configuration

### 1. Update API Base URL

Edit `HealIt/src/config/api.config.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: __DEV__ 
    ? 'http://10.0.2.2:3000/api/v1'  // Android Emulator
    // ? 'http://localhost:3000/api/v1'  // iOS Simulator
    // ? 'http://192.168.1.100:3000/api/v1'  // Physical Device
    : 'https://your-production-api.com/api/v1',
  TIMEOUT: 30000,
};
```

**Important:** 
- **Android Emulator**: Use `10.0.2.2` (maps to host machine's localhost)
- **iOS Simulator**: Use `localhost`
- **Physical Device**: Use your computer's local IP address

### 2. Start Backend Server

Make sure your backend is running:

```bash
cd backend
pnpm dev
```

The backend should be accessible at `http://localhost:3000`

## Usage

### Authentication Context

The `AuthProvider` wraps the entire app and provides authentication state:

```typescript
import { AuthProvider, useAuth } from './src/context/AuthContext';

// In App.tsx
<AuthProvider>
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
</AuthProvider>
```

### Using Auth in Components

```typescript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();

  // Access user data
  console.log(user?.fullName);
  console.log(user?.phoneNumber);

  // Login
  await login('+1234567890', 'John Doe');

  // Logout
  await logout();
}
```

### Protected Routes

Use the `useProtectedRoute` hook to protect screens:

```typescript
import { useProtectedRoute } from '../hooks/useProtectedRoute';

export const ProtectedScreen = () => {
  const { isAuthenticated, isLoading } = useProtectedRoute();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // This code only runs if user is authenticated
  return <YourContent />;
};
```

### Making Authenticated API Calls

```typescript
import { ApiService } from '../services/api.service';

// GET request (protected)
const response = await ApiService.get('/users/profile', true);

// POST request (protected)
const response = await ApiService.post(
  '/orders',
  { productId: '123', quantity: 2 },
  true  // requiresAuth = true
);
```

## API Endpoints

### Authentication

#### Login/Register
```
POST /auth/login
Body: { phoneNumber: string, fullName?: string }
Response: { user, accessToken, refreshToken }
```

#### Refresh Token
```
POST /auth/refresh
Body: { refreshToken: string }
Response: { accessToken, refreshToken }
```

#### Logout
```
POST /auth/logout
Headers: { Authorization: Bearer <token> }
Response: { message: string }
```

#### Get Profile
```
GET /auth/me
Headers: { Authorization: Bearer <token> }
Response: { user }
```

## Token Management

### Storage

Tokens are securely stored using `@react-native-async-storage/async-storage`:

- **Access Token**: `@healit_access_token`
- **Refresh Token**: `@healit_refresh_token`
- **User Data**: `@healit_user_data`

### Automatic Refresh

The `ApiService` automatically handles token refresh:

1. When a request returns 401 (Unauthorized)
2. The service attempts to refresh the access token
3. If successful, the original request is retried
4. If refresh fails, user is logged out

### Token Lifecycle

```
┌─────────────┐
│ User Login  │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│ Save Access Token   │
│ Save Refresh Token  │
│ Save User Data      │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ Make API Request    │
└──────┬──────────────┘
       │
       ▼
   ┌───────┐
   │ 401?  │──No──▶ Success
   └───┬───┘
       │Yes
       ▼
┌─────────────────────┐
│ Refresh Token       │
└──────┬──────────────┘
       │
       ▼
   ┌───────┐
   │Success│──Yes──▶ Retry Request
   └───┬───┘
       │No
       ▼
┌─────────────────────┐
│ Logout User         │
│ Clear Storage       │
└─────────────────────┘
```

## Navigation Flow

### Unauthenticated Flow
```
Splash → Onboarding → Login
```

### Authenticated Flow
```
Home → Profile → Other Screens
```

The `RootNavigator` automatically switches between auth and app stacks based on authentication state.

## Testing

### Test Login Flow

1. Start the backend server
2. Start the React Native app: `npm start`
3. Open the app in emulator/simulator
4. Enter a phone number (e.g., `+1234567890`)
5. Optionally enter a full name for new users
6. Tap "Login" or "Create Account"

### Test Protected Routes

1. After logging in, navigate to the Profile screen
2. View your user information
3. Tap "Refresh Profile" to fetch latest data
4. Tap "Logout" to sign out

### Test Token Refresh

The token refresh happens automatically. To test:

1. Login to the app
2. Wait for the access token to expire (7 days by default)
3. Make any API request
4. The token should refresh automatically

## Troubleshooting

### Cannot Connect to Backend

**Problem**: App shows "Network request failed"

**Solutions**:
- Verify backend is running on `http://localhost:3000`
- Check `API_CONFIG.BASE_URL` in `api.config.ts`
- For Android Emulator, use `10.0.2.2` instead of `localhost`
- For physical device, use your computer's IP address
- Ensure firewall allows connections

### Token Refresh Fails

**Problem**: User gets logged out unexpectedly

**Solutions**:
- Check backend logs for refresh token errors
- Verify refresh token is being saved correctly
- Check token expiration times in backend `.env`

### TypeScript Errors

**Problem**: Type errors in navigation or auth context

**Solutions**:
- Ensure `RootStackParamList` includes all screen names
- Import types from `../types/auth.types`
- Run `npm run tsc` to check for type errors

## Security Best Practices

✅ **Tokens stored securely** using AsyncStorage  
✅ **HTTPS in production** (configure in `api.config.ts`)  
✅ **Automatic token refresh** prevents expired token errors  
✅ **Logout clears all data** from storage  
✅ **Protected routes** redirect to login if unauthenticated  

## Next Steps

### Add More Features

1. **OTP Verification**: Add SMS verification for phone numbers
2. **Biometric Auth**: Add fingerprint/face ID support
3. **Social Login**: Add Google/Facebook authentication
4. **Profile Editing**: Allow users to update their information
5. **Password Reset**: Add forgot password functionality

### Example: Add OTP Verification

```typescript
// In auth.service.ts
static async sendOTP(phoneNumber: string): Promise<void> {
  await ApiService.post('/auth/send-otp', { phoneNumber });
}

static async verifyOTP(phoneNumber: string, otp: string): Promise<LoginResponse> {
  const response = await ApiService.post<LoginResponse>(
    '/auth/verify-otp',
    { phoneNumber, otp }
  );
  // Save tokens and user data
  return response.data;
}
```

## Support

For issues or questions:
1. Check backend API documentation: `backend/API_DOCUMENTATION.md`
2. Review backend setup: `backend/QUICK_START.md`
3. Check React Native logs: `npx react-native log-android` or `npx react-native log-ios`

## Summary

The authentication system is now fully integrated with:
- ✅ Phone-based login/register
- ✅ JWT token management with auto-refresh
- ✅ Protected routes and navigation
- ✅ Persistent sessions
- ✅ Global auth state via Context API
- ✅ Type-safe API calls

You can now build additional features on top of this authentication foundation!
