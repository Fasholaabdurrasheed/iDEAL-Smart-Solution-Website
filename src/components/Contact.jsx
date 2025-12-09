// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Building2, User, MessageSquare, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      alert('Message sent! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', organization: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'idealsolutionsupt@gmail.com', href: 'mailto:idealsolutionsupt@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+234 814 296 5634', href: 'tel:+2348142965634' },
    { icon: MapPin, label: 'Location', value: 'Ibadan, Nigeria', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#e6f7ff] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Ready to transform your institution? Let's discuss how we can help
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're a school administrator looking to modernize your operations or 
                need a custom software solution, we're here to help bring your vision to life.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#e6f7ff] hover:bg-[#00a8e8] hover:text-white transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#00a8e8] group-hover:text-[#00a8e8]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-white/80">{info.label}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card-modern">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#00a8e8]" />
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00a8e8] focus:border-transparent transition-all" 
                    placeholder="Your full name"
                    required 
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00a8e8]" />
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00a8e8] focus:border-transparent transition-all" 
                    placeholder="your.email@example.com"
                    required 
                  />
                </div>

                {/* Organization Field */}
                <div>
                  <label htmlFor="organization" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#00a8e8]" />
                    School / Organization
                  </label>
                  <input 
                    type="text" 
                    id="organization" 
                    name="organization" 
                    value={formData.organization} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00a8e8] focus:border-transparent transition-all" 
                    placeholder="Your institution name"
                    required 
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#00a8e8]" />
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00a8e8] focus:border-transparent transition-all resize-none" 
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                    required 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;