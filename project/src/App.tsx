import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
