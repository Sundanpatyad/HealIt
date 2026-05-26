import { Link } from 'react-router-dom';

import { PageShell } from '../components/PageShell';
import { SITE } from '../constants/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import './PharmaciesPage.css';

const BENEFITS = [
  {
    title: 'New customers, every day',
    body: 'Healit sends nearby customers straight to your shop — no cold marketing, no leaflets. You stay focused on dispensing.',
  },
  {
    title: 'Fair, transparent economics',
    body: 'Predictable commissions, weekly payouts, and an in-app dashboard that shows exactly where every rupee comes from.',
  },
  {
    title: 'Software that works for chemists',
    body: 'A simple partner app that handles orders, stock, payments, and receipts. Designed with pharmacists, not for them.',
  },
  {
    title: 'Real rider support',
    body: 'Trained Healit riders pick up your orders. No more juggling third-party services, no more lost packages.',
  },
] as const;

const STEPS = [
  {
    label: 'Apply in 5 minutes',
    body: 'Share your drug licence number, FSSAI registration, and a couple of details about your shop. We respond within 48 hours.',
  },
  {
    label: 'On-site verification',
    body: 'A Healit partner manager visits the shop, checks storage standards, and helps you set up the partner app.',
  },
  {
    label: 'Go live',
    body: 'You start receiving orders the same day. Most partners cross 100 orders in their first month.',
  },
] as const;

export function PharmaciesPage() {
  useDocumentMeta({
    title: 'Partner with Healit — grow your pharmacy with nearby customers',
    description:
      'Join Healit\u2019s network of FSSAI-licensed pharmacies. Reach more customers in your neighborhood, get fair commissions, and access tools designed for chemists.',
    path: '/pharmacies',
  });

  return (
    <PageShell
      title="Grow your pharmacy with Healit"
      description="Bring more customers from your neighborhood without changing how you run your shop.">
      <section className="pharma-section">
        <h2>Why pharmacies partner with us</h2>
        <div className="pharma-grid">
          {BENEFITS.map(({ title, body }) => (
            <article key={title} className="pharma-card">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pharma-section">
        <h2>How onboarding works</h2>
        <ol className="pharma-steps">
          {STEPS.map(({ label, body }, index) => (
            <li key={label} className="pharma-step">
              <span className="pharma-step__num" aria-hidden>
                {index + 1}
              </span>
              <div>
                <h3>{label}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="pharma-section pharma-cta">
        <h2>Ready to start?</h2>
        <p>
          Email{' '}
          <a href={`mailto:partners@healit.app`}>partners@healit.app</a> with
          your shop name and city, or fill out our{' '}
          <Link to="/contact">contact form</Link>. We&apos;ll get back within
          two working days.
        </p>
        <p className="pharma-cta__small">
          Have a question first? Read our{' '}
          <Link to="/faq">FAQ</Link> or learn more about{' '}
          <Link to="/about">{SITE.name}</Link>.
        </p>
      </section>
    </PageShell>
  );
}
