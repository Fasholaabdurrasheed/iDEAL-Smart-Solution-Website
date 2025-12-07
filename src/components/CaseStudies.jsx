// src/components/CaseStudies.jsx
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const highlights = [
  { number: '6+', label: 'Active Schools', icon: 'School' },
  { number: '400+', label: 'Total Users', icon: 'People' },
  { number: '', label: 'Multi-tenant Cloud Architecture', icon: 'Cloud' },
  { number: '', label: 'Scalable, Secure, and Reliable Performance', icon: 'Lock' },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = parseInt(target);
          const duration = 2000;
          const increment = end / (duration / 20);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 20);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl font-bold text-blue-600">
      {count}{target.includes('+') ? '+' : ''}
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Why Schools Trust iDEAL
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              
              {item.number ? (
                <Counter target={item.number} />
              ) : (
                <div className="text-5xl font-bold text-blue-600 h-16 flex items-center justify-center">
                  {index === 2 ? '✓' : '✓'}
                </div>
              )}
              
              <p className="text-lg text-gray-600 mt-3">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;