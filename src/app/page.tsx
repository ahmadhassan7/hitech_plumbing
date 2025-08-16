'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroCarousel from '@/components/HeroCarousel';
import MarqueeSection from '@/components/MarqueeSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import HotWaterSection from '@/components/HotWaterSection';
import GuaranteeBanner from '@/components/GuaranteeBanner';
import LogoMarquee from '@/components/LogoMarquee';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

export default function Home() {
  const services = [
    {
      title: 'Emergency Plumbing',
      description: 'Quick fixes for leaks, clogs, and burst pipes. Available 24/7 for urgent repairs.',
      href: '/plumbing',
      price: 'From $119'
    },
    {
      title: 'Gas Services',
      description: 'Safe gas line repairs and installations by certified professionals.',
      href: '/gas',
      price: 'From $253'
    },
    {
      title: 'Heating Systems',
      description: 'Complete heating system installation, repair and maintenance services.',
      href: '/heating',
      price: 'From $303'
    },
    {
      title: 'Hot Water Systems',
      description: 'Tank and tankless water heater installation and service solutions.',
      href: '/hot-water',
      price: 'From $2,123'
    }
  ];

  const features = [
    {
      title: '2-Year Warranty',
      description: 'Comprehensive warranty on all installations and major repairs'
    },
    {
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency services for urgent plumbing issues'
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear pricing with no hidden fees - just a $169 call-out fee'
    },
    {
      title: 'Licensed Professionals',
      description: 'Skilled technicians with years of experience and proper certification'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel - 80% height */}
      <HeroCarousel />
      
      {/* Marquee Section - 20% height */}
      <MarqueeSection />

      {/* Services Section with Background Text and Overlapping Cards */}
      <ServicesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Hot Water Section */}
      <HotWaterSection />

      {/* Guarantee Banner */}
      <GuaranteeBanner />

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today for a free consultation and transparent quote. Available 24/7 for emergency services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-lg"
              >
                Get Free Quote
              </Link>
              <Link
                href="tel:555-123-8324"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center gap-3 text-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call (604) HI-TECH
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
