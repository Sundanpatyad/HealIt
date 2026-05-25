import { Platform } from 'react-native';

import { colors } from './colors';

/** System stack keeps iOS/Android compatible without bundled font files */
export const typography = {
  wordmark: {
    fontSize: 22,
    fontWeight: '700' as const,
    letterSpacing: -0.4,
    color: colors.text.primary,
  },
  headline: {
    fontSize: 30,
    lineHeight: 34,
    fontWeight: '700' as const,
    letterSpacing: -0.65,
    color: colors.text.primary,
    ...Platform.select({ android: { includeFontPadding: false }, default: {} }),
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '400' as const,
    letterSpacing: -0.15,
    color: colors.text.secondary,
  },
  caption: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.text.secondary,
  },
  /** "WE DELIVER CARE" under the healit lockup */
  brandTagline: {
    fontSize: 10,
    fontWeight: '600' as const,
    letterSpacing: 2.4,
    color: colors.text.onBrand,
    textAlign: 'center' as const,
    ...Platform.select({ android: { includeFontPadding: false }, default: {} }),
  },
  /** healit onboarding masthead tertiary line */
  onboardingOverline: {
    fontSize: 11,
    fontWeight: '600' as const,
    letterSpacing: 1.55,
    color: colors.text.secondary,
  },
  loginHeadline: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700' as const,
    letterSpacing: -0.5,
    color: colors.text.primary,
    textAlign: 'center' as const,
    ...Platform.select({ android: { includeFontPadding: false }, default: {} }),
  },
  loginSubtitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400' as const,
    color: colors.text.secondary,
    textAlign: 'center' as const,
  },
  loginLegal: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '400' as const,
    color: colors.text.muted,
    textAlign: 'center' as const,
  },
  loginLegalLink: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '600' as const,
    color: colors.text.tertiary,
    textDecorationLine: 'underline' as const,
  },
  inputPlaceholder: {
    fontSize: 16,
    fontWeight: '400' as const,
    color: colors.text.muted,
  },
  inputValue: {
    fontSize: 16,
    fontWeight: '500' as const,
    color: colors.text.primary,
  },
  countryCode: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.text.secondary,
  },
  productBrand: {
    fontSize: 10,
    fontWeight: '600' as const,
    letterSpacing: 0.8,
    color: colors.text.muted,
    textTransform: 'uppercase' as const,
  },
  productName: {
    fontSize: 13,
    fontWeight: '700' as const,
    color: colors.text.primary,
  },
  productMeta: {
    fontSize: 11,
    fontWeight: '400' as const,
    color: colors.text.secondary,
  },
  /** Pill CTA label */
  primaryCta: {
    fontSize: 16,
    fontWeight: '600' as const,
    letterSpacing: -0.2,
    color: colors.text.onBrand,
  },
} as const;
