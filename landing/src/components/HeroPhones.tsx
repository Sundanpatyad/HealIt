import { DeliveryMapMock } from './DeliveryMapMock';
import { PhoneMockup } from './PhoneMockup';
import './HeroPhones.css';

export function HeroPhones() {
  return (
    <div className="hero-phones" aria-hidden>
      <span className="hero-phones__chip">
        <span className="hero-phones__chip-dot" />
        Live tracking
      </span>

      <div className="hero-phones__stage">
        <PhoneMockup />
        <DeliveryMapMock />
      </div>

      <p className="hero-phones__hint">Swipe · Login &amp; delivery</p>
    </div>
  );
}
