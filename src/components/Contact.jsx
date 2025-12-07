// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md border border-blue-200"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="organization" className="block text-gray-700 mb-2">School / Organization</label>
            <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" rows="4" required />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full">
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;