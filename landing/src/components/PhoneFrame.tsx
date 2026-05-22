import type { ReactNode } from 'react';

import './PhoneFrame.css';

type Props = {
  children: ReactNode;
  className?: string;
  tilt?: 'none' | 'left' | 'right';
};

export function PhoneFrame({ children, className = '', tilt = 'none' }: Props) {
  const tiltClass = tilt === 'none' ? '' : `phone-frame--${tilt}`;
  return (
    <div className={`phone-frame ${tiltClass} ${className}`.trim()}>
      <div className="phone-frame__glow" />
      <div className="phone-frame__device">
        <div className="phone-frame__island" />
        <div className="phone-frame__screen">{children}</div>
      </div>
    </div>
  );
}
