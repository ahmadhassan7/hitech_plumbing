'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Vancouver',
    rating: 5,
    text: 'HiTech Plumbing replaced our old water heater in just a few hours. Professional, clean, and reasonably priced. Highly recommend!'
  },
  {
    id: 2,
    name: 'Mike T.',
    location: 'North Shore',
    rating: 5,
    text: 'Excellent service! The technician explained everything clearly and the installation was flawless. Great warranty too.'
  },
  {
    id: 3,
    name: 'Jennifer L.',
    location: 'Burnaby',
    rating: 5,
    text: 'Fast, reliable, and honest pricing. Our Navien tankless water heater has been working perfectly since installation.'
  },
  {
    id: 4,
    name: 'David R.',
    location: 'Vancouver',
    rating: 5,
    text: 'HiTech Plumbing saved us when our water heater failed. Emergency service was quick and professional. Thank you!'
  }
];

export default function HotWaterSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Hot Water Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 min-w-0 w-full"
          >
            {/* Large Question Heading */}
            <div className="overflow-hidden">
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-4 break-words"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Why Choose <span className="text-primary">HiTech</span> for your
              </motion.h2>
              <motion.h3 
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-accent leading-tight break-words"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Hot Water / Water Heating?
              </motion.h3>
            </div>

            {/* Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                If you need a hot water tank replacement or repair, trust HiTech Plumbing for the job! Our experienced professionals will efficiently remove your old water heater and install your new model quickly.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We always go above and beyond to ensure efficient, high quality installations and an exceptional customer experience.
              </p>

              {/* Brands Section */}
              <div className="space-y-3">
                <p className="text-lg font-semibold text-gray-800">
                  We sell and install all of the most popular models of water heaters, including:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="text-gray-700">• Rheem</li>
                  <li className="text-gray-700">• Bradford</li>
                  <li className="text-gray-700">• John Wood</li>
                  <li className="text-gray-700">• Navien Tankless</li>
                </ul>
              </div>


              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <span>Contact Us</span>
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 min-w-0 w-full"
          >
            {/* Testimonials Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">What Our Customers Say</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
              <p className="text-gray-600">Real reviews from satisfied customers</p>
            </div>

            {/* Testimonials Cards */}
            <div className="grid gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.svg 
                          key={i} 
                          className="w-5 h-5 text-yellow-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </motion.svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                      "{testimonial.text}"
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                            </svg>
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More Reviews */}
            <div className="text-center pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                <span>View More Reviews</span>
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}