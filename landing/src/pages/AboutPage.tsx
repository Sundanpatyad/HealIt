import { Link } from 'react-router-dom';

import { PageShell } from '../components/PageShell';
import { SITE } from '../constants/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function AboutPage() {
  useDocumentMeta({
    title: 'About Healit — the story behind faster, kinder medicine delivery',
    description:
      'Why we built Healit, who we serve, and how we work with licensed neighborhood pharmacies to deliver authentic medicines across India in under 30 minutes.',
    path: '/about',
  });

  return (
    <PageShell
      title="About Healit"
      description="A short story about why we built this and who we built it for.">
      <article className="legal-prose">
        <p>
          Healit started with a 2 AM problem. One of our co-founders was trying
          to find paracetamol for a feverish toddler, calling chemist after
          chemist that was either closed, out of stock, or on the other side
          of the city. The next morning, we mapped out every step — and
          realised the problem wasn&apos;t a lack of medicines. It was a lack
          of <em>access</em>.
        </p>

        <h2>What we believe</h2>
        <p>
          Hyperlocal isn&apos;t a marketing word for us. We don&apos;t ship
          from a warehouse three cities away. We work with the FSSAI-licensed
          pharmacist down your street — the one you&apos;ve walked into a
          hundred times — and we give them better software, faster logistics,
          and a steady stream of nearby customers.
        </p>

        <h2>What this means for you</h2>
        <ul>
          <li>
            <strong>Authentic medicines, always.</strong> Every Healit partner
            is FSSAI-licensed. We audit their paperwork, storage, and stock.
          </li>
          <li>
            <strong>Real humans, never bots.</strong> A licensed pharmacist
            checks your order. A real rider brings it. Real customer support
            picks up if you call.
          </li>
          <li>
            <strong>Pricing that doesn&apos;t pinch.</strong> No
            membership, no surge pricing on essentials, no &ldquo;convenience
            fees&rdquo; that quietly creep in.
          </li>
        </ul>

        <h2>What this means for pharmacies</h2>
        <p>
          Local chemists keep neighborhoods healthy. They deserve modern
          tools and fair economics. If you run a pharmacy and want to grow
          with us, read about how we{' '}
          <Link to="/pharmacies">partner with pharmacies</Link>.
        </p>

        <h2>Where you can find us</h2>
        <p>
          {SITE.name} is currently live in 12+ Indian cities — Bengaluru,
          Mumbai, Pune, Delhi NCR, Hyderabad, Chennai, Kolkata, Ahmedabad,
          Jaipur, Lucknow, Kochi, and Chandigarh — with more being added
          every month. Don&apos;t see your city?{' '}
          <Link to="/contact">Tell us where to come next.</Link>
        </p>

        <h2>Talk to us</h2>
        <p>
          We&apos;re a small team. We read every email. Send a note to{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or visit our{' '}
          <Link to="/contact">contact page</Link>.
        </p>
      </article>
    </PageShell>
  );
}
