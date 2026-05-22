/**
 * Elevations & depth — compose into StyleSheet spreads.
 */

import type { ShadowStyleIOS } from 'react-native';

import { colors } from './colors';

const primaryCtaRestingIos: ShadowStyleIOS = {
  shadowColor: colors.ctaGradient.shadowIos,
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.38,
  shadowRadius: 28,
};

const primaryCtaPressedIosOverride: ShadowStyleIOS = {
  shadowOpacity: 0.24,
  shadowRadius: 20,
};

/** Primary gradient pill — default state */
export const shadows = {
  primaryCta: {
    ios: primaryCtaRestingIos,
    android: { elevation: 12 },
  },
  /** Layered deltas when pressing (iOS) */
  primaryCtaPressed: {
    ios: primaryCtaPressedIosOverride,
  },
} as const;
