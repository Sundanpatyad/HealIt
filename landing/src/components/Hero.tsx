import ArrowForwardIcon from '@app-svg/arrow-forward.svg?react';
import { Link } from 'react-router-dom';

import { HeroPhones } from './HeroPhones';
import { SvgIcon } from './SvgIcon';
import './Hero.css';

const METRICS = [
  { value: '28 min', label: 'Average delivery' },
  { value: '200+', label: 'Partner pharmacies' },
  { value: '12 cities', label: 'And growing' },
] as const;

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden />

      <div className="hero__inner section-inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-star" aria-hidden>
              ★
            </span>
            4.8 on the App Store · 10,000+ families
          </p>

          <h1 id="hero-title">
            When medicine can&apos;t wait,{' '}
            <span className="hero__accent">we deliver.</span>
          </h1>

          <p className="hero__lead">
            Healit connects you with licensed pharmacies in your neighborhood
            — so you get the meds you actually need, typically in under 30 minutes,
            with a real human on the other end.
          </p>

          <div className="hero__actions">
            <Link className="btn btn--primary hero__cta" to="/#download">
              Get the app
              <SvgIcon icon={ArrowForwardIcon} width={18} height={18} aria-hidden />
            </Link>
            <Link className="hero__link" to="/#how">
              See how it works
            </Link>
          </div>

          <dl className="hero__metrics">
            {METRICS.map(({ value, label }) => (
              <div key={label} className="hero__metric">
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroPhones />
      </div>
    </section>
  );
}
