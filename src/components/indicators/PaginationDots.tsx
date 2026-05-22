import { StyleSheet, View } from 'react-native';

import { colors, spacing, radii, sizes } from '../../theme';

type Props = {
  total: number;
  activeIndex: number;
};

/**
 * Accessible page indicator — layout + colors sourced from `/src/theme`.
 */
export function PaginationDots({ total, activeIndex }: Props) {
  return (
    <View
      accessibilityLabel={`Step ${Math.min(activeIndex + 1, total)} of ${total}`}
      style={styles.wrapper}>
      <View style={styles.row}>
        {Array.from({ length: total }).map((_, i) => (
          <View
            key={String(i)}
            style={[styles.dot, i === activeIndex ? styles.dotActive : styles.dotIdle]}
          />
        ))}
      </View>
    </View>
  );
}

const DOT = sizes.dot.base;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: spacing.pagerDotGap,
    alignItems: 'center',
  },
  dot: {
    width: DOT,
    height: DOT,
    borderRadius: DOT / 2,
    backgroundColor: colors.dotInactive,
  },
  dotActive: {
    backgroundColor: colors.dotActive,
    transform: [{ scale: 1.15 }],
    width: sizes.dot.activeWidth,
    height: sizes.dot.activeHeight,
    borderRadius: sizes.dot.activeRadius,
  },
  dotIdle: { opacity: 0.8 },
});
