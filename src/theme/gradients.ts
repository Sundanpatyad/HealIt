/**
 * Gradient tokens for LinearGradient (colors + locations).
 */

import { colors } from './colors';

export const gradients = {
  primaryCta: {
    stops: [
      colors.ctaGradient.top,
      colors.ctaGradient.mid,
      colors.ctaGradient.bottom,
    ] as const,
    locations: [0, 0.46, 1] as const,
    start: { x: 0.5, y: 0 } as const,
    end: { x: 0.5, y: 1 } as const,
  },
  /** Top-down primary violet → white (onboarding screen wrapper) */
  onboardingBackground: {
    stops: [colors.brand.violet, colors.surface.white, colors.surface.white] as const,
    locations: [0, 0.48, 1] as const,
    start: { x: 0.5, y: 0 } as const,
    end: { x: 0.5, y: 1 } as const,
  },
  /** Login screen — medium lilac top, white by mid-screen */
  loginBackground: {
    stops: [
      colors.login.gradientTop,
      colors.brand.lavenderDeep,
      colors.brand.lavender,
      colors.surface.white,
    ] as const,
    locations: [0, 0.22, 0.42, 0.58] as const,
    start: { x: 0.5, y: 0 } as const,
    end: { x: 0.5, y: 1 } as const,
  },
  /** White fog that merges hero artwork into the form section */
  loginHeroMerge: {
    stops: [
      'rgba(255, 255, 255, 0)',
      'rgba(255, 255, 255, 0.45)',
      'rgba(255, 255, 255, 0.92)',
      colors.surface.white,
    ] as const,
    locations: [0, 0.38, 0.72, 1] as const,
    start: { x: 0.5, y: 0 } as const,
    end: { x: 0.5, y: 1 } as const,
  },
  verifiedCards: {
    back: ['#F8F9FF', '#F1EFFE'] as const,
    front: ['#FFF7FC', '#EEF9FF'] as const,
  },
} as const;
