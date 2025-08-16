'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

export default function HeatingPage() {
  const services = [
    {
      title: 'In-Floor Heating',
      description: 'Professional installation and service of radiant floor heating systems for ultimate comfort and energy efficiency in residential and commercial spaces.',
      features: ['Hydronic radiant systems', 'Electric floor heating', 'Zoned temperature control', 'Energy efficient operation'],
      image: 'https://plymouthplumbers.com/wp-content/uploads/2020/11/shutterstock_721550770.jpg',
      imageAlt: 'Radiant floor heating installation in modern bathroom'
    },
    {
      title: 'Heating System Installation',
      description: 'Complete heating system installations including furnaces, heat pumps, and ductwork for optimal comfort and efficiency.',
      features: ['High-efficiency furnaces', 'Heat pump systems', 'Ductwork installation', 'Smart thermostat integration'],
      image: 'https://plus.unsplash.com/premium_photo-1664298059861-1560b39fb890?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Professional technician installing new heating system'
    },
    {
      title: 'Heating System Repair',
      description: 'Expert diagnosis and repair of all heating systems to restore warmth and comfort to your property.',
      features: ['Emergency repair service', 'System diagnostics', 'Component replacement', '24/7 availability'],
      image: 'https://images.unsplash.com/photo-1599028274511-e02a767949a3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Technician diagnosing and repairing heating system'
    },
    {
      title: 'Boiler Services',
      description: 'Comprehensive boiler installation, maintenance, and optimization for reliable heating performance.',
      features: ['New boiler installation', 'System maintenance', 'Efficiency upgrades', 'Safety inspections'],
      image: 'https://www.suiteheat.co.uk/wp-content/uploads/2024/10/boilerservices-1024x1024.jpg',
      imageAlt: 'Modern boiler system in residential basement'
    },
    {
      title: 'Boiler Repair Vancouver',
      description: 'Specialized boiler repair services throughout Vancouver with fast response times and expert technicians.',
      features: ['Same-day service', 'All boiler brands', 'Emergency repairs', 'Preventive maintenance'],
      image: 'https://www.kmcgas.co.uk/wp-content/uploads/2021/06/Vaillant-boiler-service-maidstone.jpg',
      imageAlt: 'Emergency boiler repair service in Vancouver'
    },
    {
      title: 'HVAC Maintenance',
      description: 'Regular maintenance programs to keep your heating systems running efficiently and extend equipment lifespan.',
      features: ['Seasonal tune-ups', 'Filter replacement', 'System cleaning', 'Performance optimization'],
      image: 'https://www.missionviejoair.com/wp-content/uploads/2024/06/How-to-Pick-the-Best-HVAC-Repair-Contractor.jpg',
      imageAlt: 'HVAC maintenance and tune-up service'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'System Assessment',
      description: 'Comprehensive evaluation of your heating needs, existing systems, and property requirements.'
    },
    {
      step: '2',
      title: 'Custom Design',
      description: 'Tailored heating solution design based on your space, budget, and efficiency goals.'
    },
    {
      step: '3',
      title: 'Professional Installation',
      description: 'Expert installation by licensed technicians ensuring optimal performance and safety.'
    },
    {
      step: '4',
      title: 'Testing & Service',
      description: 'Complete system testing and ongoing maintenance support for peak performance.'
    }
  ];

  const faqs = [
    {
      question: 'What type of heating system is most efficient?',
      answer: 'Heat pumps are typically the most energy-efficient option, followed by high-efficiency condensing furnaces. The best choice depends on your climate, home size, and existing infrastructure.'
    },
    {
      question: 'How often should I service my heating system?',
      answer: 'Annual maintenance is recommended for all heating systems. This includes cleaning, inspection, and tune-ups to ensure optimal efficiency and prevent breakdowns.'
    },
    {
      question: 'Is radiant floor heating worth the investment?',
      answer: 'Yes, radiant floor heating provides superior comfort, even heat distribution, and can be 25-50% more energy efficient than forced air systems.'
    },
    {
      question: 'How long do boilers typically last?',
      answer: 'Well-maintained boilers can last 15-20 years. Regular maintenance and prompt repairs can extend their lifespan significantly.'
    },
    {
      question: 'Do you provide emergency heating repairs?',
      answer: 'Yes, we offer 24/7 emergency heating repair services throughout Vancouver with rapid response times to restore your comfort.'
    },
    {
      question: 'Can you service commercial heating systems?',
      answer: 'Absolutely. We service both residential and commercial heating systems of all sizes, from small offices to large industrial facilities.'
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
              Professional <span className="text-primary">Heating</span> Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto break-words">
              Complete heating solutions for residential and commercial properties. From installations 
              and repairs to maintenance and emergency service - we keep you warm year-round.
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
                Comprehensive Heating Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From in-floor heating to boiler repairs, our expert technicians deliver reliable 
                heating solutions for both residential and commercial properties.
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
                From initial assessment to ongoing service, we ensure every heating project 
                meets the highest standards of quality and efficiency.
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
          {/* In-Floor Heating */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">In-Floor Heating Systems</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Experience ultimate comfort with radiant floor heating. Our systems provide even, 
                  efficient warmth that eliminates cold spots and reduces energy costs for both 
                  residential and commercial applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hydronic Systems</h4>
                      <p className="text-gray-600">Hot water-based systems for maximum efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Electric Systems</h4>
                      <p className="text-gray-600">Perfect for bathrooms and smaller areas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Zoned Control</h4>
                      <p className="text-gray-600">Individual room temperature control</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">Installation Areas</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Bathrooms</span>
                    <span className="text-primary font-bold">Luxury Comfort</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Kitchens</span>
                    <span className="text-primary font-bold">Warm Workspace</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Living Areas</span>
                    <span className="text-primary font-bold">Even Heating</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Commercial Spaces</span>
                    <span className="text-primary font-bold">Energy Efficient</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Boiler Services */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fadeInLeft">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">Boiler Services Vancouver</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Emergency Repairs</h4>
                      <p className="text-sm text-gray-600">24/7 boiler repair service</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">New Installation</h4>
                      <p className="text-sm text-gray-600">High-efficiency boiler systems</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Maintenance</h4>
                      <p className="text-sm text-gray-600">Regular service and tune-ups</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary text-xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">All Brands</h4>
                      <p className="text-sm text-gray-600">Service all boiler manufacturers</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Expert Boiler Services</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our certified technicians provide comprehensive boiler services throughout Vancouver. 
                  From emergency repairs to new installations, we ensure your heating system operates 
                  safely and efficiently.
                </p>
                <div className="bg-primary text-white p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-bold mb-2">Vancouver Area Coverage</h4>
                  <p className="text-blue-100">
                    Serving all areas of Vancouver with fast response times and expert boiler 
                    repair services. Our technicians are available 24/7 for emergency situations.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 inline-block"
                >
                  Get Boiler Service
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Heating System Installation & Repair */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Heating System Solutions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Complete heating system installation and repair services for all types of properties. 
                  We work with the latest technology to provide energy-efficient, reliable heating solutions.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">Installation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• New system design</li>
                      <li>• High-efficiency units</li>
                      <li>• Ductwork installation</li>
                      <li>• Smart controls</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">Repair Services</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Emergency repairs</li>
                      <li>• System diagnostics</li>
                      <li>• Component replacement</li>
                      <li>• Performance tuning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div className="bg-accent text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">System Types We Service</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-white text-xl mr-3">•</span>
                    <div>
                      <h4 className="font-semibold">Furnaces</h4>
                      <p className="text-blue-100 text-sm">Gas, electric, and oil furnaces</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-white text-xl mr-3">•</span>
                    <div>
                      <h4 className="font-semibold">Heat Pumps</h4>
                      <p className="text-blue-100 text-sm">Air source and ground source systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-white text-xl mr-3">•</span>
                    <div>
                      <h4 className="font-semibold">Boilers</h4>
                      <p className="text-blue-100 text-sm">Steam and hot water boilers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-white text-xl mr-3">•</span>
                    <div>
                      <h4 className="font-semibold">Radiant Systems</h4>
                      <p className="text-blue-100 text-sm">Floor and wall radiant heating</p>
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
                Get answers to common heating system questions
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
                Heating Emergency?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Don't let a broken heating system leave you in the cold. Our emergency 
                technicians are available 24/7 to restore warmth to your property.
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
                Why Choose Our Heating Services?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Licensed and certified technicians</span>
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
                  <span className="text-gray-700">Energy-efficient solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">2-year warranty on installations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">Upfront pricing and free estimates</span>
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready for Reliable Heating?</h3>
                <p className="text-gray-600 mb-6">
                  From emergency repairs to complete system installations, HiTech Plumbing delivers 
                  professional heating solutions for residential and commercial properties. 
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