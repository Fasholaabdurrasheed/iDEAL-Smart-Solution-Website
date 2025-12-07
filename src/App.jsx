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
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <FounderProjects />
        <Founders />
        <Contact />
      </main>
      <Footer />
      {/* Floating Request Demo button on mobile */}
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors md:hidden z-50"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Request Demo
        </motion.button>
      </AnimatePresence>
    </div>
  );
}

export default App;