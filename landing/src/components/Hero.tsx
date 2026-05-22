import ArrowForwardIcon from '@app-svg/arrow-forward.svg?react';

import { HeroPhones } from './HeroPhones';
import { SvgIcon } from './SvgIcon';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__mesh" aria-hidden />
      <div className="hero__grid" aria-hidden />
      <div className="hero__ambient" aria-hidden />
      <div className="hero__ambient hero__ambient--secondary" aria-hidden />

      <div className="hero__inner section-inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            We deliver care
          </p>
          <h1 id="hero-title">
            Genuine medicines.
            <br />
            <span className="hero__accent">Delivered in minutes.</span>
          </h1>
          <p className="hero__lead">
            Healit connects you to verified pharmacies for authentic medicines — fast,
            transparent, and built for everyday urgency.
          </p>
          <ul className="hero__stats">
            <li>
              <strong>Verified</strong>
              <span>Licensed stores</span>
            </li>
            <li>
              <strong>30 min</strong>
              <span>Avg. delivery</span>
            </li>
            <li>
              <strong>24/7</strong>
              <span>Always on</span>
            </li>
          </ul>
          <div className="hero__actions">
            <a className="btn btn--primary btn--premium" href="#download">
              Get the app
              <SvgIcon icon={ArrowForwardIcon} width={18} height={18} aria-hidden />
            </a>
            <a className="btn btn--ghost" href="#how">
              How it works
            </a>
          </div>
          <p className="hero__footnote">
            Free to download · No subscription · Built for India
          </p>
        </div>

        <HeroPhones />
      </div>
    </section>
  );
}
