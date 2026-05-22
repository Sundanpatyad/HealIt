import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

import { borderWidth, colors, radii, ripple, sizes, spacing, typography } from '../../theme';

type Props = Omit<PressableProps, 'children' | 'style'> & {
  title: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * Full-width solid CTA (login and other auth actions).
 */
export function CtaButton({
  title,
  accessibilityLabel,
  disabled,
  style,
  ...rest
}: Props) {
  return (
    <Pressable
      {...rest}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      android_ripple={{ color: ripple.ctaGlass, foreground: false }}
      style={(state) => [
        styles.shell,
        disabled ? styles.disabled : styles.enabled,
        state.pressed && !disabled ? styles.pressed : null,
        style,
      ]}>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: '100%',
    minHeight: sizes.authButtonMinHeight,
    borderRadius: radii.authCta,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: sizes.authButtonPaddingY,
    borderWidth: borderWidth.emphasize,
    ...Platform.select({
      ios: { borderCurve: 'continuous' },
      default: {},
    }),
  },
  enabled: {
    backgroundColor: colors.brand.violet,
    borderColor: colors.overlays.white45,
  },
  pressed: {
    backgroundColor: colors.highlight,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    backgroundColor: colors.login.cta,
    borderColor: colors.overlays.white45,
    opacity: 0.55,
  },
  label: {
    ...typography.primaryCta,
    color: colors.text.onBrand,
  },
});
