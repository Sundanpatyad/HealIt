import { HealitWordmark } from './HealitWordmark';
import './Trust.css';

export function Trust() {
  return (
    <section className="trust" id="trust" aria-labelledby="trust-title">
      <div className="section-inner trust__inner">
        <p className="section-label">Our promise</p>
        <h2 className="section-title" id="trust-title">
          Safe. Reliable. Always there.
        </h2>
        <div className="trust__panel">
          <div className="trust__copy">
            <HealitWordmark tone="light" width={100} />
            <p>
              Healit connects you to genuine meds and verified stores — because relief
              shouldn&apos;t come with doubt. Built for families, caregivers, and anyone who
              needs care without delay.
            </p>
          </div>
          <dl className="trust__stats">
            <div>
              <dt>Verified</dt>
              <dd>Partner pharmacies</dd>
            </div>
            <div>
              <dt>24/7</dt>
              <dd>Order when you need</dd>
            </div>
            <div>
              <dt>Secure</dt>
              <dd>Private health data</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
