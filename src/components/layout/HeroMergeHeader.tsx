import { LinearGradient } from 'expo-linear-gradient';
import type { ReactNode } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';

import { HealitWordmark } from '../brand/HealitWordmark';
import { gradients, sizes, spacing } from '../../theme';

const LOGO_H = sizes.splashWordmark.height;
export const HERO_HEIGHT_RATIO = 0.4;
const MERGE_BAND_H = 120;
const MERGE_RISE = 0.62;

type Props = {
  children: ReactNode;
  /** Fraction of window height for the clipped artwork zone. */
  heroRatio?: number;
};

/**
 * Hero artwork clipped at the top, white merge fade, logo straddling the seam —
 * shared by login and onboarding.
 */
export function HeroMergeHeader({ children, heroRatio = HERO_HEIGHT_RATIO }: Props) {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const lockup = sizes.splashWordmark;
  const heroHeight = Math.round(windowHeight * heroRatio);
  const logoHalf = LOGO_H / 2;
  const merge = gradients.loginHeroMerge;

  return (
    <View style={[styles.heroStack, { height: heroHeight + logoHalf }]}>
      <View
        style={[
          styles.artworkClip,
          { height: heroHeight, paddingHorizontal: spacing.screenHorizontal },
        ]}>
        {children}
      </View>

      <View
        style={[
          styles.mergeBand,
          {
            width: windowWidth,
            top: heroHeight - MERGE_BAND_H * MERGE_RISE,
            height: MERGE_BAND_H,
          },
        ]}
        pointerEvents="none">
        <LinearGradient
          colors={[...merge.stops]}
          locations={[...merge.locations]}
          start={merge.start}
          end={merge.end}
          style={StyleSheet.absoluteFill}
        />
      </View>

      <View style={[styles.logoLayer, { top: heroHeight - logoHalf }]}>
        <HealitWordmark tone="dark" width={lockup.width} height={lockup.height} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroStack: {
    position: 'relative',
    width: '100%',
    zIndex: 2,
    overflow: 'visible',
  },
  artworkClip: {
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mergeBand: {
    position: 'absolute',
    left: 0,
    zIndex: 4,
    elevation: 4,
  },
  logoLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 12,
    elevation: 12,
  },
});
