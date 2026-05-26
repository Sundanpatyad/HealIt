import { AppleIcon, GooglePlayIcon } from './icons/BrandIcons';
import './Cta.css';

export function Cta() {
  return (
    <section className="cta" id="download" aria-labelledby="cta-title">
      <div className="cta__glow" aria-hidden />
      <div className="cta__inner section-inner">
        <div className="cta__card">
          <p className="cta__label">Get the app</p>
          <h2 id="cta-title">Keep care close.</h2>
          <p>
            Healit is free. No subscription, no membership — just open it when
            you need it. iOS and Android.
          </p>
          <div className="cta__stores">
            <a
              className="store-badge"
              href="#"
              aria-label="Download on the App Store">
              <span className="store-badge__icon" aria-hidden>
                <AppleIcon width={24} height={24} />
              </span>
              <span className="store-badge__text">
                <small>Download on the</small>
                App Store
              </span>
            </a>
            <a
              className="store-badge"
              href="#"
              aria-label="Get it on Google Play">
              <span className="store-badge__icon" aria-hidden>
                <GooglePlayIcon width={22} height={24} />
              </span>
              <span className="store-badge__text">
                <small>Get it on</small>
                Google Play
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
