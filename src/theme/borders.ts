import { StyleSheet } from 'react-native';

/** Corner radii (capsule pills, shells, glyphs) */
export const radii = {
  capsule: 999,
  capsuleInnerInset: 997,
  badge: 12,
  lineEnd: 1,
  /** Glass cards / onboarding chips */
  glassPlate: 18,
  /** Floated pharma tiles */
  illustrationCard: 20,
  /** Globe map shell */
  mapBlob: 32,
  /** Soft pill thumbnails */
  illusPillow: 24,
  verifiedBackdrop: 24,
  verifiedForeground: 28,
  /** Text fields & auth CTAs */
  input: 12,
  authCta: 14,
} as const;

/** Canonical border widths */
export const borderWidth = {
  hairline: StyleSheet.hairlineWidth,
  none: 0,
  emphasize: 1,
} as const;
