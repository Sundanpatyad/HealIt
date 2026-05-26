import type { SVGProps } from 'react';

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}>
      <path d="M17.564 13.106c-.027-2.71 2.215-4.012 2.317-4.075-1.262-1.846-3.227-2.099-3.927-2.128-1.673-.169-3.265.984-4.115.984-.85 0-2.157-.96-3.546-.933-1.825.027-3.508 1.06-4.448 2.692-1.897 3.288-.484 8.155 1.36 10.825.901 1.307 1.973 2.776 3.378 2.724 1.357-.054 1.87-.879 3.51-.879 1.64 0 2.103.879 3.535.85 1.46-.027 2.387-1.332 3.282-2.645 1.034-1.518 1.46-2.989 1.486-3.064-.033-.014-2.85-1.094-2.832-4.351zM14.86 5.34c.74-.9 1.241-2.148 1.104-3.39-1.067.045-2.36.71-3.124 1.61-.686.797-1.286 2.073-1.125 3.29 1.19.092 2.405-.605 3.145-1.51z" />
    </svg>
  );
}

export function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
      {...props}>
      <defs>
        <linearGradient id="gp-blue" x1="9.2" y1="2.4" x2="-3.4" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00A0FF" />
          <stop offset="0.26" stopColor="#00A1FF" />
          <stop offset="0.51" stopColor="#00BEFF" />
          <stop offset="0.76" stopColor="#00D2FF" />
          <stop offset="1" stopColor="#00D9FF" />
        </linearGradient>
        <linearGradient id="gp-yellow" x1="29.7" y1="19.7" x2="0.4" y2="19.7" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFE000" />
          <stop offset="0.41" stopColor="#FFBD00" />
          <stop offset="0.78" stopColor="#FFA500" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient id="gp-red" x1="24.2" y1="22.5" x2="-5.6" y2="52.3" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient id="gp-green" x1="-2.4" y1="-5.3" x2="10.9" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#32A071" />
          <stop offset="0.07" stopColor="#2DA771" />
          <stop offset="0.48" stopColor="#15CF74" />
          <stop offset="0.8" stopColor="#06E775" />
          <stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
      <path
        d="M1.4 0.5C0.9 1 0.6 1.8 0.6 2.9v34.2c0 1.1.3 1.9.8 2.4l.1.1L20.7 20v-.5L1.5.4l-.1.1z"
        fill="url(#gp-blue)"
      />
      <path
        d="M27.1 26.5l-6.4-6.4v-.4l6.4-6.4.1.1 7.6 4.3c2.2 1.2 2.2 3.2 0 4.5l-7.6 4.3-.1 0z"
        fill="url(#gp-yellow)"
      />
      <path
        d="M27.2 26.4L20.7 19.9 1.4 39.4c.7.8 1.9.9 3.3.1l22.5-13.1"
        fill="url(#gp-red)"
      />
      <path
        d="M27.2 13.5L4.7.4C3.3-.4 2.1-.3 1.4.5l19.3 19.4 6.5-6.4z"
        fill="url(#gp-green)"
      />
    </svg>
  );
}
