// src/components/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          🏫 About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose"
          >
            <p className="text-lg">
              iDEAL Smart Solution is a technology company focused on building innovative and affordable digital solutions for the education sector in Nigeria.
            </p>
            <p className="text-lg">
              We started by developing a Computer-Based Testing (CBT) platform that helps schools reduce exam costs, save teachers’ time, and eliminate the stress of manual grading.
            </p>
            <p className="text-lg">
              Today, our solution is actively used by 6 schools with over 400+ users (students and staff combined).
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-200 h-64 flex items-center justify-center"
          >
            <img src="/placeholder-co.png" alt="Placeholder" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;