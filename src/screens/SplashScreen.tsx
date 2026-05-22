import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { HealitWordmark } from '../components/brand/HealitWordmark';
import { useOnboardingBootstrap } from '../hooks/useOnboardingBootstrap';
import type { RootStackParamList } from '../navigation/types';
import { colors, sizes } from '../theme';

const SPLASH_MIN_MS = 2000;

type Nav = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

export function SplashScreen() {
  const navigation = useNavigation<Nav>();
  const bootstrap = useOnboardingBootstrap();
  const [minElapsed, setMinElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinElapsed(true), SPLASH_MIN_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (bootstrap.status !== 'ready' || !minElapsed) return;

    const target = bootstrap.onboardingComplete ? 'Login' : 'Onboarding';
    navigation.replace(target);
  }, [bootstrap, minElapsed, navigation]);

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
