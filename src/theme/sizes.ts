/**
 * Dimensions that are not purely spacing — icons, pager dots, min touch targets.
 */

export const sizes = {
  icons: {
    ctaTrailing: 18,
    verifiedBadge: 26,
  },
  ctaMinHeight: 44,
  inputMinHeight: 48,
  /** Auth CTA / outline buttons — compact vertical padding */
  authButtonMinHeight: 44,
  authButtonPaddingY: 10,
  countryCodeWidth: 88,
  brandLogoMark: {
    side: 34,
    radius: 10,
  },
  /** Splash lockup — design spec */
  splashWordmark: {
    width: 120,
    height: 46.09,
  },
  
  illustration: {
    mapDot: 4,
    glyphpProduct: 34,
    glyphpFlask: 32,
    tinyAvatar: 28,
    tinyAvatarGlyph: 13,
    formularyLeadingIcon: 22,
    formularyAccessory: 22,
    sparkleGlyph: 20,
    /** Verified shield chrome */
    verifiedSeal: 60,
  },
  dot: {
    base: 8,
    activeWidth: 8,
    activeHeight: 8,
    activeRadius: 6,
  },
} as const;
