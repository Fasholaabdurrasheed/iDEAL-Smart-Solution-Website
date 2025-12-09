import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
            <span className="text-[#00a8e8] font-medium text-sm">✨ Transforming Education Technology</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
            Building Innovative & Affordable{' '}
            <span className="text-[#00a8e8]">Digital Solutions</span>
            <br />
            for Schools in Nigeria
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
            From CBT exams to school portals — we help schools save time, reduce costs, and improve learning outcomes with cutting-edge technology.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary text-lg px-10 py-4 whitespace-nowrap">
            Request a Demo
          </button>
          <button className="btn-secondary text-lg px-10 py-4">
            Learn More
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-12 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#00a8e8]">6+</div>
            <div className="text-gray-600 font-medium">Schools Live</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#00a8e8]">400+</div>
            <div className="text-gray-600 font-medium">Active Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#00a8e8]">100%</div>
            <div className="text-gray-600 font-medium">Uptime</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#00a8e8] rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-[#00a8e8] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;