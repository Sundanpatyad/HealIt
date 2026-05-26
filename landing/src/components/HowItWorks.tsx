import './HowItWorks.css';

const STEPS = [
  {
    step: '1',
    title: 'Tell us what you need',
    description:
      'Type the medicine name, search by brand, or snap a photo of your prescription. We match you with the closest pharmacy that has it in stock.',
  },
  {
    step: '2',
    title: 'A pharmacist preps it',
    description:
      'Not a warehouse. A licensed pharmacist actually opens your order, checks the strip, and packs it before it leaves the shop.',
  },
  {
    step: '3',
    title: 'Watch it arrive',
    description:
      'Follow the rider on the map, get a heads-up before they ring the bell, and pay only after the doorbell rings.',
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="how" aria-labelledby="how-title">
      <div className="section-inner how__inner">
        <header className="section-head section-head--center">
          <p className="section-label">How it works</p>
          <h2 className="section-title" id="how-title">
            From &ldquo;I need this&rdquo; to &ldquo;Got it&rdquo; — in three steps.
          </h2>
          <p className="section-desc">
            No phone calls, no asking the neighbour, no wandering between chemists.
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
