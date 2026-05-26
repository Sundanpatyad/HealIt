import './Testimonials.css';

const QUOTES = [
  {
    quote:
      'My mother needs three different medicines every morning. Healit remembers the brand, the dose, and ships from the same pharmacy each time. It saved me half an hour every single day.',
    name: 'Priya M.',
    role: 'Caregiver',
    city: 'Bengaluru',
    color: '#7c5bf7',
  },
  {
    quote:
      '3 AM, baby running a fever, no chemist open nearby. The rider was at our door in 22 minutes. We now tell every new parent we know.',
    name: 'Arjun K.',
    role: 'New dad',
    city: 'Pune',
    color: '#5e35b1',
  },
  {
    quote:
      'I run a small chemist shop in Andheri East. Healit sends me a steady stream of nearby customers without the heavy commissions. Honestly, the app just works.',
    name: 'Sneha R.',
    role: 'Pharmacist partner',
    city: 'Mumbai',
    color: '#4328a9',
  },
] as const;

function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section
      id="stories"
      className="testimonials"
      aria-labelledby="testimonials-title">
      <div className="section-inner testimonials__inner">
        <header className="section-head section-head--center">
          <p className="section-label">In their words</p>
          <h2 className="section-title" id="testimonials-title">
            People we built this for.
          </h2>
          <p className="section-desc">
            Three of the families, parents, and pharmacists who use Healit
            every week.
          </p>
        </header>

        <div className="testimonials__grid">
          {QUOTES.map(({ quote, name, role, city, color }) => (
            <figure key={name} className="testimonial">
              <span className="testimonial__mark" aria-hidden>
                &ldquo;
              </span>
              <blockquote>
                <p>{quote}</p>
              </blockquote>
              <figcaption className="testimonial__author">
                <span
                  className="testimonial__avatar"
                  style={{ backgroundColor: color }}
                  aria-hidden>
                  {initials(name)}
                </span>
                <span className="testimonial__meta">
                  <strong>{name}</strong>
                  <span>
                    {role} · {city}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
