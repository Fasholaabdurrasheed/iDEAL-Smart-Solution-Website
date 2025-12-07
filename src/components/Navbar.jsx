import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-card shadow-2xl py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div className="text-3xl font-black">
          <span className="gradient-text">iDEAL</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {['About', 'Services', 'Products', 'Founders', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-blue-600 transition font-medium"
            >
              {item}
            </a>
          ))}
          <button className="btn-primary">Request Demo</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;