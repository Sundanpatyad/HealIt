import { StyleSheet, View } from 'react-native';

import { HealitWordmark } from '../brand/HealitWordmark';
import { sizes } from '../../theme';

/**
 * Brand masthead on onboarding — same SVG lockup as splash.
 */
export function OnboardingBrandHeader() {
  const lockup = sizes.splashWordmark;

  return (
    <View style={styles.wrap}>
      <HealitWordmark width={lockup.width} height={lockup.height} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
  },
});
