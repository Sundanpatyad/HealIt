import ArrowForwardIcon from '@app-svg/arrow-forward.svg?react';
import { Link } from 'react-router-dom';

import { HeroPhones } from './HeroPhones';
import { SvgIcon } from './SvgIcon';
import './Hero.css';

const METRICS = [
  { value: '30 min', label: 'Avg. delivery' },
  { value: 'Verified', label: 'Licensed stores' },
  { value: '24/7', label: 'Always available' },
] as const;

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden />

      <div className="hero__inner section-inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden />
            We deliver care
          </p>

          <h1 id="hero-title">
            Genuine medicines,{' '}
            <span className="hero__accent">delivered in minutes.</span>
          </h1>

          <p className="hero__lead">
            Order from verified pharmacies near you — authentic medicines, live
            tracking, and fast doorstep delivery across India.
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
