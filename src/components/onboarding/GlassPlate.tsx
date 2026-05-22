import { BlurView } from 'expo-blur';
import { PropsWithChildren } from 'react';
import { Platform, StyleSheet, View, ViewProps } from 'react-native';

import { borderWidth, colors, radii, spacing } from '../../theme';

type Props = ViewProps &
  PropsWithChildren<{
    tint?: 'light' | 'default' | 'dark';
    intensity?: number;
  }>;

/**
 * Frost layer — RN blur on iOS, stable translucency on Android.
 */
export function GlassPlate({
  children,
  style,
  tint = 'light',
  intensity = 48,
  ...rest
}: Props) {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        tint={tint}
        intensity={intensity}
        {...rest}
        style={[styles.plateBlur, styles.ring, style]}>
        {children}
      </BlurView>
    );
  }

  return (
    <View {...rest} style={[styles.plateSolid, styles.ring, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  plateBlur: {
    borderRadius: radii.glassPlate,
    padding: spacing.sm,
    overflow: 'hidden',
    backgroundColor: colors.glassPlate.blurTintIos,
  },
  plateSolid: {
    borderRadius: radii.glassPlate,
    padding: spacing.sm,
    backgroundColor: colors.glassPlate.solidAndroid,
    borderWidth: borderWidth.hairline,
    borderColor: colors.glassPlate.borderSoft,
    overflow: 'hidden',
    shadowColor: colors.glassPlate.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: Platform.OS === 'ios' ? 0.55 : 0,
    shadowRadius: 16,
    elevation: Platform.OS === 'android' ? 4 : 0,
  },
  ring: {
    borderWidth: borderWidth.hairline,
    borderColor: colors.glassPlate.borderStrong,
  },
});
