import HealitWordmarkDark from '@app-svg/healit-wordmark-dark.svg?react';
import HealitWordmarkLight from '@app-svg/healit-wordmark.svg?react';

import { SvgIcon } from './SvgIcon';
import './HealitWordmark.css';

type Props = {
  tone?: 'light' | 'dark';
  width?: number;
  showTagline?: boolean;
};

const VIEWBOX_W = 120;
const VIEWBOX_H = 47;

export function HealitWordmark({
  tone = 'dark',
  width = 120,
  showTagline = false,
}: Props) {
  const height = (width / VIEWBOX_W) * VIEWBOX_H;
  const Logo = tone === 'dark' ? HealitWordmarkDark : HealitWordmarkLight;

  return (
    <div className={`wordmark wordmark--${tone}`}>
      <SvgIcon icon={Logo} width={width} height={height} aria-label="Healit" />
      {showTagline ? <p className="wordmark__tagline">WE DELIVER CARE</p> : null}
    </div>
  );
}
