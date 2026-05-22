import { PhoneFrame } from './PhoneFrame';
import './DeliveryMapMock.css';

export function DeliveryMapMock() {
  return (
    <PhoneFrame tilt="right" className="delivery-mock">
      <div className="delivery-screen">
        <div className="delivery-screen__status" aria-hidden>
          <span>9:41</span>
        </div>

        <header className="delivery-screen__header">
          <span className="delivery-screen__back" aria-hidden>
            ‹
          </span>
          <div>
            <p className="delivery-screen__label">Live tracking</p>
            <h2 className="delivery-screen__title">Order #HL-2841</h2>
          </div>
          <span className="delivery-screen__pill">On the way</span>
        </header>

        <ol className="delivery-screen__steps" aria-hidden>
          <li className="delivery-screen__step delivery-screen__step--done">Confirmed</li>
          <li className="delivery-screen__step delivery-screen__step--done">Packed</li>
          <li className="delivery-screen__step delivery-screen__step--active">En route</li>
          <li className="delivery-screen__step">Delivered</li>
        </ol>

        <div className="delivery-screen__map-wrap">
          <svg
            className="delivery-map"
            viewBox="0 0 240 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden>
            <rect width="240" height="200" fill="#E8ECF6" />
            <path d="M0 55h240M0 105h240M0 155h240" stroke="#D5DBEA" strokeWidth="1" />
            <path d="M50 0v200M120 0v200M185 0v200" stroke="#D5DBEA" strokeWidth="1" />
            <rect x="18" y="22" width="42" height="28" rx="4" fill="#DDE3F0" />
            <rect x="148" y="18" width="52" height="34" rx="4" fill="#DDE3F0" />
            <rect x="72" y="118" width="58" height="36" rx="4" fill="#D4E8DC" opacity="0.7" />
            <path
              className="delivery-map__route"
              d="M52 158 C78 138, 95 118, 118 98 S158 68, 192 48"
              stroke="url(#routeGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <g>
              <circle cx="52" cy="158" r="11" fill="#EDE9FE" stroke="#7C5BF7" strokeWidth="2" />
              <text x="52" y="162" textAnchor="middle" fontSize="8" fill="#5E35B1" fontWeight="700">
                Rx
              </text>
            </g>
            <g className="delivery-map__dest">
              <circle cx="192" cy="48" r="15" fill="rgba(124, 91, 247, 0.12)" />
              <circle cx="192" cy="48" r="9" fill="#7C5BF7" />
              <path
                d="M192 42c-3.3 0-6 2.5-6 5.5 0 4 6 9.5 6 9.5s6-5.5 6-9.5c0-3-2.7-5.5-6-5.5z"
                fill="#fff"
                transform="translate(0 -1)"
              />
            </g>
            <defs>
              <linearGradient id="routeGrad" x1="52" y1="158" x2="192" y2="48">
                <stop stopColor="#C5B8FF" />
                <stop offset="1" stopColor="#7C5BF7" />
              </linearGradient>
            </defs>
          </svg>

          <div className="delivery-map__store-chip">
            <span>Apollo Pharmacy</span>
          </div>

          <div className="delivery-rider" aria-hidden>
            <span className="delivery-rider__pulse" />
            <span className="delivery-rider__icon">
              <ScooterIcon />
            </span>
          </div>

          <div className="delivery-eta-chip">
            <strong>12 min</strong>
            <span>ETA · 2.4 km</span>
          </div>
        </div>

        <div className="delivery-screen__sheet">
          <div className="delivery-screen__sheet-handle" aria-hidden />
          <div className="delivery-screen__rider-row">
            <div className="delivery-screen__avatar">RK</div>
            <div>
              <p className="delivery-screen__rider-name">Rahul is heading to you</p>
              <p className="delivery-screen__rider-meta">Healit Partner · ★ 4.9 · 840+ trips</p>
            </div>
            <button type="button" className="delivery-screen__call" aria-label="Call rider" tabIndex={-1}>
              <PhoneIcon />
            </button>
          </div>
          <div className="delivery-screen__order">
            <div className="delivery-screen__order-items">
              <span className="delivery-screen__order-pill">Amoxicillin</span>
              <span className="delivery-screen__order-pill">Paracetamol</span>
            </div>
            <strong>₹178 · 2 items</strong>
          </div>
          <p className="delivery-screen__address">Deliver to · Home · Sector 18, Noida</p>
        </div>
      </div>
    </PhoneFrame>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 3h8a2 2 0 0 1 2 2v14l-4-2.5H10L6 19V5a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScooterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 17h8M10 12l2-4h4l2 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
