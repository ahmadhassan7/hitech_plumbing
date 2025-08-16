'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

export default function GasPage() {
  const services = [
    {
      title: 'Gas Line Installation',
      description: 'Professional gas line installation for residential and commercial properties. We ensure safe, code-compliant installations for all your gas appliances and systems.',
      features: ['New construction gas lines', 'Code compliant installation', 'Pressure testing', 'Safety inspections'],
      image: 'https://images.unsplash.com/photo-1622801179563-94f5aa9a1c6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Professional gas line installation work'
    },
    {
      title: 'Gas Fitting Vancouver',
      description: 'Expert gas fitting services throughout Vancouver. Our certified technicians handle all types of gas connections and fittings with precision and safety.',
      features: ['Certified gas fitters', 'Vancouver area coverage', 'All appliance types', 'Safety certified'],
      image: 'https://images.unsplash.com/photo-1609211373254-b52e03ba0c85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Gas fitting work in Vancouver home'
    },
    {
      title: 'Gas Leak Repairs',
      description: 'Emergency gas leak detection and repair services. Our technicians respond quickly to gas leaks, ensuring your safety with immediate professional repairs.',
      features: ['Emergency response', 'Advanced leak detection', 'Immediate repairs', 'Safety verification'],
      image: 'https://images.unsplash.com/photo-1599474251339-ccdc8bac69be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Technician performing gas leak detection and repair'
    },
    {
      title: 'Gas Fixture Installation',
      description: 'Complete gas fixture installation including stoves, dryers, fireplaces, and outdoor appliances. Professional installation ensures optimal performance and safety.',
      features: ['All gas appliances', 'Professional installation', 'Performance testing', 'Warranty included'],
      image: 'https://images.unsplash.com/photo-1601914697928-0b536e76d048?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Gas stove installation in modern kitchen'
    },
    {
      title: 'Gas Fire Pit Installation',
      description: 'Transform your outdoor space with professional gas fire pit installation. We handle gas line routing, connections, and safety systems for your outdoor entertainment.',
      features: ['Outdoor gas lines', 'Fire pit connections', 'Safety systems', 'Custom installations'],
      image: 'https://plus.unsplash.com/premium_photo-1725408054928-5bb5d4eda7de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Professional gas fire pit installation outdoors'
    },
    {
      title: 'Gas Fireplace Installation',
      description: 'Running gas lines to new fireplaces with professional installation. We ensure proper gas supply and safe operation for your new fireplace.',
      features: ['New fireplace gas lines', 'Proper sizing', 'Safety compliance', 'Professional installation'],
      image: 'https://images.unsplash.com/photo-1683719228240-0b880a55e0b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Gas fireplace installation in living room'
    },
    {
      title: 'Emergency Gas Services',
      description: '24/7 emergency gas repair services including shut-off installation, diagnostics, and pipe replacement. Rapid response for all gas emergencies.',
      features: ['24/7 emergency service', 'Gas shut-off installation', 'System diagnostics', 'Pipe replacement'],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      imageAlt: 'Emergency gas repair service technician'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Safety Assessment',
      description: 'Comprehensive safety evaluation of existing gas systems and installation requirements.'
    },
    {
      step: '2',
      title: 'Professional Design',
      description: 'Custom gas system design ensuring proper sizing, routing, and code compliance.'
    },
    {
      step: '3',
      title: 'Licensed Installation',
      description: 'Professional installation by certified gas technicians with all required permits.'
    },
    {
      step: '4',
      title: 'Testing & Certification',
      description: 'Complete pressure testing, leak detection, and safety certification for your peace of mind.'
    }
  ];

  const faqs = [
    {
      question: 'Do I need a permit for gas line installation?',
      answer: 'Yes, most gas line installations require permits. We handle all permit applications and ensure your installation meets local building codes and safety standards.'
    },
    {
      question: 'How do I know if I have a gas leak?',
      answer: 'Signs include the smell of sulfur/rotten eggs, hissing sounds near gas lines, dead vegetation near gas lines, or higher than normal gas bills. If you suspect a leak, evacuate and call us immediately.'
    },
    {
      question: 'Can you convert my propane appliances to natural gas?',
      answer: 'Yes, we install conversion kits for most appliances including stoves, dryers, fireplaces, and water heaters. We ensure proper conversion and safety testing.'
    },
    {
      question: 'How often should gas lines be inspected?',
      answer: 'We recommend annual inspections for safety. Older systems or high-use commercial installations may need more frequent inspections.'
    },
    {
      question: 'Do you provide emergency gas services?',
      answer: 'Yes, we offer 24/7 emergency gas services for leaks, shut-offs, and urgent repairs throughout Vancouver and surrounding areas.'
    },
    {
      question: 'Are your technicians certified for gas work?',
      answer: 'Absolutely. All our gas technicians are licensed, certified, and regularly trained on the latest safety protocols and regulations.'
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
              Professional <span className="text-primary">Gas</span> Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto break-words">
              Complete gas solutions for residential and commercial properties. From installations 
              and repairs to emergency services - we ensure safe, reliable gas systems you can trust.
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
                Comprehensive Gas Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From gas line installations to emergency repairs, our certified technicians deliver 
                safe, reliable gas solutions for both residential and commercial properties.
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
                From initial safety assessment to final certification, we ensure every gas project 
                meets the highest safety standards and regulatory compliance.
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
                Get answers to common gas service questions
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
                Gas Emergency?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Gas leaks and emergencies require immediate attention. Our certified technicians 
                are available 24/7 to ensure your safety with rapid emergency response.
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
                Why Choose Our Gas Services?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Licensed and certified gas technicians</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Residential and commercial service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">24/7 emergency gas services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Code compliant installations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Safety guaranteed with testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Upfront pricing and free estimates</span>
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready for Safe Gas Solutions?</h3>
                <p className="text-gray-600 mb-6">
                  From emergency repairs to complete gas system installations, HiTech Plumbing delivers 
                  professional gas services for residential and commercial properties. Safety is our 
                  priority - contact us today for your free estimate.
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