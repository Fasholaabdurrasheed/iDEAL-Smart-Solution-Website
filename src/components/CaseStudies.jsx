// src/components/CaseStudies.jsx
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { School, Users, Cloud, ShieldCheck } from 'lucide-react';

const highlights = [
  { number: '6+', label: 'Active Schools', icon: School, color: 'from-blue-500 to-cyan-500' },
  { number: '400+', label: 'Total Users', icon: Users, color: 'from-cyan-500 to-teal-500' },
  { number: '', label: 'Multi-tenant Cloud Architecture', icon: Cloud, color: 'from-teal-500 to-green-500' },
  { number: '', label: 'Scalable, Secure, and Reliable Performance', icon: ShieldCheck, color: 'from-green-500 to-emerald-500' },
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
    <div ref={ref} className="text-5xl font-bold bg-gradient-to-r from-[#00a8e8] to-[#00c567] bg-clip-text text-transparent">
      {count}{target.includes('+') ? '+' : ''}
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Our Impact</p>
          <h2 className="section-title">Why Schools Trust iDEAL</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Proven results and trusted by institutions across Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="card-modern text-center group"
              >
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                  </div>
                </div>
                
                {item.number ? (
                  <Counter target={item.number} />
                ) : (
                  <div className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent h-16 flex items-center justify-center`}>
                    <ShieldCheck className="w-12 h-12" strokeWidth={2.5} />
                  </div>
                )}
                
                <p className="text-lg text-gray-600 mt-4 leading-relaxed">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              "iDEAL Smart Solution has revolutionized how we manage assessments and administrative tasks. 
              The platform is <span className="text-[#00a8e8] font-semibold">reliable, secure, and easy to use</span> for both staff and students."
            </p>
            <p className="text-gray-600 mt-4 font-medium">— School Administrator, Lagos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;