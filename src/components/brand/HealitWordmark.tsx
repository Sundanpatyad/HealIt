import { StyleSheet, Text, View } from 'react-native';

import HealitWordmarkDarkSvg from '../../icons/svg/healit-wordmark-dark.svg';
import HealitWordmarkSvg from '../../icons/svg/healit-wordmark.svg';
import { colors, spacing, typography } from '../../theme';

const VIEWBOX_W = 120;
const VIEWBOX_H = 47;

type Props = {
  width?: number;
  height?: number;
  /** `light` = white paths (splash); `dark` = purple paths (login). */
  tone?: 'light' | 'dark';
  /** Renders "WE DELIVER CARE" beneath the logo (splash). */
  showTagline?: boolean;
};

/** Centered healit wordmark; optional tagline for splash lockup. */
export function HealitWordmark({
  width: logoWidth = 120,
  height,
  tone = 'light',
  showTagline = false,
}: Props) {
  const resolvedHeight = height ?? (logoWidth / VIEWBOX_W) * VIEWBOX_H;
  const Logo = tone === 'dark' ? HealitWordmarkDarkSvg : HealitWordmarkSvg;

  return (
    <View style={styles.lockup}>
      <Logo
        width={logoWidth}
        height={resolvedHeight}
        accessibilityLabel="Healit"
      />
      {showTagline ? (
        <Text
          style={[
            typography.brandTagline,
            styles.tagline,
            tone === 'dark' && styles.taglineDark,
          ]}>
          WE DELIVER CARE
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  lockup: {
    alignItems: 'center',
  },
  tagline: {
    marginTop: spacing.xs,
  },
  taglineDark: {
    color: colors.text.secondary,
    letterSpacing: 2,
  },
});
