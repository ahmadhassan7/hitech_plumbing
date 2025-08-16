'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

export default function PlumbingPage() {
  const services = [
    {
      title: 'Pipe Installation & Repairs',
      description: 'Complete pipe installation, maintenance, and repair services for all types of plumbing systems. We handle everything from minor leaks to full pipe replacement.',
      features: ['New pipe installation', 'Pipe maintenance', 'Leak repairs', 'Full system replacement'],
      image: 'https://images.unsplash.com/photo-1657558665549-bd7d82afed8c?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Professional pipe installation and repair work'
    },
    {
      title: 'Bathroom Fixture Services',
      description: 'Professional bathroom fixture installation, maintenance, and repairs including toilets, sinks, faucets, showers, and bathtubs for complete bathroom solutions.',
      features: ['Toilet installation & repair', 'Sink & faucet service', 'Shower & tub work', 'Complete bathroom remodels'],
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Modern bathroom fixture installation'
    },
    {
      title: 'Appliance Installation & Repairs',
      description: 'Expert appliance installation and repair services including dishwashers, garbage disposals, laundry connections, and more for seamless home operation.',
      features: ['Dishwasher installation', 'Garbage disposal service', 'Laundry connections', 'Water line hookups'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Kitchen appliance installation service'
    },
    {
      title: 'Hot Water Tank Services',
      description: 'Complete hot water tank installation and repair services for reliable hot water supply. We service all types and brands of water heating systems.',
      features: ['Tank installation', 'Repair services', 'Maintenance programs', 'Emergency service'],
      image: 'https://images.unsplash.com/photo-1714233039800-3cfa2542e330?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Hot water tank installation and repair'
    },
    {
      title: 'Professional Drain Cleaning',
      description: 'Advanced drain cleaning services using professional equipment to clear blockages, prevent future issues, and maintain optimal drainage flow.',
      features: ['Drain snake service', 'Hydro jetting', 'Video inspection', 'Preventive maintenance'],
      image: 'https://images.unsplash.com/photo-1610143721264-b38d5dff10fd?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Professional drain cleaning service'
    },
    {
      title: 'Tankless Water Heater Services',
      description: 'Complete tankless water heater installation, maintenance, repairs, and yearly servicing for unlimited hot water and energy efficiency.',
      features: ['New installations', 'Annual maintenance', 'Repair services', 'Efficiency optimization'],
      image: 'https://images.unsplash.com/photo-1571712704100-5cade806bf6d?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Tankless water heater installation'
    },
    {
      title: 'Radiant Heat Systems',
      description: 'Radiant heat installation, maintenance, and repair services for comfortable, energy-efficient heating throughout your property.',
      features: ['System installation', 'Maintenance service', 'Repair work', 'Efficiency upgrades'],
      image: 'https://thumbs.dreamstime.com/b/system-underfloor-heating-installation-heat-flooring-system-system-underfloor-heating-installation-heat-flooring-392918182.jpg',
      imageAlt: 'Radiant floor heating installation'
    },
    {
      title: 'Boiler & Combi Boiler Services',
      description: 'Professional boiler and combi boiler installation, maintenance, repairs, and servicing for reliable heating and hot water systems.',
      features: ['Boiler installation', 'Combi boiler service', 'Maintenance programs', 'Emergency repairs'],
      image: 'https://plus.unsplash.com/premium_photo-1661301068444-8ac48208d017?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Boiler installation and maintenance service'
    },
    {
      title: 'Emergency Plumbing Services',
      description: '24/7 emergency plumbing services for urgent repairs, burst pipes, flooding, and other plumbing emergencies that require immediate attention.',
      features: ['24/7 availability', 'Rapid response', 'Emergency repairs', 'Flood prevention'],
      image: 'https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Emergency plumbing repair service'
    },
    {
      title: 'Backflow & Sump Pump Services',
      description: 'Backflow prevention systems and sump pump installations and servicing to protect your property from water damage and contamination.',
      features: ['Backflow prevention', 'Sump pump installation', 'Testing & certification', 'Maintenance service'],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Sump pump and backflow prevention installation'
    },
    {
      title: 'Gas Line & Appliance Services',
      description: 'Gas line installation, diagnostics, repiping, and gas stove and BBQ installation for safe, reliable gas connections throughout your property.',
      features: ['Gas line installation', 'System diagnostics', 'Gas stove installation', 'BBQ connections'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Gas line installation and appliance connection'
    },
    {
      title: 'Water Main & Specialized Services',
      description: 'Water main replacement, back-ups and scoping, renovation plumbing, and comprehensive plumbing diagnostics for complex plumbing needs.',
      features: ['Water main replacement', 'Sewer scoping', 'Renovation plumbing', 'System diagnostics'],
      image: 'https://plus.unsplash.com/premium_photo-1661962300824-de93975c5392?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Water main replacement and diagnostic services'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of your plumbing system and identification of issues or improvement opportunities.'
    },
    {
      step: '2',
      title: 'Professional Diagnosis',
      description: 'Detailed diagnosis using advanced tools and techniques to determine the best solution for your needs.'
    },
    {
      step: '3',
      title: 'Expert Installation/Repair',
      description: 'Professional installation or repair work performed by licensed plumbers using quality materials.'
    },
    {
      step: '4',
      title: 'Testing & Warranty',
      description: 'Complete system testing, cleanup, and warranty coverage for your peace of mind.'
    }
  ];

  const faqs = [
    {
      question: 'Do you provide emergency plumbing services?',
      answer: 'Yes, we offer 24/7 emergency plumbing services for urgent issues like burst pipes, major leaks, flooding, and other plumbing emergencies that need immediate attention.'
    },
    {
      question: 'What types of plumbing systems do you work with?',
      answer: 'We work with all types of plumbing systems including residential and commercial properties, old and new construction, and all major brands of fixtures and appliances.'
    },
    {
      question: 'How often should I have my plumbing system inspected?',
      answer: 'We recommend annual plumbing inspections to catch potential issues early. Older systems or high-use commercial properties may need more frequent inspections.'
    },
    {
      question: 'Do you handle renovation plumbing projects?',
      answer: 'Absolutely. We specialize in renovation plumbing including bathroom and kitchen remodels, adding new fixtures, rerouting pipes, and updating plumbing systems to code.'
    },
    {
      question: 'What is included in your drain cleaning service?',
      answer: 'Our drain cleaning includes snaking, hydro jetting, video inspection to identify issues, and preventive maintenance recommendations to keep your drains flowing freely.'
    },
    {
      question: 'Do you provide warranties on your plumbing work?',
      answer: 'Yes, we provide comprehensive warranties on all our plumbing installations and repairs, giving you confidence in our workmanship and materials.'
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight break-words">
              Complete <span className="text-primary">Plumbing</span> Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto break-words">
              Comprehensive plumbing solutions for residential and commercial properties. From emergency 
              repairs to complete system installations - we handle all your plumbing needs with expertise.
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
                Complete Plumbing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From simple repairs to complex installations, our licensed plumbers deliver reliable 
                plumbing services for both residential and commercial properties.
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
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 break-words">
                Our Professional Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial assessment to final testing, we ensure every plumbing project 
                is completed to the highest standards with quality materials and workmanship.
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

      {/* FAQ Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 break-words">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common plumbing questions
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 break-words">
                Plumbing Emergency?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Burst pipes, major leaks, or flooding? Our emergency plumbing technicians 
                are available 24/7 to prevent damage and restore your plumbing quickly.
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 break-words">
                Why Choose Our Plumbing Services?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Licensed and experienced plumbers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Residential and commercial service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">24/7 emergency availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Modern equipment and techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Upfront pricing with no surprises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">100% satisfaction guarantee</span>
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready for Expert Plumbing Service?</h3>
                <p className="text-gray-600 mb-6">
                  From emergency repairs to complete plumbing installations, HiTech Plumbing delivers 
                  professional solutions for all your residential and commercial plumbing needs. 
                  Contact us today for your free estimate.
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