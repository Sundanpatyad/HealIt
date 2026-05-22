import { StyleSheet, View } from 'react-native';

import Onboarding1Svg from '../../../icons/svg/onboarding/onboaring1.svg';

import type { IllustrationViewport } from './types';
import { spacing } from '../../../theme/spacing';

/** Matches `width` / `height` on the source SVG. */
const ARTBOARD_W = 390;
const ARTBOARD_H = 408;

/** First onboarding slide artwork — `src/icons/svg/onboarding/onboaring1.svg`. */
export function Onboarding1Illustration({ viewportWidth }: IllustrationViewport) {
  const maxWidth = viewportWidth - spacing.screenHorizontal * 2;
  const width = Math.min(maxWidth, ARTBOARD_W);
  const height = (width / ARTBOARD_W) * ARTBOARD_H;

  return (
    <View style={styles.root}>
      <Onboarding1Svg width={width} height={height} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
