declare module '*.svg' {
  import type { FC } from 'react';
  import type { SvgProps } from 'react-native-svg';

  /**
   * SVGR-produced component compatible with scaled wrappers in `src/icons`.
   */
  const SvgComponent: FC<SvgProps>;
  export default SvgComponent;
}
