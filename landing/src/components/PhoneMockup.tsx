import HealitWordmarkDark from '@app-svg/healit-wordmark-dark.svg?react';

import { PhoneFrame } from './PhoneFrame';
import { SvgIcon } from './SvgIcon';
import './PhoneMockup.css';

/** Login screen preview — matches app HeroMergeHeader + auth form. */
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
                <span className="app-preview__med-icon" aria-hidden>
                  💊
                </span>
                <div>
                  <span className="app-preview__med-name">Amoxicillin 500mg</span>
                  <strong>₹129</strong>
                </div>
              </article>
              <article className="app-preview__med app-preview__med--b">
                <span className="app-preview__med-icon" aria-hidden>
                  🩹
                </span>
                <div>
                  <span className="app-preview__med-name">Paracetamol strip</span>
                  <strong>₹49</strong>
                </div>
              </article>
              <span className="app-preview__verified">Verified pharmacy</span>
            </div>
            <div className="app-preview__dots" aria-hidden>
              <span className="app-preview__dot app-preview__dot--active" />
              <span className="app-preview__dot" />
            </div>
          </div>
          <div className="app-preview__merge" aria-hidden />
          <div className="app-preview__logo-wrap">
            <SvgIcon icon={HealitWordmarkDark} width={72} height={28} className="app-preview__logo" />
          </div>
        </div>

        <div className="app-preview__body">
          <p className="app-preview__headline">We Deliver Care</p>
          <p className="app-preview__sub">Log in or sign up</p>

          <div className="app-preview__field">
            <span className="app-preview__country">
              <span className="app-preview__flag">🇮🇳</span>
              +91
            </span>
            <span className="app-preview__input">98765 43210</span>
          </div>

          <div className="app-preview__cta">Log in</div>

          <div className="app-preview__or">
            <span />
            <em>OR</em>
            <span />
          </div>

          <button type="button" className="app-preview__outline" tabIndex={-1}>
            <GoogleIcon />
            Continue with google
          </button>
          <button type="button" className="app-preview__outline" tabIndex={-1}>
            <GuestIcon />
            Continue as guest
          </button>

          <p className="app-preview__legal">
            By Log in, you agree to our <span>Privacy Policy</span> and{' '}
            <span>Terms &amp; Conditions</span>.
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

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22 12c0-.68-.06-1.34-.17-1.97H12v3.72h5.64a5.5 5.5 0 0 1-2.39 3.61v2.98h3.87C20.9 18.5 22 15.5 22 12z" />
      <path fill="#34A853" d="M12 22c3.24 0 5.95-1.08 7.93-2.93l-3.87-2.98a6.1 6.1 0 0 1-4.06 1.4c-3.13 0-5.78-2.12-6.73-4.97H1.1v3.07A10 10 0 0 0 12 22z" />
      <path fill="#FBBC05" d="M5.27 14.52A6 6 0 0 1 5.1 12c0-.88.15-1.72.42-2.52V6.41H1.1A10 10 0 0 0 2 18.09l3.27-3.57z" />
      <path fill="#EA4335" d="M12 5.38c1.77 0 3.34.61 4.58 1.8l3.43-3.43C17.95 1.7 15.24.5 12 .5 7.7.5 3.9 3.08 2 6.91l3.27 3.57C6.22 7.5 8.87 5.38 12 5.38z" />
    </svg>
  );
}

function GuestIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
