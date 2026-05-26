import { Cta } from '../components/Cta';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { Trust } from '../components/Trust';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function HomePage() {
  useDocumentMeta({
    title:
      'Healit — Medicines delivered in 30 minutes from licensed pharmacies near you',
    description:
      'Order authentic medicines online from FSSAI-licensed pharmacies in your neighborhood. Live tracking, real humans on call, doorstep delivery in under 30 minutes across India.',
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How fast does Healit deliver medicines?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Healit orders are delivered in under 30 minutes. Our average delivery time across cities is around 28 minutes, depending on traffic and your distance from the nearest licensed pharmacy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the pharmacies on Healit verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every Healit partner pharmacy is FSSAI-licensed. We verify their paperwork, storage standards, and stock so you only receive authentic medicines.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I order prescription medicines on Healit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can upload a photo of a valid prescription in the Healit app. A licensed pharmacist verifies it before your order is dispatched.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Healit available in my city?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Healit is currently live in 12+ Indian cities including Bengaluru, Mumbai, Pune, Delhi, Hyderabad, and Chennai — and we are expanding every month.',
          },
        },
      ],
    },
  });

  return (
    <main id="main">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Trust />
      <Cta />
    </main>
  );
}
