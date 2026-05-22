import { DeliveryMapMock } from './DeliveryMapMock';
import { PhoneMockup } from './PhoneMockup';
import './HeroPhones.css';

export function HeroPhones() {
  return (
    <div className="hero-phones" aria-hidden>
      <p className="hero-phones__caption">Order → track → delivered</p>
      <div className="hero-phones__stage">
        <DeliveryMapMock />
        <PhoneMockup />
      </div>
      <p className="hero-phones__scroll-hint">Swipe to see both screens</p>
    </div>
  );
}
