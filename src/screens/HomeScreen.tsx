import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { RootStackParamList } from '../navigation/types';
import { clearOnboardingComplete } from '../services/onboardingStorage';
import { colors, spacing, typography } from '../theme';
import { useAuthStore } from '../store/authStore';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const user = useAuthStore((state) => state.user);

  const replayOnboarding = async () => {
    await clearOnboardingComplete();
    navigation.replace('Onboarding');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Healit delivery hub</Text>
      <Text style={styles.subtitle}>
        Welcome back, {user?.fullName || user?.phoneNumber}! Explore the app features below.
      </Text>

      <Pressable
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.primaryBtnLabel}>View Profile</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryBtn}
        onPress={() => void replayOnboarding()}>
        <Text style={styles.secondaryBtnLabel}>Replay onboarding</Text>
      </Pressable>

      <Pressable
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('GlassBlurDemo')}>
        <Text style={styles.primaryBtnLabel}>Glass & blur lab</Text>
      </Pressable>

      <Text style={styles.hint}>
        Onboarding is skipped once you finish the tour. Tap "Replay onboarding" to reset
        and see it again.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: spacing.screenHorizontal,
    backgroundColor: colors.chrome.screen,
    paddingTop: spacing.md,
  },
  title: {
    ...typography.headline,
    color: colors.text.slab,
    marginBottom: spacing.sm + spacing.micro,
    fontSize: 26,
    letterSpacing: -0.6,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.text.tertiary,
    marginBottom: spacing.md + spacing.sm,
    maxWidth: 360,
  },
  primaryBtn: {
    alignSelf: 'flex-start',
    backgroundColor: colors.brand.violet,
    paddingVertical: spacing.sm + spacing.micro,
    paddingHorizontal: spacing.lg + spacing.micro,
    borderRadius: spacing.sm,
    marginTop: spacing.sm,
  },
  secondaryBtn: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.micro,
    borderRadius: spacing.xs,
    marginBottom: spacing.micro,
  },
  secondaryBtnLabel: {
    color: colors.brand.violetDark,
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  primaryBtnLabel: {
    color: colors.text.onBrand,
    fontSize: 16,
    fontWeight: '600',
  },
  hint: {
    marginTop: spacing.lg + spacing.micro,
    fontSize: 13,
    color: colors.text.muted,
    maxWidth: 340,
    lineHeight: 18,
  },
});
