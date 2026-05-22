/** Margin / padding primitives + semantic layout tokens */

const primitives = {
  none: 0,
  micro: 2,
  xxs: 4,
  xxxs: 6,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const spacing = {
  ...primitives,
  screenHorizontal: primitives.lg,
  ctaHorizontal: 26,
  ctaVertical: primitives.md,
  /** Pill CTA horizontal padding (~4:1 mock) */
  ctaPillPaddingX: 38,
  ctaPillPaddingY: 10,
  /** Small gap between label and trailing arrow */
  ctaGap: primitives.xs,
  ctaGlowHeight: primitives.micro,
  ctaGlowTop: primitives.micro,
  /** Percent string for symmetric horizontal inset of faux specular streak */
  ctaGlowSideInsetPct: '10%',
  /** iOS faux inner rim gutter */
  ctaInnerRimMargin: 1.5,
  onboardingFooterBetween: 20,
  loginSectionGap: 12,
  loginFormGap: 12,
  loginBlockGap: 10,
  /** Half of login wordmark height — logo straddles hero / form seam */
  loginLogoOverlap: 23,
  pagerDotGap: 5,
  /** Illustrated slides trim against screen gutters */
  illusCatalogGutter: 40,
  illusInsetFromEdges: primitives.lg,
  illusStackBleed: 34,
  /** Tiny vertical nudges for stacked composition */
  formularyChipPad: primitives.md,
  formularyCardPadY: primitives.md + primitives.micro,
} as const;

/** Aliases — same backing scale for readable imports */
export const padding = spacing;
export const margin = spacing;
