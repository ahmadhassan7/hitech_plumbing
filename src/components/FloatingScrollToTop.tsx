'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const text = "HITECH PLUMBING • HITECH PLUMBING • ";
  const chars = text.split('');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            className="relative w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full shadow-xl hover:shadow-2xl cursor-pointer group overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 rounded-full" />
            
            {/* Rotating text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-20 h-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                {chars.map((char, index) => {
                  const angle = (index * 360) / chars.length;
                  return (
                    <motion.span
                      key={index}
                      className="absolute text-white font-bold text-xs"
                      style={{
                        transformOrigin: '0px 40px',
                        transform: `rotate(${angle}deg)`,
                        left: '50%',
                        top: '50%',
                        marginLeft: '-2px',
                        marginTop: '-40px',
                      }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>

            {/* Center arrow icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ y: 2 }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </motion.svg>
            </div>

            {/* Ripple effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none"
          >
            Back to Top
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}