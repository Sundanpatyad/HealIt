import './Cta.css';

export function Cta() {
  return (
    <section className="cta" id="download" aria-labelledby="cta-title">
      <div className="cta__glow" aria-hidden />
      <div className="cta__inner section-inner">
        <div className="cta__card">
          <p className="cta__label">Download</p>
          <h2 id="cta-title">Start delivering care today</h2>
          <p>
            Download Healit on iOS or Android and get medicines from trusted stores — fast.
          </p>
          <div className="cta__stores">
            <a className="store-badge store-badge--apple" href="#" aria-label="Download on the App Store">
              <span className="store-badge__icon" aria-hidden>
                
              </span>
              <span>
                <small>Download on the</small>
                App Store
              </span>
            </a>
            <a className="store-badge store-badge--play" href="#" aria-label="Get it on Google Play">
              <span className="store-badge__icon store-badge__icon--play" aria-hidden />
              <span>
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
