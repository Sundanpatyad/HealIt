import { useState } from 'react';
import { Link } from 'react-router-dom';

import { PageShell } from '../components/PageShell';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import './FaqPage.css';

const FAQS = [
  {
    q: 'How fast does Healit deliver?',
    a: 'Most orders arrive in under 30 minutes. Our average delivery time across active cities is around 28 minutes — it depends on traffic, time of day, and how close the nearest licensed pharmacy is to you.',
  },
  {
    q: 'Are Healit pharmacies actually verified?',
    a: 'Yes. Every partner pharmacy is FSSAI-licensed. We physically audit each store before onboarding — paperwork, storage temperatures, drug-licence number, and live inventory. If a pharmacy can\u2019t meet the bar, we don\u2019t list them.',
  },
  {
    q: 'Can I order prescription medicines?',
    a: 'Absolutely. Upload a clear photo of your prescription in the app or scan it with your phone. A licensed pharmacist verifies it before the order is dispatched. For scheduled medicines, a fresh prescription is required each time.',
  },
  {
    q: 'What if you don\u2019t have my medicine in stock?',
    a: 'We show live stock from your nearest pharmacy. If your medicine is out of stock and a doctor-approved substitute exists, we\u2019ll surface it. Otherwise we\u2019ll route the order to the next-closest pharmacy that has it.',
  },
  {
    q: 'Which cities does Healit serve?',
    a: 'Healit is currently live in Bengaluru, Mumbai, Pune, Delhi NCR, Hyderabad, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow, Kochi, and Chandigarh. We add new cities every month.',
  },
  {
    q: 'How do I pay?',
    a: 'UPI, debit/credit cards, net banking, and major wallets are all supported. You can also choose cash on delivery in most cities. Card and UPI details never touch our servers — they\u2019re handled by RBI-authorised payment partners.',
  },
  {
    q: 'Are my prescription and health details private?',
    a: 'Yes. Prescriptions and order history are encrypted in transit and stored with strict access controls. We never sell your data. Read our Privacy Policy for the long version.',
  },
  {
    q: 'How do I reach a real human?',
    a: 'Open the order in the app and tap \u201CCall support\u201D, or email support@healit.app. Our team is staffed Monday\u2013Saturday, 9 AM\u20137 PM IST. Real humans, no chatbots in the loop.',
  },
  {
    q: 'Does Healit cost money?',
    a: 'The app is completely free. There\u2019s no subscription and no membership. You only pay the MRP of your medicines and a small, transparent delivery fee that\u2019s shown before you check out.',
  },
] as const;

export function FaqPage() {
  useDocumentMeta({
    title: 'Healit FAQ — answers about ordering, delivery, and prescriptions',
    description:
      'Common questions about Healit answered: delivery times, supported cities, prescription medicines, pharmacy verification, payments, and privacy.',
    path: '/faq',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  });

  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell
      title="Frequently asked questions"
      description="The questions our customers (and curious neighbors) actually ask us.">
      <ul className="faq-list" aria-label="Frequently asked questions">
        {FAQS.map((item, index) => {
          const isOpen = open === index;
          return (
            <li
              key={item.q}
              className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
              <button
                type="button"
                className="faq-item__trigger"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}>
                <span>{item.q}</span>
                <span className="faq-item__icon" aria-hidden>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen ? <p className="faq-item__answer">{item.a}</p> : null}
            </li>
          );
        })}
      </ul>
      <p className="faq-footer">
        Still stuck? <Link to="/contact">Talk to a real human.</Link>
      </p>
    </PageShell>
  );
}
