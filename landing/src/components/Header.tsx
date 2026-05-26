import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { HealitWordmark } from './HealitWordmark';
import './Header.css';

const NAV_LINKS = [
  { to: '/#features', label: 'Features' },
  { to: '/#how', label: 'How it works' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
] as const;

const MOBILE_EXTRA = [
  { to: '/pharmacies', label: 'For pharmacies' },
  { to: '/contact', label: 'Contact' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (!open) return;
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => {
      if (mq.matches) close();
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const headerClass = [
    'header',
    open ? 'header--menu-open' : '',
    scrolled ? 'header--scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClass}>
      <div className="header__wrap">
        <div className="header__bar">
          <Link className="header__logo" to="/" onClick={close} aria-label="Healit home">
            <HealitWordmark width={96} tone="dark" />
          </Link>

          <p className="header__tagline" aria-hidden>
            <span className="header__tagline-dot" />
            We deliver care
          </p>

          <nav className="header__nav" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link className="btn btn--primary header__cta-desktop" to="/#download">
            Get the app
          </Link>

          <button
            type="button"
            className={`header__menu-btn ${open ? 'header__menu-btn--open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="header-mobile-menu"
            onClick={() => setOpen((v) => !v)}>
            <span className="header__menu-line" />
            <span className="header__menu-line" />
            <span className="header__menu-line" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="header__overlay" role="presentation" onClick={close} />
      ) : null}

      <nav
        id="header-mobile-menu"
        className={`header__panel ${open ? 'header__panel--open' : ''}`}
        aria-label="Mobile menu"
        aria-hidden={!open}>
        <div className="header__panel-brand">
          <HealitWordmark width={96} tone="dark" />
          <p>We deliver care</p>
        </div>
        <ul className="header__panel-links">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={close}>
                {link.label}
              </Link>
            </li>
          ))}
          {MOBILE_EXTRA.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={close}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="btn btn--primary header__panel-cta" to="/#download" onClick={close}>
          Get the app
        </Link>
      </nav>
    </header>
  );
}
