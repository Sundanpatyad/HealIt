import {
  PrescriptionIcon,
  ScooterIcon,
  ShieldCheckIcon,
} from './icons/FeatureIcons';
import './Features.css';

const FEATURES = [
  {
    Icon: ScooterIcon,
    index: '01',
    title: 'On the road in minutes',
    description:
      'Whether it\u2019s a 3 AM fever or a refill you forgot, a nearby pharmacy picks up the order and a rider is on the way — usually before the kettle boils.',
  },
  {
    Icon: ShieldCheckIcon,
    index: '02',
    title: 'Pharmacies you can name',
    description:
      'Every partner is FSSAI-licensed. We verify paperwork, storage, and stock — so \u201Cauthentic\u201D isn\u2019t a marketing word, it\u2019s a checklist we follow.',
  },
  {
    Icon: PrescriptionIcon,
    index: '03',
    title: 'Search, or just upload',
    description:
      'Type the medicine, scan a prescription, or upload an old strip. Live pricing, in-stock status, and substitutes when the doctor allows them.',
  },
] as const;

export function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <div className="section-inner features__inner">
        <header className="section-head section-head--center">
          <p className="section-label">Why Healit</p>
          <h2 className="section-title" id="features-title">
            The unglamorous stuff, done properly.
          </h2>
          <p className="section-desc">
            Real medicines, real pharmacies, real people on the line —
            because care isn&apos;t a marketing slogan.
          </p>
        </header>
        <div className="features__grid">
          {FEATURES.map(({ Icon, index, title, description }) => (
            <article key={title} className="feature-card">
              <span className="feature-card__index" aria-hidden>
                {index}
              </span>
              <span className="feature-card__icon" aria-hidden>
                <Icon width={24} height={24} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
