'use client';

import { motion } from 'framer-motion';

const marqueeItems = [
  'Emergency Plumbing 24/7',
  'Licensed & Insured',
  'Free Estimates',
  '2-Year Warranty',
  'Same Day Service',
  'Expert Technicians',
  'Transparent Pricing',
  'Quality Guaranteed',
  'Fast Response Time',
  'Professional Service',
];

export default function MarqueeSection() {
  return (
    <div className="h-[20vh] bg-gradient-to-r from-primary to-accent text-white overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${8 + i * 7}%`,
              top: '50%',
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random(),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="flex flex-col h-full justify-center relative z-10">
        {/* Main Marquee */}
        <div className="flex-1 flex items-center overflow-hidden">
          <motion.div
            className="flex items-center space-x-20 whitespace-nowrap"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {Array(10).fill([...marqueeItems]).flat().map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
                  {item}
                </span>
                <div className="mx-8 w-2 h-2 bg-white/60 rounded-full"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Secondary Marquee (Reverse Direction) */}
        <div className="flex-1 flex items-center overflow-hidden">
          <motion.div
            className="flex items-center space-x-16 whitespace-nowrap"
            animate={{ x: ['-100%', '0%'] }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...marqueeItems.reverse(), ...marqueeItems, ...marqueeItems].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold text-white/95 tracking-widest uppercase">
                  {item}
                </span>
                <motion.div
                  className="mx-6 w-1 h-8 bg-white/40"
                  animate={{
                    scaleY: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                    ease: "easeInOut"
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-primary to-transparent z-20"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-accent to-transparent z-20"></div>
    </div>
  );
}