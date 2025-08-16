'use client';

import { motion } from 'framer-motion';

const logos = [
  'https://pinkplumbing.ca/wp-content/uploads/2023/06/pinkplumbing-website-04-logos.png',
  'https://pinkplumbing.ca/wp-content/uploads/2023/06/pinkplumbing-website-01-logos.png',
  'https://pinkplumbing.ca/wp-content/uploads/2023/06/pinkplumbing-website-05-logos.png',
  'https://pinkplumbing.ca/wp-content/uploads/2024/04/pinkplumbing-award-nsnews-2024.png',
  'https://pinkplumbing.ca/wp-content/uploads/2023/06/pinkplumbing-website-07-logos.png',
  'https://pinkplumbing.ca/wp-content/uploads/2024/01/pinkplumbing-website-09-logos.png',
  'https://pinkplumbing.ca/wp-content/uploads/2023/06/pinkplumbing-website-02-logos.png',
  'https://pinkplumbing.ca/wp-content/uploads/2023/06/pinkplumbing-website-03-logos.png'
];

export default function LogoMarquee() {
  return (
    <section className="py-12 overflow-hidden" style={{ backgroundColor: '#FDF8F7' }}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted Partners & Certifications</h3>
      </div>

      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-20 h-full z-10" style={{ background: 'linear-gradient(to right, #FDF8F7, transparent)' }}></div>
        <div className="absolute right-0 top-0 w-20 h-full z-10" style={{ background: 'linear-gradient(to left, #FDF8F7, transparent)' }}></div>

        {/* Marquee Container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-16 whitespace-nowrap"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Repeat logos multiple times for seamless infinite scroll */}
            {Array(4).fill([...logos]).flat().map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo}
                  alt={`Certification ${index + 1}`}
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}