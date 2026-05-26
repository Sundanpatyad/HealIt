import HealitWordmarkDark from '@app-svg/healit-wordmark-dark.svg?react';

import { PhoneFrame } from './PhoneFrame';
import { SvgIcon } from './SvgIcon';
import './PhoneMockup.css';

export function PhoneMockup() {
  return (
    <PhoneFrame tilt="left" className="login-mock" aria-hidden>
      <div className="app-preview">
        <div className="app-preview__status" aria-hidden>
          <span className="app-preview__time">9:41</span>
          <span className="app-preview__status-icons">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </span>
        </div>

        <div className="app-preview__hero-zone">
          <div className="app-preview__artwork">
            <div className="app-preview__scene">
              <article className="app-preview__med app-preview__med--a">
                <span className="app-preview__med-icon app-preview__med-icon--a" aria-hidden>
                  <PillIcon />
                </span>
                <div className="app-preview__med-text">
                  <span className="app-preview__med-name">Amoxicillin 500mg</span>
                  <span className="app-preview__med-sub">Strip of 10</span>
                  <strong>₹129</strong>
                </div>
              </article>
              <article className="app-preview__med app-preview__med--b">
                <span className="app-preview__med-icon app-preview__med-icon--b" aria-hidden>
                  <CapsuleIcon />
                </span>
                <div className="app-preview__med-text">
                  <span className="app-preview__med-name">Paracetamol 650</span>
                  <span className="app-preview__med-sub">Strip of 15</span>
                  <strong>₹49</strong>
                </div>
              </article>
              <span className="app-preview__verified">
                <span className="app-preview__verified-dot" />
                Verified pharmacy
              </span>
            </div>
            <div className="app-preview__dots" aria-hidden>
              <span className="app-preview__dot app-preview__dot--active" />
              <span className="app-preview__dot" />
              <span className="app-preview__dot" />
            </div>
          </div>
          <div className="app-preview__merge" aria-hidden />
          <div className="app-preview__logo-wrap">
            <SvgIcon icon={HealitWordmarkDark} width={72} height={28} className="app-preview__logo" />
          </div>
        </div>

        <div className="app-preview__body">
          <p className="app-preview__headline">Welcome to Healit</p>
          <p className="app-preview__sub">Log in or sign up to continue</p>

          <div className="app-preview__field">
            <span className="app-preview__country">
              <span className="app-preview__flag">🇮🇳</span>
              +91
            </span>
            <span className="app-preview__input">98765 43210</span>
          </div>

          <div className="app-preview__cta">
            Send OTP
            <ArrowIcon />
          </div>

          <div className="app-preview__or">
            <span />
            <em>or continue with</em>
            <span />
          </div>

          <div className="app-preview__socials">
            <button type="button" className="app-preview__social" tabIndex={-1}>
              <GoogleIcon />
            </button>
            <button type="button" className="app-preview__social" tabIndex={-1}>
              <AppleAuthIcon />
            </button>
            <button type="button" className="app-preview__social" tabIndex={-1}>
              <GuestIcon />
            </button>
          </div>

          <p className="app-preview__legal">
            By continuing, you agree to our <span>Terms</span> &amp; <span>Privacy</span>.
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}

function SignalIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden>
      <rect x="0" y="6" width="2" height="4" rx="0.5" fill="currentColor" />
      <rect x="3" y="4" width="2" height="6" rx="0.5" fill="currentColor" />
      <rect x="6" y="2" width="2" height="8" rx="0.5" fill="currentColor" />
      <rect x="9" y="0" width="2" height="10" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" aria-hidden>
      <path
        d="M6 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2.5 5.5a5 5 0 0 1 7 0M1 3.5a7.5 7.5 0 0 1 10 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" aria-hidden>
      <rect x="0.5" y="0.5" width="14" height="9" rx="2" stroke="currentColor" fill="none" />
      <rect x="2" y="2" width="10" height="6" rx="1" fill="currentColor" />
      <path d="M15.5 3.5v3h2v-3h-2z" fill="currentColor" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="9" width="18" height="6" rx="3" fill="#FFFFFF" stroke="#7C5BF7" strokeWidth="1.5" />
      <path d="M12 9v6" stroke="#7C5BF7" strokeWidth="1.5" />
      <rect x="3" y="9" width="9" height="6" rx="3" fill="#EDE9FE" />
    </svg>
  );
}

function CapsuleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="9"
        width="18"
        height="6"
        rx="3"
        transform="rotate(-30 12 12)"
        fill="#FFFFFF"
        stroke="#22C55E"
        strokeWidth="1.5"
      />
      <path
        d="M12 12l-3.7 3.7"
        stroke="#22C55E"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform="rotate(-30 12 12)"
      />
      <rect
        x="3"
        y="9"
        width="9"
        height="6"
        rx="3"
        transform="rotate(-30 12 12)"
        fill="#DCFCE7"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22 12c0-.68-.06-1.34-.17-1.97H12v3.72h5.64a5.5 5.5 0 0 1-2.39 3.61v2.98h3.87C20.9 18.5 22 15.5 22 12z" />
      <path fill="#34A853" d="M12 22c3.24 0 5.95-1.08 7.93-2.93l-3.87-2.98a6.1 6.1 0 0 1-4.06 1.4c-3.13 0-5.78-2.12-6.73-4.97H1.1v3.07A10 10 0 0 0 12 22z" />
      <path fill="#FBBC05" d="M5.27 14.52A6 6 0 0 1 5.1 12c0-.88.15-1.72.42-2.52V6.41H1.1A10 10 0 0 0 2 18.09l3.27-3.57z" />
      <path fill="#EA4335" d="M12 5.38c1.77 0 3.34.61 4.58 1.8l3.43-3.43C17.95 1.7 15.24.5 12 .5 7.7.5 3.9 3.08 2 6.91l3.27 3.57C6.22 7.5 8.87 5.38 12 5.38z" />
    </svg>
  );
}

function AppleAuthIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.564 13.106c-.027-2.71 2.215-4.012 2.317-4.075-1.262-1.846-3.227-2.099-3.927-2.128-1.673-.169-3.265.984-4.115.984-.85 0-2.157-.96-3.546-.933-1.825.027-3.508 1.06-4.448 2.692-1.897 3.288-.484 8.155 1.36 10.825.901 1.307 1.973 2.776 3.378 2.724 1.357-.054 1.87-.879 3.51-.879 1.64 0 2.103.879 3.535.85 1.46-.027 2.387-1.332 3.282-2.645 1.034-1.518 1.46-2.989 1.486-3.064-.033-.014-2.85-1.094-2.832-4.351zM14.86 5.34c.74-.9 1.241-2.148 1.104-3.39-1.067.045-2.36.71-3.124 1.61-.686.797-1.286 2.073-1.125 3.29 1.19.092 2.405-.605 3.145-1.51z" />
    </svg>
  );
}

function GuestIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
