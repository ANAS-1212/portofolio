import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects.jsx';
import Stats from './components/Stats.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { Icon } from './components/Icons.jsx';
import useReveal from './hooks/useReveal.js';

export default function App() {
  const [showTop, setShowTop] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a href="#about" className="skip-link">Lewati ke konten</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Stats />
      </main>
      <Footer />
      <button
        type="button"
        className={`to-top ${showTop ? 'is-visible' : ''}`}
        aria-label="Kembali ke atas"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="up" size={20} />
      </button>
    </>
  );
}
