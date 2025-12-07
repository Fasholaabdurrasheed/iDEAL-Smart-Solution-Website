import { motion } from 'framer-motion';

const services = [
  { title: "AI-Powered CBT", desc: "Zero manual grading. Instant results. Anti-cheating engine.", icon: "AI Brain" },
  { title: "Smart School Portal", desc: "Attendance, fees, results, communication — all in one dashboard.", icon: "Dashboard" },
  { title: "Custom EdTech Solutions", desc: "We build what your school needs. No bloat. Just results.", icon: "Code" },
  { title: "Coming Soon", desc: "HealthTech • FinTech • Enterprise AI", icon: "Rocket", soon: true },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Built for the <span className="gradient-text">Future of Learning</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-card p-8 text-center relative overflow-hidden ${s.soon ? 'opacity-70' : ''}`}
            >
              {s.soon && (
                <span className="absolute top-4 right-4 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;