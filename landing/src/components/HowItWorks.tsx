import './HowItWorks.css';

const STEPS = [
  {
    step: '1',
    title: 'Search & order',
    description: 'Find medicines, add to cart, and confirm delivery to your door.',
  },
  {
    step: '2',
    title: 'Verified fulfillment',
    description: 'A licensed nearby pharmacy prepares your order with care.',
  },
  {
    step: '3',
    title: 'Track & receive',
    description: 'Follow live updates until your package arrives — fast and secure.',
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="how" aria-labelledby="how-title">
      <div className="section-inner how__inner">
        <header className="section-head section-head--center">
          <p className="section-label">How it works</p>
          <h2 className="section-title" id="how-title">
            Three steps to relief
          </h2>
          <p className="section-desc">
            Simple, transparent, and designed for urgent everyday care.
          </p>
        </header>
        <ol className="how__list">
          {STEPS.map(({ step, title, description }) => (
            <li key={step} className="how__item">
              <span className="how__num" aria-hidden>
                {step}
              </span>
              <div className="how__content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
