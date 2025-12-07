// src/components/FounderProjects.jsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'APPreciate',
    description: 'Real estate fractional investment platform enabling shared ownership of property assets.',
    icon: '🏠',
  },
  {
    title: 'Commerza',
    description: 'AI-powered Market-as-a-Service platform simplifying local commerce in Nigeria by connecting buyers and sellers — including location-based distance calculation.',
    icon: '🛒',
  },
  {
    title: 'TBP (The Borderless Project)',
    description: 'A global connectivity platform for strategists working within the US$10 Trillion+ Neo-Polar Neutrality Global System — supporting global trade corridors and digital/physical protocol interoperability.',
    icon: '🌍',
  },
];

const FounderProjects = () => {
  return (
    <section id="products" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Products Built by Our Technical Founder
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600"
            >
              <div className="text-4xl mb-4 text-red-500">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderProjects;