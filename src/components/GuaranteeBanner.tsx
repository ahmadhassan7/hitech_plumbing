'use client';

import { motion } from 'framer-motion';

export default function GuaranteeBanner() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div 
            className="text-white space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Industry Leading Guarantee
            </h2>
            
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl leading-relaxed">
                While our largest competitor offers <span className="line-through opacity-70">30 days</span>, 
                HiTech Plumbing offers you an exclusive{' '}
                <span className="font-black text-yellow-300 text-3xl">2 YEAR GUARANTEE</span>{' '}
                on work performed and material supplied*.
              </p>
              
              <p className="text-lg opacity-95">
                The <span className="font-bold underline">2 Year HiTech Plumbing Promise and Guarantee.</span>{' '}
                We truly stand behind our work and aim to create long term relationships with our customers.
              </p>
            </div>

            <p className="text-sm opacity-80 italic">*Terms and conditions apply</p>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div 
            className="grid grid-cols-1 gap-8 h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { 
                title: '2 Year Full Guarantee',
                subtitle: 'Complete Protection',
                description: 'Full coverage on all work and materials for 24 months',
                icon: (
                  <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: 'Transparent Pricing',
                subtitle: 'No Hidden Fees',
                description: 'Upfront honest quotes with detailed breakdowns',
                icon: (
                  <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                )
              },
              { 
                title: 'Licensed & Bonded',
                subtitle: 'Fully Certified',
                description: 'Insured professionals with proper certifications',
                icon: (
                  <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4 mb-3">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-yellow-300 font-semibold text-sm">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed flex-grow">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}