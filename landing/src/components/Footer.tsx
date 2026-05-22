import { Link } from 'react-router-dom';

import { HealitWordmark } from './HealitWordmark';
import { SITE } from '../constants/site';
import './Footer.css';

const PRODUCT_LINKS = [
  { to: '/#features', label: 'Features' },
  { to: '/#how', label: 'How it works' },
  { to: '/#trust', label: 'Trust' },
  { to: '/#download', label: 'Download' },
] as const;

const COMPANY_LINKS = [
  { to: '/contact', label: 'Contact' },
  { to: '/contact', label: 'Partner with us' },
  { to: '/contact', label: 'Support' },
] as const;

const LEGAL_LINKS = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <HealitWordmark width={104} tone="dark" />
            <p className="footer__tagline">
              Genuine medicines from verified pharmacies — delivered to your door across India.
            </p>
            <a className="footer__contact-link" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h3>Product</h3>
              <ul>
                {PRODUCT_LINKS.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h3>Company</h3>
              <ul>
                {COMPANY_LINKS.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h3>Legal</h3>
              <ul>
                {LEGAL_LINKS.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Healit. We deliver care.</p>
          <p className="footer__bottom-meta">Made in India</p>
        </div>
      </div>
    </footer>
  );
}
