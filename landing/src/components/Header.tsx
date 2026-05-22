import { useEffect, useState } from 'react';

import { HealitWordmark } from './HealitWordmark';
import './Header.css';

const LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#trust', label: 'Trust' },
  { href: '#download', label: 'Download' },
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
      <div className="header__wrap section-inner">
        <div className="header__bar">
          <a className="header__logo" href="#" onClick={close} aria-label="Healit home">
            <HealitWordmark width={108} tone="dark" />
          </a>

          <p className="header__tagline" aria-hidden>
            <span className="header__tagline-dot" />
            We deliver care
          </p>

          <nav className="header__nav" aria-label="Primary">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="btn btn--primary header__cta-desktop" href="#download">
            Get the app
          </a>

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
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn--primary header__panel-cta" href="#download" onClick={close}>
          Get the app
        </a>
      </nav>
    </header>
  );
}
