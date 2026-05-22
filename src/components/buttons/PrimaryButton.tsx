import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps, ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import type { StyleProp, ViewStyle } from 'react-native';
import {
  Platform,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  borderWidth,
  colors,
  gradients,
  radii,
  ripple,
  shadows,
  sizes,
  spacing,
  typography,
} from '../../theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

type Props = Omit<PressableProps, 'children' | 'style'> & {
  title: string;
  /** Pass `Glyph.X`, Ionicons shim, badge, etc. When set (including `null`), ignores `trailingIcon`. */
  trailing?: ReactNode | null;
  trailingIcon?: IconName | null;
  style?: StyleProp<ViewStyle>;
};

/**
 * Gradient pill CTA — tokens live in `/src/theme`.
 */
export function PrimaryButton({
  title,
  trailing,
  trailingIcon = 'arrow-forward-outline',
  accessibilityLabel,
  style,
  ...rest
}: Props) {
  return (
    <Pressable
      {...rest}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      android_ripple={{ color: ripple.ctaGlass, foreground: false }}
      style={(state) => [
        styles.shadowShell,
        state.pressed && Platform.OS !== 'android' ? styles.pressedOuter : null,
        style ?? null,
      ]}>
      <LinearGradient
        colors={[...gradients.primaryCta.stops]}
        locations={[...gradients.primaryCta.locations]}
        start={gradients.primaryCta.start}
        end={gradients.primaryCta.end}
        style={styles.gradient}>
     
        <View style={styles.inner}>
          <Text style={styles.label}>{title}</Text>
          {trailing !== undefined ? (
            trailing
          ) : trailingIcon ? (
            <Ionicons
              name={trailingIcon}
              size={sizes.icons.ctaTrailing}
              color={colors.text.onBrand}
            />
          ) : null}
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadowShell: {
    alignSelf: 'center',
    borderRadius: radii.capsule,
    ...Platform.select({
      ios: shadows.primaryCta.ios as ViewStyle,
      android: shadows.primaryCta.android as ViewStyle,
      default: {},
    }),
  },
  pressedOuter: {
    opacity: 0.91,
    transform: [{ scale: 0.985 }],
    ...Platform.select({
      ios: {
        ...(shadows.primaryCtaPressed.ios as ViewStyle),
      },
      default: {},
    }),
  },
  gradient: {
    borderRadius: radii.capsule,
    minHeight: sizes.ctaMinHeight,
    paddingHorizontal: spacing.ctaPillPaddingX,
    paddingVertical: spacing.ctaPillPaddingY,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: borderWidth.hairline,
    borderTopColor: colors.overlays.white72,
    borderLeftColor: colors.overlays.white42,
    borderRightColor: colors.overlays.white42,
    borderBottomColor: colors.overlays.bottomTrim,

    ...Platform.select({
      ios: { borderCurve: 'continuous' },
      default: {},
    }),
  },
  innerRim: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: radii.capsuleInnerInset,
    borderWidth: Platform.OS === 'ios' ? borderWidth.hairline : borderWidth.none,
    borderColor: colors.overlays.white14,
    margin: Platform.OS === 'ios' ? spacing.ctaInnerRimMargin : spacing.none,
  },
  topGlow: {
    position: 'absolute',
    top: spacing.ctaGlowTop,
    left: spacing.ctaGlowSideInsetPct,
    right: spacing.ctaGlowSideInsetPct,
    height: spacing.ctaGlowHeight,
    borderRadius: radii.lineEnd,
    backgroundColor: colors.overlays.white58,
    opacity: Platform.OS === 'android' ? 0.88 : 1,
  },
  inner: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.ctaGap,
  },
  label: {
    ...typography.primaryCta,
  },
});
