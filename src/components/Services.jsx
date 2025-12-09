import { motion } from 'framer-motion';
import { Monitor, Building2, Code2, Rocket } from 'lucide-react';

const services = [
  { 
    title: "CBT Platform", 
    desc: "A Computer-Based Testing solution for secondary schools to replace pen-and-paper exams", 
    icon: Monitor,
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    title: "School Management Portal", 
    desc: "Full administrative and academic workflow automation", 
    icon: Building2,
    gradient: "from-cyan-500 to-teal-500"
  },
  { 
    title: "Custom Software Development", 
    desc: "Tailored digital solutions for businesses", 
    icon: Code2,
    gradient: "from-teal-500 to-green-500"
  },
  { 
    title: "Future Innovations", 
    desc: "HealthTech & Enterprise Solutions", 
    icon: Rocket,
    gradient: "from-green-500 to-emerald-500"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#e6f7ff]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Our Services</p>
          <h2 className="section-title">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Building innovative solutions across education, healthcare, and enterprise technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-modern text-center relative overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${s.gradient} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#00a8e8] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;