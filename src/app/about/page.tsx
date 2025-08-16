'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 3.5 + Math.random() * 1.5,
                repeat: Infinity,
                delay: i * 0.2,
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
              About <span className="text-yellow-300">HiTech</span> Plumbing
            </h1>
            <p className="text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto">
              Vancouver's trusted plumbing professionals with over 10 years of excellence in service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-yellow-300 text-black font-bold text-sm rounded-full mb-4">
                  Our Story
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Building Trust Through Quality Service
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in Vancouver, HiTech Plumbing began with a simple mission: to provide honest, 
                reliable plumbing services that homeowners and businesses could trust. What started as 
                a small local business has grown into one of Vancouver's most respected plumbing companies.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of licensed professionals brings decades of combined experience to every job, 
                from simple repairs to complex installations. We believe in doing things right the first time, 
                which is why we back all our work with an industry-leading 2-year guarantee.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop" 
                  alt="Professional plumber at work"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Excellence</h3>
                  <p className="text-gray-600">
                    Every member of our team is fully licensed, insured, and committed to delivering 
                    the highest standard of workmanship.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 bg-yellow-300 text-black font-bold text-sm rounded-full mb-4">
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from how we interact with customers to the quality of our work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description: "Honest pricing with no hidden fees. We provide transparent quotes and stick to our word."
              },
              {
                title: "Quality",
                description: "We use only the best materials and follow industry best practices on every job."
              },
              {
                title: "Reliability",
                description: "When we say we'll be there, we will be. On time, every time, with professional service."
              },
              {
                title: "Innovation",
                description: "We stay current with the latest plumbing technologies and methods to serve you better."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-yellow-300 text-black font-bold text-sm rounded-full">
                    HiTech
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 bg-yellow-300 text-black font-bold text-sm rounded-full mb-4">
              Service Areas
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Proudly Serving Greater Vancouver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive plumbing services throughout Vancouver and surrounding communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                area: "Vancouver",
                description: "Complete plumbing services for all Vancouver neighborhoods"
              },
              {
                area: "North Shore",
                description: "Serving North Vancouver, West Vancouver, and surrounding areas"
              },
              {
                area: "Burnaby",
                description: "Full-service plumbing for residential and commercial properties"
              }
            ].map((location, index) => (
              <motion.div
                key={location.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="mb-4">
                  <svg className="w-12 h-12 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{location.area}</h3>
                <p className="text-gray-600">{location.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Services Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 lg:p-12 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Complete Plumbing Solutions</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              From emergency repairs to complete system installations, we handle every aspect of 
              residential and commercial plumbing with expertise and care.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                "Emergency Repairs",
                "Gas Line Services", 
                "Water Heater Installation"
              ].map((service) => (
                <div key={service} className="bg-white/10 rounded-xl p-4">
                  <div className="font-semibold">{service}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience the HiTech Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust HiTech Plumbing for all their plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
              >
                Get Free Quote
              </Link>
              <Link
                href="tel:604-443-8324"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Call (604)-HI-TECH
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