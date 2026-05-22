import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SiteLayout } from './components/SiteLayout';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export function App() {
  return (
    <BrowserRouter>
      <div className="landing">
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
