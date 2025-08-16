'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get Your <span className="text-yellow-300">Free Quote</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto">
              Professional plumbing services with transparent pricing and our industry-leading 2-year guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Ready to solve your plumbing problems? Contact HiTech Plumbing today for professional service with our 2-year guarantee.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <motion.div 
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-yellow-300/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Emergency Hotline</h3>
                    <Link href="tel:604-443-8324" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
                      (604)-HI-TECH
                    </Link>
                    <p className="text-gray-600 mt-1">Available 24/7 for Emergency Services</p>
                    <p className="text-sm text-yellow-600 font-medium">$169 Call-out Fee</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-yellow-300/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Email Us</h3>
                    <Link href="mailto:info@hitechplumbing.ca" className="text-xl text-primary hover:text-accent transition-colors">
                      info@hitechplumbing.ca
                    </Link>
                    <p className="text-gray-600 mt-1">We reply within 24 hours</p>
                  </div>
                </motion.div>

                {/* Service Areas */}
                <motion.div 
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-yellow-300/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Service Areas</h3>
                    <p className="text-xl text-gray-800">Vancouver, North Shore, Burnaby</p>
                    <p className="text-gray-600 mt-1">Licensed & Bonded</p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div 
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-yellow-300/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-800">Monday - Friday: 8am - 5pm</p>
                    <p className="text-gray-600">24/7 Emergency Service Available</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Book Online (24/7)</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="(604) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="plumbing">Plumbing Services</option>
                        <option value="gas">Gas Services</option>
                        <option value="heating">Heating Systems</option>
                        <option value="hot-water">Hot Water Systems</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-semibold text-gray-900 mb-2">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select urgency</option>
                        <option value="emergency">Emergency (ASAP)</option>
                        <option value="urgent">Urgent (Same Day)</option>
                        <option value="normal">Normal (1-2 Days)</option>
                        <option value="scheduled">Scheduled Service</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Describe Your Issue
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your plumbing issue in detail..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-8 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Get Free Quote</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></div>
                  </motion.button>
                  
                  <p className="text-center text-sm text-gray-600">
                    By submitting this form, you agree to our 2-year guarantee terms and transparent pricing policy.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 px-6" style={{ backgroundColor: '#FDF8F7' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Emergency Plumbing Service Available
            </h3>
            <p className="text-gray-700 mb-6">
              Burst pipe? Water leak? Gas emergency? Don't wait - call us now for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:604-443-8324"
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Emergency Call (604)-HI-TECH
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      <FloatingScrollToTop />
    </div>
  );
}