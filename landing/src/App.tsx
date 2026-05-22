import { Cta } from './components/Cta';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Trust } from './components/Trust';

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <HowItWorks />
        <Trust />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
