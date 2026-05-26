import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import { colors, typography } from '../theme';
import { GlassBlurDemoScreen } from '../screens/GlassBlurDemoScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { OnboardingScreen } from '../screens/onboarding/OnboardingScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { useAuthStore } from '../store/authStore';

import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);

  // Show splash while checking auth status
  if (isLoading) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    );
  }

  // Use key to force remount when auth state changes
  return (
    <Stack.Navigator
      key={isAuthenticated ? 'authenticated' : 'unauthenticated'}
      initialRouteName={isAuthenticated ? "Home" : "Splash"}
      screenOptions={{
        headerBlurEffect:
          Platform.OS === 'ios' ? 'systemThinMaterial' : undefined,
        headerTintColor: colors.chrome.navigatorTitle,
        headerTitleStyle: { fontWeight: typography.primaryCta.fontWeight },
        animation: Platform.OS === 'ios' ? 'default' : 'slide_from_right',
        contentStyle: { backgroundColor: colors.chrome.screen },
      }}>
      {!isAuthenticated ? (
        // Auth Stack - shown when user is not authenticated
        <>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false, animation: 'none' }}
          />
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false, contentStyle: { backgroundColor: 'transparent' } }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false, contentStyle: { backgroundColor: 'transparent' } }}
          />
        </>
      ) : (
        // App Stack - shown when user is authenticated
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'healit' }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'Profile' }}
          />
          <Stack.Screen
            name="GlassBlurDemo"
            component={GlassBlurDemoScreen}
            options={{ title: 'Blur & Liquid glass' }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
