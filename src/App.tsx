import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header scrollY={scrollY} />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
