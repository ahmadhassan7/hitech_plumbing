'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

const pricingData = {
  callOutFee: 169,
  warranty: '2-year full guarantee',
  
  diagnosis: [
    { service: 'Diagnostic Assessment (per 15 min)', price: 47.50 },
    { service: 'Comprehensive Home Inspection', price: 499, description: 'Includes full evaluation of plumbing, gas, and heating systems with report' }
  ],

  kitchen: [
    { service: 'All New Drainage (Kitchen)', price: 283 },
    { service: 'Repair Leak (Kitchen)', price: 109 },
    { service: 'Full Drainage/Supply/Assembly Upgrade (Kitchen)', price: 477 },
    { service: 'Replace Faucet (Homeowner Supplied)', price: 295, note: '*' },
    { service: 'Repair/Replace Cartridge', price: 151, note: '*' },
    { service: 'Replace Faucet with Moen', price: 679 },
    { service: 'Moen Kitchen Faucet Supply & Install', price: 603 },
    { service: 'Supply & Install New Garburator - Badger 5', price: 627 },
    { service: 'Supply & Install New Garburator - Pro 1000', price: 1067 },
    { service: 'Replace Homeowner-Supplied Garburator', price: 213 },
    { service: 'Remove Garburator & Re-pipe', price: 325 },
    { service: 'Install Homeowner-Supplied Dishwasher', price: 409 },
    { service: 'Camera Inspection (Small Drain)', price: 527 }
  ],

  bathroom: [
    { service: 'Replace Bathroom Faucet (Homeowner Supplied)', price: 213 },
    { service: 'Repair/Replace Cartridge', price: 126, note: '*' },
    { service: 'Replace Faucet with Moen Nohr', price: 403 },
    { service: 'Flapper Replacement', price: 77 },
    { service: 'Minor Toilet Rebuild (Fill Valve + Flapper)', price: 241 },
    { service: 'Fill Valve Replacement', price: 139 },
    { service: 'Reset Wax Seal', price: 223 },
    { service: 'Install Homeowner-Supplied Toilet', price: 387 },
    { service: 'Supply & Install AS Cadet Toilet', price: 742 },
    { service: 'Supply & Install AS Mainstream HD Toilet', price: 721 },
    { service: 'Toilet Disposal Only', price: 79 },
    { service: 'Replace Tub/Shower Drain', price: 225 },
    { service: 'Repair/Replace Shower Cartridge', price: 203, note: '*' },
    { service: 'Install New Shower/Tub Valve (Moen/Delta)', price: 1373, note: '*' },
    { service: 'Install Moen Handheld Shower Head', price: 117 },
    { service: 'All New Drainage (Bathroom)', price: 273 },
    { service: 'Repair Drain Leak (Bathroom)', price: 109 },
    { service: 'Full Drainage & Supply Upgrade (Bathroom)', price: 485 },
    { service: 'Replace Leaking/Damaged Supply Tube', price: 109 },
    { service: 'Add-on: Additional Supply Tube', price: 72 },
    { service: 'Replace Leaking/Non-functioning Shutoff', price: 119 },
    { service: 'Add-on: Additional Shutoff Valve', price: 94 }
  ],

  hotWater: [
    { service: 'Navien NPE 240A2 Tankless Install', price: 7435, note: '*' },
    { service: 'Electric Water Heater (40 gal)', price: 2123, warranty: '6-Year Warranty' },
    { service: 'Electric Water Heater (50 gal)', price: 2423, warranty: '6-Year Warranty' },
    { service: 'Electric Water Heater (60 gal)', price: 2773, warranty: '6-Year Warranty' },
    { service: 'Gas Water Heater (40 gal)', price: 2703, warranty: '6-Year Warranty' },
    { service: 'Gas Water Heater (50 gal)', price: 3073, warranty: '6-Year Warranty' },
    { service: 'Gas Water Heater (60 gal)', price: 3473, warranty: '6-Year Warranty' },
    { service: 'Install Homeowner-Supplied Water Heater', price: 795 },
    { service: 'Navien NCB 240-130H (Unit Only)', price: 14707, note: '*' },
    { service: 'Combi Boiler + Equipment', price: 18995, note: '*' },
    { service: 'Annual Boiler (no heat exchanger)', price: 303 },
    { service: 'Annual Boiler (including heat exchanger)', price: 501 },
    { service: 'Annual Tankless Service', price: 303 }
  ],

  waterSystems: [
    { service: 'Flo by Moen Automatic Shutoff Valve (¾″)', price: 1665 },
    { service: 'Flo by Moen Automatic Shutoff Valve (1″)', price: 1865 },
    { service: 'Flo by Moen Automatic Shutoff Valve (1¼″)', price: 2627 },
    { service: 'Replace Main Shutoff (¾″)', price: 283 },
    { service: 'Replace Main Shutoff (1″)', price: 343 },
    { service: 'PRV Replacement (¾″–1″)', price: 393 },
    { service: 'PRV Replacement (larger)', price: 503 },
    { service: 'Pull Toilet & Camera Inspection', price: 851 },
    { service: 'Camera via Clean Out', price: 727 },
    { service: 'Main Line Service', price: 651 }
  ],

  gas: [
    { service: 'Repair Gas Line Leak', price: 253 },
    { service: 'Install & Test Gas Appliance', price: 447 },
    { service: 'Install Line & Appliance (Up to 30 ft)', price: 1495 },
    { service: 'Install Earthquake Shutoff Valve', price: 1499 },
    { service: 'Install Underground Gas Line (Up to 60 ft)', price: 1995 }
  ]
};

