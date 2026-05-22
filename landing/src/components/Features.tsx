import CheckIcon from '@app-svg/check.svg?react';
import MagnifyingGlassIcon from '@app-svg/magnifying-glass.svg?react';
import ArrowForwardIcon from '@app-svg/arrow-forward.svg?react';

import { SvgIcon } from './SvgIcon';
import './Features.css';

const FEATURES = [
  {
    Icon: ArrowForwardIcon,
    index: '01',
    title: 'Fast delivery',
    description:
      'Medicines from nearby stores reach you in minutes, not hours — when every moment counts.',
  },
  {
    Icon: CheckIcon,
    index: '02',
    title: 'Verified pharmacies',
    description:
      'Every partner store is vetted so you receive authentic products from sources you can trust.',
  },
  {
    Icon: MagnifyingGlassIcon,
    index: '03',
    title: 'Full catalog',
    description:
      'Search prescriptions and OTC essentials with clear pricing and availability in real time.',
  },
] as const;

export function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <div className="section-inner features__inner">
        <header className="section-head section-head--center">
          <p className="section-label">Why Healit</p>
          <h2 className="section-title" id="features-title">
            Care that moves at your pace
          </h2>
          <p className="section-desc">
            Everything you need from trusted local pharmacies — without the wait or the worry.
          </p>
        </header>
        <div className="features__grid">
          {FEATURES.map(({ Icon, index, title, description }) => (
            <article key={title} className="feature-card">
              <span className="feature-card__index" aria-hidden>
                {index}
              </span>
              <span className="feature-card__icon" aria-hidden>
                <SvgIcon icon={Icon} width={22} height={22} />
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
