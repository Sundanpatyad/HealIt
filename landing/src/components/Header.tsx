import { useState } from 'react';

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

  return (
    <header className="header">
      <div className="header__inner section-inner">
        <a className="header__logo" href="#" onClick={() => setOpen(false)}>
          <HealitWordmark width={108} tone="dark" />
        </a>

        <nav className="header__nav" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary header__cta" href="#download">
          Get the app
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <div
          className="header__drawer"
          role="dialog"
          aria-label="Menu"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <nav className="header__drawer-panel">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="btn btn--primary" href="#download" onClick={() => setOpen(false)}>
              Get the app
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
