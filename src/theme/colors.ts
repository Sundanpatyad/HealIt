/**
 * Semantic color palette — backgrounds, overlays, gradients, accents.
 */

export const colors = {
  brand: {
    violet: '#7C5BF7',
    violetDark: '#24145D',
    lavender: '#EDE9FE',
    lavenderDeep: '#E4DDFB',
  },
  chrome: {
    /** Main stack / home canvas */
    screen: '#E8EEF5',
    /** Third stop in onboarding screen gradient header */
    screenWash: '#F6F9FF',
    navigatorTitle: '#0B0F14',
  },
  text: {
    primary: '#13151F',
    secondary: '#5E6677',
    tertiary: '#394452',
    muted: '#5C6978',
    onBrand: '#FFFFFF',
    /** Home secondary heading contrast on screen */
    slab: '#0B0F14',
  },
  surface: {
    white: '#FFFFFF',
    muted: '#F8F7FF',
    /** Hero card soft tint */
    frostedPurple: '#F3EAFF',
    cardShadow: 'rgba(19, 21, 31, 0.08)',
  },
  divider: '#D9DDE5',
  dotInactive: '#D5D9E6',
  dotActive: '#6938EF',
  highlight: '#4328A9',
  login: {
    cta: '#B8AEFF',
    ctaPressed: '#A89CF0',
    outline: '#5E35B1',
    gradientTop: '#C5C5FF',
    gradientMid: '#EDE9FE',
    inputBorder: '#D9DDE5',
    strikethrough: '#9AA3B2',
  },
  /** Primary pill CTA (vertical gradient anchors) */
  ctaGradient: {
    top: '#492FAB',
    mid: '#492FAB',
    bottom: '#2E1A6B',
    /** Soft purple bloom under the pill */
    shadowIos: '#6F55D6',
  },
  overlays: {
    veil35: 'rgba(255, 255, 255, 0.35)',
    white28: 'rgba(255, 255, 255, 0.28)',
    white42: 'rgba(255, 255, 255, 0.42)',
    white58: 'rgba(255, 255, 255, 0.58)',
    white68: 'rgba(255, 255, 255, 0.68)',
    /** Thin top lip on gradient buttons */
    white72: 'rgba(255, 255, 255, 0.72)',
    white14: 'rgba(255, 255, 255, 0.14)',
    white18: 'rgba(255, 255, 255, 0.18)',
    white45: 'rgba(255, 255, 255, 0.45)',
    white50: 'rgba(255, 255, 255, 0.50)',
    white96: 'rgba(255, 255, 255, 0.96)',
    bottomTrim: 'rgba(18, 12, 62, 0.55)',
    /** Catalog / badges */
    deepPrice: '#EAE4FF',
    lilacHairline: '#D8DCF0',
    lilacAccent: '#D7DCF5',
    flatBlackRipple: '#000000',
    tinyShadowPurple: 'rgba(52, 37, 146, 0.45)',
  },
  illustrations: {
    mapWash: 'rgba(237, 232, 253, 0.55)',
    mapBorder: 'rgba(105, 56, 239, 0.08)',
    dot: 'rgba(105, 56, 239, 0.28)',
    haloVioletSoft: 'rgba(105, 56, 239, 0.16)',
    haloViolet: 'rgba(105, 56, 239, 0.18)',
    glassBackTint: 'rgba(247, 246, 255, 0.94)',
    glassFrontTint: 'rgba(255, 255, 255, 0.94)',
    pillTrack: 'rgba(237, 237, 246, 1)',
    pillWhite: 'rgba(255, 255, 255, 0.9)',
    deepCanvas: 'rgba(12, 37, 104, 0.25)',
    badgeShadow: '#1E1F3F',
    avatarGlow: 'rgba(0, 0, 0, 0.2)',
    pillHighlight: 'rgba(255, 255, 255, 0.42)',
    shadowPurpleSm: 'rgba(0, 0, 0, 0.15)',
    shadowPurpleSmIos: 'rgba(0, 0, 0, 0.2)',
    shadowBlackIos: 'rgba(0, 0, 0, 0.15)',
    tagBorder: '#E2E8F8',
  },
  glassPlate: {
    blurTintIos: 'rgba(255, 255, 255, 0.06)',
    solidAndroid: 'rgba(255, 255, 255, 0.93)',
    borderSoft: 'rgba(135, 138, 157, 0.22)',
    borderStrong: 'rgba(135, 138, 157, 0.35)',
    shadow: 'rgba(31, 41, 92, 0.12)',
  },
} as const;
