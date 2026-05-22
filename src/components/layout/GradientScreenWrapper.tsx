import { LinearGradient } from 'expo-linear-gradient';
import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { gradients } from '../../theme';

export type ScreenGradientKey = 'onboardingBackground' | 'loginBackground';

type Props = {
  children: ReactNode;
  gradient?: ScreenGradientKey;
};

/**
 * Full-screen canvas with a top-down gradient (onboarding, login, etc.).
 */
export function GradientScreenWrapper({
  children,
  gradient = 'onboardingBackground',
}: Props) {
  const bg = gradients[gradient];

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={[...bg.stops]}
        locations={[...bg.locations]}
        start={bg.start}
        end={bg.end}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: { flex: 1 },
});
