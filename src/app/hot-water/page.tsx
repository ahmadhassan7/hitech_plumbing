'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

export default function HotWaterPage() {
  const services = [
    {
      title: 'Hot Water Tank Repairs',
      description: 'Expert diagnosis and repair of gas and electric hot water tanks. We fix leaks, replace heating elements, thermostats, and pressure relief valves.',
      features: ['Leak detection & repair', 'Heating element replacement', 'Thermostat calibration', 'Pressure valve service'],
      image: 'https://plus.unsplash.com/premium_photo-1661301068444-8ac48208d017?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Professional technician repairing hot water tank'
    },
    {
      title: 'Hot Water Tank Installation',
      description: 'Professional installation of new hot water tanks with proper sizing, code compliance, and energy-efficient options for your home.',
      features: ['Proper tank sizing', 'Code compliant installation', 'Energy efficiency options', 'Gas line connections'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'New hot water tank installation in residential home'
    },
    {
      title: 'Tankless Water Heaters',
      description: 'On-demand tankless water heater installation and service for unlimited hot water, space savings, and reduced energy costs.',
      features: ['Unlimited hot water', 'Space-saving design', 'Energy efficient', 'Long lifespan'],
      image: 'https://westernrooter.com/wp-content/uploads/2024/08/tankless-water-heater-install-jpg-2048x1387.webp',
      imageAlt: 'Modern tankless water heater unit mounted on wall'
    },
    {
      title: 'Radiant & In-Floor Heating',
      description: 'Complete radiant heating system installation for comfortable, energy-efficient floor heating throughout your home.',
      features: ['Hydronic systems', 'Electric floor heating', 'Zoned control', 'Energy efficient'],
      image: 'https://www.meteorelectrical.com/media/wysiwyg/radiant_floor_heaters.jpg',
      imageAlt: 'Radiant floor heating installation in modern bathroom'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We evaluate your current hot water system, assess your household needs, and identify any issues or inefficiencies.'
    },
    {
      step: '2',
      title: 'Custom Solution',
      description: 'Based on your assessment, we recommend the best hot water solution for your home, budget, and energy goals.'
    },
    {
      step: '3',
      title: 'Professional Installation',
      description: 'Our licensed technicians perform the installation with precision, ensuring code compliance and optimal performance.'
    },
    {
      step: '4',
      title: 'Testing & Warranty',
      description: 'We test the system thoroughly and provide you with our 2-year warranty plus manufacturer warranties.'
    }
  ];

  const faqs = [
    {
      question: 'How long do hot water tanks typically last?',
      answer: 'Traditional hot water tanks last 8-12 years, while tankless units can last 15-20 years with proper maintenance.'
    },
    {
      question: 'What size hot water tank do I need?',
      answer: 'Tank size depends on household size and usage. We typically recommend 40-50 gallons for 2-3 people, 50-60 gallons for 3-4 people, and 60-80 gallons for larger families.'
    },
    {
      question: 'Are tankless water heaters worth the investment?',
      answer: 'Yes, tankless heaters provide unlimited hot water, save space, last longer, and can reduce energy costs by 20-30% compared to traditional tanks.'
    },
    {
      question: 'How much does radiant floor heating cost?',
      answer: 'Installation costs vary by system type and area size. Electric systems start around $8-15 per sq ft, while hydronic systems range from $10-20 per sq ft.'
    },
    {
      question: 'Do you service all brands of water heaters?',
      answer: 'Yes, we service all major brands including Rheem, Bradford White, AO Smith, Navien, Rinnai, and more.'
    }
  ];


  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-gray-100 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6"
            >
              RESIDENTIAL ONLY SERVICES
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight break-words">
              Expert Hot Water <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto break-words">
              From emergency repairs to complete system installations, we keep your home comfortable 
              with reliable, energy-efficient hot water solutions you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Estimate
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Emergency Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 break-words">
                Comprehensive Hot Water Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you need emergency repairs, system upgrades, or complete installations, 
                our residential hot water specialists deliver reliable solutions with a 2-year warranty.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-center">
                {index % 2 === 0 ? (
                  // Text left, Image right (even index: 0, 2, 4...)
                  <>
                    <AnimatedSection animation="fadeInLeft">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                        <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <span className="text-primary text-lg mr-3">✓</span>
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 inline-block"
                          >
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInRight">
                      <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </AnimatedSection>
                  </>
                ) : (
                  // Image left, Text right (odd index: 1, 3, 5...)
                  <>
                    <AnimatedSection animation="fadeInLeft">
                      <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInRight">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                        <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <span className="text-primary text-lg mr-3">✓</span>
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 inline-block"
                          >
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </AnimatedSection>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 break-words">
                Our Professional Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final testing, we ensure every hot water project 
                is completed to the highest standards.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.2}>
                <div className="text-center relative">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Tank Water Heaters */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Traditional Tank Water Heaters</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our tank water heater services cover everything from routine maintenance to complete replacements. 
                  We work with gas and electric units, ensuring optimal performance and energy efficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Complete Diagnostics</h4>
                      <p className="text-gray-600">Advanced testing to identify all issues quickly</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Energy Efficiency Upgrades</h4>
                      <p className="text-gray-600">High-efficiency models to reduce your energy bills</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">2-Year Warranty</h4>
                      <p className="text-gray-600">Comprehensive warranty on all installations</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Tank Water Heater Sizes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">1-2 People</span>
                    <span className="text-primary font-bold">30-40 Gallons</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">2-3 People</span>
                    <span className="text-primary font-bold">40-50 Gallons</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">3-4 People</span>
                    <span className="text-primary font-bold">50-60 Gallons</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">4+ People</span>
                    <span className="text-primary font-bold">60-80 Gallons</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Tankless Water Heaters */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fadeInLeft">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">Tankless Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Unlimited Hot Water</h4>
                      <p className="text-sm text-gray-600">Never run out of hot water again</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">20-30% Energy Savings</h4>
                      <p className="text-sm text-gray-600">Significant reduction in utility bills</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Space Saving</h4>
                      <p className="text-sm text-gray-600">Wall-mounted, compact design</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">15-20 Year Lifespan</h4>
                      <p className="text-sm text-gray-600">Double the life of tank units</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Tankless Water Heaters</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Experience the convenience of endless hot water with our tankless water heater installations. 
                  Perfect for modern homes looking to save space and energy while enjoying unlimited hot water on demand.
                </p>
                <div className="bg-primary text-white p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-bold mb-2">Professional Installation Required</h4>
                  <p className="text-blue-100">
                    Tankless units require proper gas line sizing, electrical connections, and venting. 
                    Our certified technicians ensure code-compliant installation for optimal performance.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 inline-block"
                >
                  Get Tankless Quote
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Radiant Heating */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Radiant & In-Floor Heating</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Transform your home with luxurious radiant floor heating. Our systems provide even, 
                  comfortable warmth from the ground up, eliminating cold spots and reducing energy costs.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">Electric Systems</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Easy installation</li>
                      <li>• Perfect for bathrooms</li>
                      <li>• Quick heating</li>
                      <li>• Low maintenance</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">Hydronic Systems</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Whole house heating</li>
                      <li>• Most energy efficient</li>
                      <li>• Zoned control</li>
                      <li>• Long-term value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div className="bg-accent text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Popular Installation Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-white text-xl mr-3">•</span>
                    <div>
                      <h4 className="font-semibold">Bathrooms</h4>
                      <p className="text-blue-100 text-sm">Warm tiles for comfort</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-white text-xl mr-3">•</span>
                    <div>
                      <h4 className="font-semibold">Kitchens</h4>
                      <p className="text-blue-100 text-sm">Comfortable cooking space</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-white text-xl mr-3">•</span>
                    <div>
                      <h4 className="font-semibold">Bedrooms</h4>
                      <p className="text-blue-100 text-sm">Cozy morning warmth</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-white text-xl mr-3">•</span>
                    <div>
                      <h4 className="font-semibold">Entryways</h4>
                      <p className="text-blue-100 text-sm">Melt snow and ice</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 break-words">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common hot water questions
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <summary className="font-bold text-lg text-foreground cursor-pointer hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Hot Water Emergency?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                We understand how essential hot water is for your daily routine. 
                Our emergency service team is available 24/7 to restore your comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
                >
                  Call Now: (555) 123-4567
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                >
                  Get Emergency Service
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our Hot Water Services?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Residential hot water specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Energy-efficient solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Licensed gas and electric technicians</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Same-day emergency service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">2-year warranty on all installations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Free estimates and upfront pricing</span>
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready for Reliable Hot Water?</h3>
                <p className="text-gray-600 mb-6">
                  From emergency repairs to complete system upgrades, HiTech Plumbing delivers 
                  professional hot water solutions with a 2-year warranty. Contact us today for 
                  your free estimate.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 text-center"
                  >
                    Get Free Estimate
                  </Link>
                  <Link
                    href="/pricing-warranty"
                    className="block w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                  >
                    View Pricing & Warranty
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      <FloatingScrollToTop />
    </div>
  );
}