const categories = [
  { id: 'diagnosis', title: 'Diagnosis & Home Inspections', data: pricingData.diagnosis },
  { id: 'kitchen', title: 'Kitchen Services', data: pricingData.kitchen },
  { id: 'bathroom', title: 'Bathroom Services', data: pricingData.bathroom },
  { id: 'hotwater', title: 'Hot Water / Boilers', data: pricingData.hotWater },
  { id: 'watersystems', title: 'Water Systems / Main Drains', data: pricingData.waterSystems },
  { id: 'gas', title: 'Gas Services', data: pricingData.gas }
];

export default function PricingWarrantyPage() {
  const [activeSection, setActiveSection] = useState('diagnosis');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
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
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
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
              Transparent <span className="text-yellow-300">Pricing</span> & Warranty
            </h1>
            <p className="text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto mb-8">
              No hidden fees, upfront pricing, and comprehensive warranties on all our services
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">${pricingData.callOutFee}</div>
                <div className="text-sm opacity-80">Standard Call-out Fee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">2-Year</div>
                <div className="text-sm opacity-80">Full Warranty</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Emergency Service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-yellow-300 text-black font-bold text-sm rounded-full mb-4">
                  Important Information
                </div>
                <h3 className="text-2xl font-bold mb-2">Pricing & Warranty Details</h3>
                <p className="opacity-90">Everything you need to know about our transparent pricing</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call-out Fee</h4>
                      <p className="opacity-90">All listed prices exclude our standard <strong>${pricingData.callOutFee} call-out fee</strong>, which covers travel time and initial assessment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">2-Year Full Guarantee</h4>
                      <p className="opacity-90">Industry-leading warranty coverage on all standard installations and major repairs, giving you complete peace of mind.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Parts & Installation</h4>
                      <p className="opacity-90">Items marked with <strong>(*)</strong> may require additional parts. All pricing assumes standard installation conditions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Free Estimates</h4>
                      <p className="opacity-90">Get a personalized quote for your specific project. Complex installations may require custom pricing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:sticky lg:top-8"
              >
                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Navigation</h3>
                  <nav className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => scrollToSection(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                          activeSection === category.id
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                            : 'text-gray-700 hover:bg-white hover:shadow-md'
                        }`}
                      >
                        <span className="font-medium text-sm">{category.title}</span>
                      </button>
                    ))}
                  </nav>

                  {/* Contact CTA in Sidebar */}
                  <div className="mt-8 p-4 bg-gradient-to-r from-primary to-accent rounded-2xl text-white text-center">
                    <h4 className="font-bold mb-2">Need a Quote?</h4>
                    <p className="text-sm opacity-90 mb-4">Get personalized pricing for your project</p>
                    <Link
                      href="/contact"
                      className="block bg-white text-primary py-2 px-4 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors duration-300"
                    >
                      Get Free Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Pricing Content */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {categories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.id}
                    id={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-primary to-accent text-white p-6">
                      <div className="flex items-center gap-3">
                        <div className="inline-block px-3 py-1 bg-yellow-300 text-black font-bold text-sm rounded-full">
                          HiTech
                        </div>
                        <h2 className="text-2xl font-bold">{category.title}</h2>
                      </div>
                    </div>
                    
                    <div className="divide-y divide-gray-200">
                      {category.data.map((item, index) => (
                        <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-300">
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-1">
                                {item.service}
                              </h3>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">
                                CA ${item.price.toLocaleString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Information */}
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
              Our Warranty
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry-Leading 2-Year Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand behind our work with comprehensive warranty coverage on all services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "2-Year Full Coverage",
                description: "Comprehensive warranty on all installations and major repairs (standard installations)"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Labor & Parts Included",
                description: "Full coverage includes both labor costs and replacement parts for covered services"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Priority Service",
                description: "Warranty customers receive priority scheduling for any warranty-related issues"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready for a Free Quote?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get transparent pricing and professional service from HiTech Plumbing. 
              All quotes include our comprehensive 2-year warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Free Quote
              </Link>
              <Link
                href="tel:604-443-8324"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
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