'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="top-banner"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-gradient-to-r from-primary to-accent text-white py-3"
      >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${i * 8.5}%`,
              top: '50%',
            }}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side - Book Online */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </motion.div>
            <Link 
              href="/contact" 
              className="font-semibold hover:text-white/80 transition-colors duration-200"
            >
              <motion.span
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Book Online
              </motion.span>
            </Link>
          </motion.div>

          {/* Center - Phone Number */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </motion.div>
            <Link 
              href="tel:604-443-8324" 
              className="font-bold text-lg hover:text-white/80 transition-colors duration-200"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                (604)-HI-TECH
              </motion.span>
            </Link>
          </motion.div>

          {/* Right side - Office Hours & 24/7 */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-6 text-sm"
          >
            {/* Office Hours */}
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </motion.div>
              <div>
                <div className="font-medium">Office</div>
                <div className="text-white/90">Mon – Fri: 8am – 5pm</div>
              </div>
            </div>

            {/* Separator */}
            <div className="w-px h-8 bg-white/30"></div>

            {/* 24/7 Service */}
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
              </motion.div>
              <div>
                <div className="font-medium">Call to book 24/7</div>
              </div>
            </div>
          </motion.div>

          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsVisible(false)}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
            aria-label="Close banner"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
    </motion.div>
    </AnimatePresence>
  );
}