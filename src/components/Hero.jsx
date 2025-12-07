import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Future-Ready <span className="gradient-text">Education</span><br />
            Starts with iDEAL
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mt-6 max-w-4xl mx-auto">
            Nigeria’s leading EdTech platform powering 21st-century schools with AI-driven CBT, smart portals, and seamless digital transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="btn-primary text-lg">Request Demo →</button>
          <button className="glass-card px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Watch How It Works
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-12 text-gray-600"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">6+</div>
            <div>Schools Live</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">400+</div>
            <div>Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div>Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;