import { PhoneFrame } from './PhoneFrame';
import './DeliveryMapMock.css';

export function DeliveryMapMock() {
  return (
    <PhoneFrame tilt="right" className="delivery-mock">
      <div className="delivery-screen">
        <div className="delivery-screen__status" aria-hidden>
          <span>9:41</span>
          <span className="delivery-screen__status-icons">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </span>
        </div>

        <header className="delivery-screen__header">
          <button type="button" className="delivery-screen__back" aria-label="Back" tabIndex={-1}>
            <ChevronLeftIcon />
          </button>
          <div className="delivery-screen__heading">
            <p className="delivery-screen__label">Live tracking</p>
            <h2 className="delivery-screen__title">Order #HL-2841</h2>
          </div>
          <span className="delivery-screen__pill">
            <span className="delivery-screen__pill-dot" />
            On the way
          </span>
        </header>

        <div className="delivery-screen__progress" aria-hidden>
          <div className="delivery-screen__bar">
            <div className="delivery-screen__bar-fill" />
          </div>
          <ol className="delivery-screen__steps">
            <li className="delivery-screen__step delivery-screen__step--done">Confirmed</li>
            <li className="delivery-screen__step delivery-screen__step--done">Packed</li>
            <li className="delivery-screen__step delivery-screen__step--active">En route</li>
            <li className="delivery-screen__step">Delivered</li>
          </ol>
        </div>

        <div className="delivery-screen__map-wrap">
          <svg
            className="delivery-map"
            viewBox="0 0 240 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden>
            <defs>
              <linearGradient id="map-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#EEF2FB" />
                <stop offset="1" stopColor="#E4E9F4" />
              </linearGradient>
              <linearGradient id="map-route" x1="36" y1="180" x2="200" y2="36">
                <stop stopColor="#C5B8FF" />
                <stop offset="1" stopColor="#7C5BF7" />
              </linearGradient>
              <linearGradient id="map-route-glow" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#7C5BF7" stopOpacity="0.25" />
                <stop offset="1" stopColor="#7C5BF7" stopOpacity="0" />
              </linearGradient>
            </defs>

            <rect width="240" height="220" fill="url(#map-bg)" />

            <path
              d="M-10 60 C 40 50, 90 80, 140 70 S 230 50, 260 70"
              stroke="#C7D0E4"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              opacity="0.55"
            />
            <path
              d="M-10 60 C 40 50, 90 80, 140 70 S 230 50, 260 70"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />

            <path
              d="M-10 170 C 60 160, 120 180, 180 175 S 240 168, 260 172"
              stroke="#D5DBEA"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />

            <path d="M40 -10 C 50 60, 30 120, 60 230" stroke="#D5DBEA" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.55" />
            <path d="M195 -10 C 188 50, 210 130, 200 230" stroke="#D5DBEA" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.5" />
            <path d="M120 -10 C 130 80, 110 140, 135 230" stroke="#DDE3F0" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.55" />

            <path d="M-10 110 C 40 105, 90 118, 140 112 S 220 108, 260 110" stroke="#DDE3F0" strokeWidth="2.5" fill="none" opacity="0.7" />
            <path d="M-10 35 C 60 28, 110 40, 170 32" stroke="#DDE3F0" strokeWidth="2" fill="none" opacity="0.6" />

            <path d="M165 90 C 175 100, 195 105, 215 95 L 215 130 C 195 138, 175 130, 165 122 Z" fill="#CDE6D0" opacity="0.75" />
            <circle cx="180" cy="110" r="3" fill="#9CC9A4" opacity="0.7" />
            <circle cx="200" cy="120" r="2.5" fill="#9CC9A4" opacity="0.7" />
            <circle cx="195" cy="100" r="2" fill="#9CC9A4" opacity="0.7" />

            <rect x="20" y="80" width="14" height="18" rx="1.5" fill="#DCE2EE" />
            <rect x="36" y="85" width="10" height="13" rx="1.5" fill="#DCE2EE" />
            <rect x="78" y="90" width="22" height="14" rx="1.5" fill="#DCE2EE" />
            <rect x="78" y="130" width="14" height="20" rx="1.5" fill="#DCE2EE" />
            <rect x="96" y="135" width="10" height="15" rx="1.5" fill="#DCE2EE" />
            <rect x="125" y="130" width="18" height="14" rx="1.5" fill="#DCE2EE" />
            <rect x="38" y="135" width="20" height="22" rx="1.5" fill="#DCE2EE" />
            <rect x="148" y="160" width="22" height="14" rx="1.5" fill="#DCE2EE" />
            <rect x="172" y="160" width="14" height="14" rx="1.5" fill="#DCE2EE" />

            <path
              className="delivery-map__route-glow"
              d="M42 178 C 80 158, 102 138, 122 116 S 168 70, 196 44"
              stroke="url(#map-route-glow)"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <path
              className="delivery-map__route"
              d="M42 178 C 80 158, 102 138, 122 116 S 168 70, 196 44"
              stroke="url(#map-route)"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />

            <g className="delivery-map__origin">
              <circle cx="42" cy="178" r="13" fill="#FFFFFF" stroke="#7C5BF7" strokeWidth="2" />
              <circle cx="42" cy="178" r="7.5" fill="#7C5BF7" />
              <text x="42" y="181" textAnchor="middle" fontSize="7" fill="#FFFFFF" fontWeight="700">
                Rx
              </text>
            </g>

            <g className="delivery-map__dest">
              <circle cx="196" cy="44" r="16" fill="rgba(124, 91, 247, 0.14)" />
              <circle cx="196" cy="44" r="11" fill="#FFFFFF" />
              <path
                d="M196 38l5 4.4v6.1h-3.2v-3.4h-3.6v3.4H191v-6.1z"
                fill="#7C5BF7"
              />
            </g>

            <g className="delivery-map__rider" aria-hidden>
              <circle r="13" fill="#7C5BF7" opacity="0.22">
                <animate
                  attributeName="r"
                  values="10;19;10"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.42;0;0.42"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="10.5" fill="#ffffff" stroke="#7C5BF7" strokeWidth="1.4" />
              <image
                href="/scooter-rider.png"
                x="-8.5"
                y="-8.5"
                width="17"
                height="17"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          </svg>

          <div className="delivery-nav">
            <span className="delivery-nav__icon" aria-hidden>
              <TurnRightIcon />
            </span>
            <div className="delivery-nav__body">
              <p className="delivery-nav__main">
                In <strong>200 m</strong>, turn right
              </p>
              <p className="delivery-nav__street">onto MG Road</p>
            </div>
            <div className="delivery-nav__eta">
              <strong>12 min</strong>
              <span>2.4 km</span>
            </div>
          </div>
        </div>

        <div className="delivery-screen__sheet">
          <div className="delivery-screen__sheet-handle" aria-hidden />
          <div className="delivery-screen__rider-row">
            <div className="delivery-screen__avatar">RK</div>
            <div className="delivery-screen__rider-info">
              <p className="delivery-screen__rider-name">Rahul is on the way</p>
              <p className="delivery-screen__rider-meta">
                <span>★ 4.9</span>
                <span>·</span>
                <span>840 trips</span>
                <span>·</span>
                <span>KA-05 BX 2841</span>
              </p>
            </div>
            <button type="button" className="delivery-screen__call" aria-label="Call rider" tabIndex={-1}>
              <PhoneIcon />
            </button>
          </div>

          <div className="delivery-screen__order">
            <div className="delivery-screen__order-items">
              <span className="delivery-screen__order-pill">Amoxicillin 500</span>
              <span className="delivery-screen__order-pill">Paracetamol 650</span>
            </div>
            <strong>₹178</strong>
          </div>
          <div className="delivery-screen__from">
            <span className="delivery-screen__from-icon" aria-hidden>
              <PharmacyIcon />
            </span>
            <span>
              From <strong>Apollo Pharmacy</strong> · HSR Layout
            </span>
          </div>
          <p className="delivery-screen__address">
            <PinIcon />
            Deliver to · Home · Sector 18, Noida
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TurnRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 21V11a4 4 0 0 1 4-4h7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.13 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PharmacyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6" width="18" height="14" rx="2" fill="#7C5BF7" />
      <path d="M12 9v8M8 13h8" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="6" y="3" width="12" height="3.5" rx="1" fill="#7C5BF7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
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
