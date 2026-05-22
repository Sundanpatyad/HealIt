import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import { colors, typography } from '../theme';
import { GlassBlurDemoScreen } from '../screens/GlassBlurDemoScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { OnboardingScreen } from '../screens/onboarding/OnboardingScreen';
import { SplashScreen } from '../screens/SplashScreen';

import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerBlurEffect:
          Platform.OS === 'ios' ? 'systemThinMaterial' : undefined,
        headerTintColor: colors.chrome.navigatorTitle,
        headerTitleStyle: { fontWeight: typography.primaryCta.fontWeight },
        animation: Platform.OS === 'ios' ? 'default' : 'slide_from_right',
        contentStyle: { backgroundColor: colors.chrome.screen },
      }}>
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
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'healit' }}
      />
      <Stack.Screen
        name="GlassBlurDemo"
        component={GlassBlurDemoScreen}
        options={{ title: 'Blur & Liquid glass' }}
      />
    </Stack.Navigator>
  );
}
