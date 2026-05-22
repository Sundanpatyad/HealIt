import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps, ReactNode } from 'react';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { borderWidth, colors, radii, sizes, spacing, typography } from '../../theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

type Props = Omit<PressableProps, 'children' | 'style'> & {
  title: string;
  leading?: ReactNode;
  leadingIcon?: IconName;
  style?: StyleProp<ViewStyle>;
};

/** Outlined secondary auth action (Google, guest, etc.). */
export function OutlineAuthButton({
  title,
  leading,
  leadingIcon,
  accessibilityLabel,
  style,
  ...rest
}: Props) {
  return (
    <Pressable
      {...rest}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      style={(state) => [styles.shell, state.pressed && styles.pressed, style]}>
      <View style={styles.inner}>
        {leading !== undefined ? (
          leading
        ) : leadingIcon ? (
          <Ionicons name={leadingIcon} size={20} color={colors.login.outline} />
        ) : null}
        <Text style={styles.label}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: '100%',
    minHeight: sizes.authButtonMinHeight,
    borderRadius: radii.authCta,
    borderWidth: borderWidth.emphasize,
    borderColor: colors.login.outline,
    backgroundColor: colors.surface.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: sizes.authButtonPaddingY,
    ...Platform.select({
      ios: { borderCurve: 'continuous' },
      default: {},
    }),
  },
  pressed: {
    opacity: 0.9,
    backgroundColor: colors.surface.muted,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.login.outline,
  },
});
