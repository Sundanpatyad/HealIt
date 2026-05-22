import { Link } from 'react-router-dom';

import { PageShell } from '../components/PageShell';
import { SITE } from '../constants/site';

export function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="How Healit collects, uses, and protects your information when you use our app and services.">
      <article className="legal-prose">
        <p>
          This Privacy Policy describes how <strong>{SITE.name}</strong> (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) handles personal information when you use our mobile
          application, website, and related services (collectively, the &quot;Services&quot;). By
          using the Services, you agree to the practices described here.
        </p>

        <h2>1. Information we collect</h2>
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account and contact details</strong> — name, mobile number, email address, and
            delivery addresses you provide.
          </li>
          <li>
            <strong>Order information</strong> — medicines and products ordered, pharmacy selected,
            order history, and delivery preferences.
          </li>
          <li>
            <strong>Prescription-related data</strong> — prescription images or details you upload
            where required for fulfillment, subject to applicable pharmacy and regulatory
            requirements.
          </li>
          <li>
            <strong>Payment information</strong> — transaction references and payment status. Card or
            UPI details are processed by authorized payment partners; we do not store full payment
            credentials on our servers.
          </li>
          <li>
            <strong>Device and usage data</strong> — device type, operating system, app version, IP
            address, and in-app activity used to operate, secure, and improve the Services.
          </li>
          <li>
            <strong>Location data</strong> — approximate or precise location when you enable it, to
            show nearby pharmacies, estimate delivery times, and complete deliveries.
          </li>
        </ul>

        <h2>2. How we use your information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>create and manage your account;</li>
          <li>process orders and facilitate delivery from partner pharmacies;</li>
          <li>verify prescriptions and comply with applicable pharmacy laws;</li>
          <li>communicate order updates, support responses, and service notices;</li>
          <li>prevent fraud, abuse, and security incidents;</li>
          <li>analyze and improve app performance and user experience; and</li>
          <li>comply with legal obligations and respond to lawful requests.</li>
        </ul>

        <h2>3. How we share information</h2>
        <p>We do not sell your personal information. We may share data with:</p>
        <ul>
          <li>
            <strong>Licensed pharmacy partners</strong> to prepare and dispense orders you place
            through the app;
          </li>
          <li>
            <strong>Delivery and logistics providers</strong> to fulfill deliveries to your address;
          </li>
          <li>
            <strong>Payment processors</strong> to complete transactions securely;
          </li>
          <li>
            <strong>Technology and analytics providers</strong> who assist us under confidentiality
            obligations; and
          </li>
          <li>
            <strong>Authorities</strong> when required by law, regulation, or valid legal process.
          </li>
        </ul>

        <h2>4. Health and sensitive data</h2>
        <p>
          Information related to medicines, prescriptions, and health needs may be considered sensitive
          under applicable law. We apply reasonable technical and organizational safeguards and limit
          access to personnel and partners who need it to provide the Services. You should only upload
          prescription information necessary to complete your order.
        </p>

        <h2>5. Data retention</h2>
        <p>
          We retain information for as long as needed to provide the Services, meet legal and
          regulatory requirements (including pharmacy record-keeping), resolve disputes, and enforce
          our agreements. When data is no longer required, we delete or anonymize it where feasible.
        </p>

        <h2>6. Security</h2>
        <p>
          We use industry-standard measures such as encryption in transit, access controls, and
          monitoring to protect your information. No method of transmission or storage is completely
          secure; we cannot guarantee absolute security.
        </p>

        <h2>7. Your choices and rights</h2>
        <p>Depending on applicable law, you may have the right to:</p>
        <ul>
          <li>access, correct, or update personal information in your account;</li>
          <li>request deletion of certain data, subject to legal retention requirements;</li>
          <li>withdraw consent for optional processing where consent is the legal basis;</li>
          <li>opt out of non-essential marketing communications; and</li>
          <li>lodge a complaint with a relevant data protection authority.</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>

        <h2>8. Children</h2>
        <p>
          The Services are not directed to children under 18. Orders for minors should be placed by a
          parent or legal guardian. If you believe we have collected information from a child without
          appropriate consent, contact us and we will take appropriate steps.
        </p>

        <h2>9. Third-party links</h2>
        <p>
          Our website or app may link to third-party sites or services. Their privacy practices are
          governed by their own policies, not this one.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the revised version with
          an updated &quot;Last updated&quot; date. Material changes may be communicated through the
          app or by email where appropriate.
        </p>

        <h2>11. Contact us</h2>
        <p>
          For privacy-related questions, contact{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or visit our{' '}
          <Link to="/contact">Contact page</Link>.
        </p>
      </article>
    </PageShell>
  );
}
