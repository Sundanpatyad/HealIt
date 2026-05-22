import { StyleSheet, View } from 'react-native';

import Onboarding2Svg from '../../../icons/svg/onboarding/onboaring2.svg';

import type { IllustrationViewport } from './types';
import { spacing } from '../../../theme/spacing';

/** Matches `width` / `height` on the source SVG. */
const ARTBOARD_W = 333;
const ARTBOARD_H = 360;

/** Second onboarding slide artwork — `src/icons/svg/onboarding/onboaring2.svg`. */
export function Onboarding2Illustration({ viewportWidth }: IllustrationViewport) {
  const maxWidth = viewportWidth - spacing.screenHorizontal * 2;
  const width = Math.min(maxWidth, ARTBOARD_W);
  const height = (width / ARTBOARD_W) * ARTBOARD_H;

  return (
    <View style={styles.root}>
      <Onboarding2Svg width={width} height={height} />
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
