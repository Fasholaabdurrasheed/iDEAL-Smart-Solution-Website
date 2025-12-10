// src/App.jsx
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import FounderProjects from './components/FounderProjects.jsx';
import Founders from './components/Founders.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <FounderProjects />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;