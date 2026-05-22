import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';

export function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
