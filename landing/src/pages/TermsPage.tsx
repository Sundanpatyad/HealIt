import { Link } from 'react-router-dom';

import { PageShell } from '../components/PageShell';
import { SITE } from '../constants/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function TermsPage() {
  useDocumentMeta({
    title: 'Terms & Conditions',
    description:
      'The terms that govern your access to and use of the Healit app, website, and medicine delivery services.',
    path: '/terms',
  });

  return (
    <PageShell
      title="Terms & Conditions"
      description="Please read these terms carefully before using Healit. They govern your access to our app and services.">
      <article className="legal-prose">
        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the {SITE.name} mobile
          application, website, and related services (the &quot;Services&quot;) operated by{' '}
          <strong>{SITE.name}</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
          accessing or using the Services, you agree to these Terms.
        </p>

        <h2>1. About Healit</h2>
        <p>
          {SITE.name} is a technology platform that connects you with independent, licensed pharmacies
          and delivery partners. We facilitate ordering and delivery; pharmacies are responsible for
          dispensing medicines in accordance with applicable laws. {SITE.name} is not a pharmacy and
          does not provide medical advice.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old and capable of entering a binding contract to use the
          Services. If you order on behalf of another person, you represent that you have authority to
          do so and that the information you provide is accurate.
        </p>

        <h2>3. Account registration</h2>
        <p>
          You agree to provide accurate, current information and to keep your account credentials
          secure. You are responsible for activity under your account. Notify us promptly of any
          unauthorized use at{' '}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </p>

        <h2>4. Orders, prescriptions, and pharmacy fulfillment</h2>
        <ul>
          <li>
            Orders for prescription medicines may require a valid prescription uploaded or verified as
            permitted by law and by the fulfilling pharmacy.
          </li>
          <li>
            Product availability, pricing, and substitutes (where allowed) are determined by the
            partner pharmacy.
          </li>
          <li>
            We may refuse or cancel orders that appear fraudulent, incomplete, or non-compliant with
            law or pharmacy policy.
          </li>
          <li>
            Delivery times are estimates and may vary based on location, demand, and external factors.
          </li>
        </ul>

        <h2>5. Fees and payments</h2>
        <p>
          Prices, delivery fees, taxes, and promotions are displayed before checkout. Payment is
          processed through authorized payment providers. You authorize charges for confirmed orders.
          Refunds, where applicable, follow our refund policy and partner pharmacy rules.
        </p>

        <h2>6. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>use the Services for unlawful purposes or to obtain controlled substances improperly;</li>
          <li>submit false prescriptions, identities, or delivery information;</li>
          <li>interfere with the security or operation of the Services; or</li>
          <li>copy, scrape, or reverse engineer the app except as permitted by law.</li>
        </ul>

        <h2>7. Not medical advice</h2>
        <p>
          Content in the Services is for informational purposes only. It does not replace professional
          medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider
          regarding medicines and health conditions. In an emergency, contact local emergency services
          immediately.
        </p>

        <h2>8. Intellectual property</h2>
        <p>
          The {SITE.name} name, logo, app design, and related materials are owned by us or our
          licensors. You receive a limited, non-exclusive license to use the Services for personal,
          non-commercial purposes in accordance with these Terms.
        </p>

        <h2>9. Disclaimers</h2>
        <p>
          THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; TO THE MAXIMUM
          EXTENT PERMITTED BY LAW. WE DISCLAIM WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE UNINTERRUPTED OR ERROR-FREE OPERATION.
        </p>

        <h2>10. Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE AND OUR AFFILIATES, OFFICERS,
          EMPLOYEES, AND PARTNERS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM
          YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICES SHALL
          NOT EXCEED THE AMOUNT YOU PAID TO US FOR THE RELEVANT ORDER IN THE THREE (3) MONTHS BEFORE
          THE CLAIM, OR INR 5,000, WHICHEVER IS GREATER, UNLESS A HIGHER LIMIT IS REQUIRED BY LAW.
        </p>

        <h2>11. Indemnity</h2>
        <p>
          You agree to indemnify and hold us harmless from claims arising out of your misuse of the
          Services, violation of these Terms, or infringement of third-party rights, except where caused
          by our gross negligence or willful misconduct.
        </p>

        <h2>12. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of {SITE.jurisdiction}, without regard to conflict-of-law
          principles. Courts in {SITE.jurisdiction} shall have exclusive jurisdiction over disputes,
          subject to any mandatory consumer protections in your place of residence.
        </p>

        <h2>13. Changes</h2>
        <p>
          We may modify these Terms at any time. Updated Terms will be posted with a revised date.
          Continued use after changes constitutes acceptance. If you do not agree, discontinue use of
          the Services.
        </p>

        <h2>14. Contact</h2>
        <p>
          Questions about these Terms:{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> ·{' '}
          <Link to="/contact">Contact page</Link>
        </p>
      </article>
    </PageShell>
  );
}
