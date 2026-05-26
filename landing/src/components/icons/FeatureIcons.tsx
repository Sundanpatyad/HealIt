import type { SVGProps } from 'react';

const defaults: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

export function ScooterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="6" cy="17.5" r="2.5" />
      <circle cx="18" cy="17.5" r="2.5" />
      <path d="M8.5 17.5h6.7" />
      <path d="M15.5 17.5l1.6-6.5h-3.4" />
      <path d="M13.7 11l-2-4.5h-3.2" />
      <path d="M5.2 11.5l1.6-3h3.5" />
      <path d="M17.1 11h2.4" />
    </svg>
  );
}

export function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 3l8 3v6c0 4.5-3.2 8.5-8 9-4.8-.5-8-4.5-8-9V6l8-3z" />
      <path d="M8.5 12.2l2.5 2.5 4.5-4.8" />
    </svg>
  );
}

export function PrescriptionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaults} {...props}>
      <path d="M6 3.5h9l3.5 3.5v11.5a2 2 0 01-2 2H6a2 2 0 01-2-2V5.5a2 2 0 012-2z" />
      <path d="M14.5 3.5V7H18" />
      <path d="M8 11h4" />
      <path d="M8 14h6" />
      <path d="M8 17h4.5" />
      <path d="M14.5 15.5l3 3" />
    </svg>
  );
}
