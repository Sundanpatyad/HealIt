import type { ReactNode } from 'react';

import ArrowForwardSvg from './svg/arrow-forward.svg';
import CheckSvg from './svg/check.svg';
import MagnifyingGlassSvg from './svg/magnifying-glass.svg';
import { type ScalableSvgProps, withGlyphSizing } from './withGlyphSizing';

/** Scaled SVG glyphs — drop new `.svg` files under `svg/`, import, then add one entry below. */
export const Glyph = {
  ArrowForward: withGlyphSizing(ArrowForwardSvg),
  Check: withGlyphSizing(CheckSvg),
  MagnifyingGlass: withGlyphSizing(MagnifyingGlassSvg),
} as const;

export type GlyphName = keyof typeof Glyph;

export type SvgIconProps = ScalableSvgProps & {
  glyph: GlyphName;
};

/**
 * Use when the glyph is driven by runtime data (`glyph="Check"`-style).
 * Prefer `Glyph.Check` directly for static usages.
 */
export function SvgIcon({ glyph, ...rest }: SvgIconProps): ReactNode {
  const Cmp = Glyph[glyph];
  return <Cmp {...rest} />;
}
