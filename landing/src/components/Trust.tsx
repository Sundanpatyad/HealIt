import { HealitWordmark } from './HealitWordmark';
import './Trust.css';

export function Trust() {
  return (
    <section className="trust" id="trust" aria-labelledby="trust-title">
      <div className="section-inner trust__inner">
        <header className="section-head section-head--center">
          <p className="section-label">Our promise</p>
          <h2 className="section-title" id="trust-title">
            Boring promises. Kept every single time.
          </h2>
        </header>
        <div className="trust__panel">
          <div className="trust__copy">
            <HealitWordmark tone="light" width={100} />
            <p>
              We don&apos;t ship from a far-off warehouse and call it &ldquo;hyperlocal&rdquo;.
              We work with FSSAI-licensed pharmacies in your neighborhood — the kind
              you&apos;ve walked into a hundred times. Your prescription stays private,
              your payment stays encrypted, and someone real picks up if you call.
            </p>
          </div>
          <dl className="trust__stats">
            <div>
              <dt>FSSAI</dt>
              <dd>Licensed partners only</dd>
            </div>
            <div>
              <dt>End-to-end</dt>
              <dd>Encrypted in transit</dd>
            </div>
            <div>
              <dt>Real humans</dt>
              <dd>Support, not chatbots</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
