import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { SITE } from '../constants/site';
import './PageShell.css';

type PageShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <main id="main" className="page-shell">
      <div className="page-shell__hero" aria-hidden />
      <div className="section-inner page-shell__inner">
        <Link className="page-shell__back" to="/">
          ← Back to home
        </Link>
        <header className="page-shell__head">
          <p className="section-label">{SITE.name}</p>
          <h1>{title}</h1>
          {description ? <p className="page-shell__desc">{description}</p> : null}
          <p className="page-shell__meta">Last updated: {SITE.lastUpdated}</p>
        </header>
        {children}
      </div>
    </main>
  );
}
