import { PhoneFrame } from './PhoneFrame';
import './DeliveryMapMock.css';

export function DeliveryMapMock() {
  return (
    <PhoneFrame tilt="right" className="delivery-mock">
      <div className="delivery-screen">
        <header className="delivery-screen__header">
          <span className="delivery-screen__back" aria-hidden>
            ‹
          </span>
          <div>
            <p className="delivery-screen__label">Live tracking</p>
            <h2 className="delivery-screen__title">Order on the way</h2>
          </div>
        </header>

        <div className="delivery-screen__map-wrap">
          <svg
            className="delivery-map"
            viewBox="0 0 240 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden>
            <rect width="240" height="200" fill="#EEF2F8" />
            <path
              d="M0 40 H240 M0 80 H240 M0 120 H240 M0 160 H240"
              stroke="#D8DCF0"
              strokeWidth="1"
            />
            <path
              d="M40 0 V200 M100 0 V200 M160 0 V200 M200 0 V200"
              stroke="#D8DCF0"
              strokeWidth="1"
            />
            <path
              d="M0 0 L240 200 M240 0 L0 200"
              stroke="#E8ECF4"
              strokeWidth="0.75"
              opacity="0.6"
            />
            <path
              className="delivery-map__route"
              d="M48 168 C72 148, 88 128, 108 108 S148 72, 188 52"
              stroke="url(#routeGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="48" cy="168" r="10" fill="#EDE9FE" stroke="#7C5BF7" strokeWidth="2" />
            <circle cx="48" cy="168" r="4" fill="#7C5BF7" />
            <g className="delivery-map__dest">
              <circle cx="188" cy="52" r="14" fill="rgba(124, 91, 247, 0.15)" />
              <circle cx="188" cy="52" r="8" fill="#7C5BF7" />
              <circle cx="188" cy="52" r="3" fill="#fff" />
            </g>
            <defs>
              <linearGradient id="routeGrad" x1="48" y1="168" x2="188" y2="52">
                <stop stopColor="#B8AEFF" />
                <stop offset="1" stopColor="#7C5BF7" />
              </linearGradient>
            </defs>
          </svg>

          <div className="delivery-rider" aria-hidden>
            <span className="delivery-rider__pulse" />
            <span className="delivery-rider__icon">
              <ScooterIcon />
            </span>
          </div>

          <div className="delivery-eta-chip">
            <strong>12 min</strong>
            <span>away</span>
          </div>
        </div>

        <div className="delivery-screen__sheet">
          <div className="delivery-screen__sheet-handle" aria-hidden />
          <div className="delivery-screen__rider-row">
            <div className="delivery-screen__avatar">RK</div>
            <div>
              <p className="delivery-screen__rider-name">Rahul is heading to you</p>
              <p className="delivery-screen__rider-meta">Healit Partner · 4.9 ★</p>
            </div>
            <button type="button" className="delivery-screen__call" aria-label="Call rider">
              <PhoneIcon />
            </button>
          </div>
          <div className="delivery-screen__order">
            <span>Amoxicillin · Paracetamol</span>
            <strong>2 items</strong>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 4h8l1 14H7L8 4zm4 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScooterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 17h8M10 12l2-4h4l2 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 8V6h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
