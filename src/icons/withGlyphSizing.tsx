import type { FC, ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';

/** Extra props layered on transformer-generated SVGs for consistent sizing. */
export type ScalableSvgProps = SvgProps & {
  /** Equal width / height when you omit explicit `width` / `height`. */
  size?: number;
};

/** Wrap SVGR SVG components so they scale uniformly (`size` shorthand + flex-safe layout). */
export function withGlyphSizing(
  SvgComponent: FC<SvgProps>,
): FC<ScalableSvgProps> {
  const Sized = (props: ScalableSvgProps): ReactElement | null => {
    const { size = 24, width, height, style, ...rest } = props;
    const resolvedWidth = width ?? size;
    const resolvedHeight = height ?? size;

    return (
      <SvgComponent
        {...rest}
        width={resolvedWidth}
        height={resolvedHeight}
        style={[styles.root, StyleSheet.flatten(style)]}
      />
    );
  };

  Sized.displayName = `Sized(${SvgComponent.displayName ?? 'Svg'})`;
  return Sized;
}

const styles = StyleSheet.create({
  root: {
    flexShrink: 0,
  },
});
