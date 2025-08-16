'use client';

import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Plumbing Services', href: '/plumbing' },
  { name: 'Gas Services', href: '/gas' },
  { name: 'Heating Systems', href: '/heating' },
  { name: 'Hot Water Systems', href: '/hot-water' },
  { name: 'Pricing & Warranty', href: '/pricing-warranty' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">HiTech Plumbing</h2>
              <p className="text-white/90 font-semibold">2 Year Full Guarantee</p>
            </div>
            
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
              Professional plumbing, gas, heating, and hot water services with transparent pricing and industry-leading warranties. Building relationships that last with plumbing you can count on.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-300/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-xl">(604)-HI-TECH</p>
                  <p className="text-white/80">Available 24/7 for Emergency Services</p>
                  <p className="text-white/90 text-sm font-medium">$169 Call-out Fee</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-300/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Service Areas</p>
                  <p className="text-white/80">Vancouver, North Shore, Burnaby</p>
                  <p className="text-white/70 text-sm">Mon-Fri: 8am-5pm | 24/7 Emergency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Certifications */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white/80 text-sm">Licensed & Bonded</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-white/80 text-sm">Transparent Pricing</span>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center">
              <p className="text-white text-sm font-medium">
                © 2025 HiTech Plumbing. All rights reserved.
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-6 text-sm">
                <Link href="/privacy" className="text-white hover:text-white/80 transition-colors duration-200 font-medium">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white hover:text-white/80 transition-colors duration-200 font-medium">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}