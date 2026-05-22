import './Cta.css';

export function Cta() {
  const bg = `linear-gradient(180deg, var(--surface-muted) 0%, var(--brand-lavender) 50%, var(--login-gradient-top) 100%)`;

  return (
    <section
      className="cta"
      id="download"
      style={{ background: bg }}
      aria-labelledby="cta-title">
      <div className="cta__inner section-inner">
        <h2 id="cta-title">Start delivering care today</h2>
        <p>Download Healit on iOS or Android and get medicines from trusted stores — fast.</p>
        <div className="cta__stores">
          <a className="store-badge" href="#" aria-label="Download on the App Store">
            <span>
              <small>Download on the</small>
              App Store
            </span>
          </a>
          <a className="store-badge" href="#" aria-label="Get it on Google Play">
            <span>
              <small>Get it on</small>
              Google Play
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
