import { HealitWordmark } from './HealitWordmark';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner section-inner">
        <div className="footer__brand">
          <HealitWordmark width={88} tone="dark" />
          <p>© {year} Healit. We deliver care.</p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="mailto:hello@healit.app">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
