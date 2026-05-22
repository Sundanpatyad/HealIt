/** Mirrors ExpoNavApp `src/theme/colors.ts` + gradients for the marketing site. */
export const colors = {
  brand: {
    violet: '#7C5BF7',
    violetDark: '#24145D',
    lavender: '#EDE9FE',
    lavenderDeep: '#E4DDFB',
  },
  text: {
    primary: '#13151F',
    secondary: '#5E6677',
    onBrand: '#FFFFFF',
  },
  surface: {
    white: '#FFFFFF',
    muted: '#F8F7FF',
  },
  login: {
    gradientTop: '#C5C5FF',
    outline: '#5E35B1',
  },
  highlight: '#4328A9',
  divider: '#D9DDE5',
} as const;

export const gradients = {
  loginBackground: [
    colors.login.gradientTop,
    colors.brand.lavenderDeep,
    colors.brand.lavender,
    colors.surface.white,
  ],
  loginBackgroundStops: ['0%', '22%', '42%', '58%'],
  heroFade: [
    'rgba(255, 255, 255, 0)',
    'rgba(255, 255, 255, 0.45)',
    'rgba(255, 255, 255, 0.92)',
    colors.surface.white,
  ],
} as const;
