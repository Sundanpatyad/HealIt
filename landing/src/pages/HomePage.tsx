import { Cta } from '../components/Cta';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Trust } from '../components/Trust';

export function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Features />
      <HowItWorks />
      <Trust />
      <Cta />
    </main>
  );
}
