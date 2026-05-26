import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { HealitWordmark } from '../components/brand/HealitWordmark';
import { useOnboardingBootstrap } from '../hooks/useOnboardingBootstrap';
import { useAuthStore } from '../store/authStore';
import type { RootStackParamList } from '../navigation/types';
import { colors, sizes } from '../theme';

const SPLASH_MIN_MS = 2000;

type Nav = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

export function SplashScreen() {
  const navigation = useNavigation<Nav>();
  const bootstrap = useOnboardingBootstrap();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const authLoading = useAuthStore((state) => state.isLoading);
  const [minElapsed, setMinElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinElapsed(true), SPLASH_MIN_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Wait for both bootstrap and auth to be ready, and minimum time to elapse
    if (bootstrap.status !== 'ready' || authLoading || !minElapsed) return;

    // If user is authenticated, navigation will be handled by RootNavigator
    if (isAuthenticated) return;

    // If not authenticated, navigate based on onboarding status
    const target = bootstrap.onboardingComplete ? 'Login' : 'Onboarding';
    
    // Use a small delay to avoid navigation conflicts
    const navTimer = setTimeout(() => {
      navigation.replace(target);
    }, 100);

    return () => clearTimeout(navTimer);
  }, [bootstrap, minElapsed, navigation, isAuthenticated, authLoading]);

  return (
    <View style={styles.canvas}>
      <StatusBar style="light" />
      <HealitWordmark
        width={sizes.splashWordmark.width}
        height={sizes.splashWordmark.height}
        showTagline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: colors.brand.violet,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
