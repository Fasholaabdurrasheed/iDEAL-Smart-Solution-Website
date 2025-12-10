// src/components/About.jsx
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    'Custom Software Development',
    'Education Technology Products',
    'Enterprise Solutions',
    'Healthcare Innovation (Coming Soon)',
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-4">
            <span className="text-[#00a8e8] font-semibold text-sm">About iDEAL</span>
          </div>
          <h2 className="section-title max-w-3xl mx-auto">
            Building Digital Solutions for Businesses & Institutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              iDEAL Smart Solution is a technology company specializing in custom software development, enterprise solutions, and digital products for businesses and institutions across Nigeria and Africa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We currently have products in education technology, including our Computer-Based Testing (CBT) platform and School Management Portal. We also build custom software solutions for businesses, enterprise systems, and are expanding into healthcare technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our education products are actively used by 6+ schools with over 400+ users. Beyond education, we deliver tailored software solutions for various industries and businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-[#00a8e8] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden shadow-xl">
              <img 
                src="/placeholder-co.png" 
                alt="iDEAL CBT Platform" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;