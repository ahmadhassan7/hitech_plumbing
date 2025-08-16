'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

export default function LoadingPage({ onLoadingComplete }: LoadingPageProps) {
  useEffect(() => {
    const timer = setTimeout(onLoadingComplete, 1500); // Only 1.5 seconds
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const words = [
    'pipes', 'water', 'repair', 'fix', 'plumbing', 'drain', 'leak', 'service',
    'professional', 'expert', 'reliable', 'quality', 'fast', 'emergency',
    'installation', 'maintenance', 'heating', 'gas', 'solutions', 'trusted',
    'experienced', 'certified', 'licensed', 'warranty', 'affordable', 'clean'
  ];

  // Static positions to ensure SSR/client consistency
  const wordPositions = [
    { left: 12, top: 15, fontSize: 23, initialRotate: -1, animateX1: 5, animateX2: 15, animateRotate: 20, duration: 4.2 },
    { left: 65, top: 25, fontSize: 18, initialRotate: 8, animateX1: -12, animateX2: -8, animateRotate: -25, duration: 3.8 },
    { left: 25, top: 75, fontSize: 21, initialRotate: -12, animateX1: 18, animateX2: 25, animateRotate: 15, duration: 4.5 },
    { left: 80, top: 45, fontSize: 19, initialRotate: 5, animateX1: -5, animateX2: -15, animateRotate: -18, duration: 3.5 },
    { left: 45, top: 8, fontSize: 24, initialRotate: -8, animateX1: 8, animateX2: 12, animateRotate: 22, duration: 4.1 },
    { left: 8, top: 60, fontSize: 16, initialRotate: 12, animateX1: -8, animateX2: -20, animateRotate: -12, duration: 3.9 },
    { left: 75, top: 70, fontSize: 22, initialRotate: -5, animateX1: 15, animateX2: 8, animateRotate: 28, duration: 4.3 },
    { left: 35, top: 35, fontSize: 20, initialRotate: 10, animateX1: -10, animateX2: -5, animateRotate: -20, duration: 3.7 },
    { left: 55, top: 85, fontSize: 17, initialRotate: -15, animateX1: 12, animateX2: 18, animateRotate: 25, duration: 4.0 },
    { left: 20, top: 20, fontSize: 25, initialRotate: 3, animateX1: -15, animateX2: -25, animateRotate: -15, duration: 4.4 },
    { left: 88, top: 30, fontSize: 19, initialRotate: -10, animateX1: 5, animateX2: 10, animateRotate: 18, duration: 3.6 },
    { left: 15, top: 90, fontSize: 21, initialRotate: 7, animateX1: -12, animateX2: -18, animateRotate: -22, duration: 4.2 },
    { left: 70, top: 12, fontSize: 23, initialRotate: -3, animateX1: 20, animateX2: 15, animateRotate: 30, duration: 3.8 },
    { left: 40, top: 65, fontSize: 18, initialRotate: 15, animateX1: -8, animateX2: -12, animateRotate: -28, duration: 4.1 },
    { left: 60, top: 40, fontSize: 22, initialRotate: -7, animateX1: 10, animateX2: 20, animateRotate: 12, duration: 3.9 },
    { left: 5, top: 50, fontSize: 20, initialRotate: 12, animateX1: -18, animateX2: -10, animateRotate: -25, duration: 4.0 },
    { left: 85, top: 80, fontSize: 16, initialRotate: -12, animateX1: 8, animateX2: 5, animateRotate: 20, duration: 4.3 },
    { left: 30, top: 5, fontSize: 24, initialRotate: 8, animateX1: -5, animateX2: -20, animateRotate: -18, duration: 3.7 },
    { left: 75, top: 55, fontSize: 19, initialRotate: -5, animateX1: 15, animateX2: 25, animateRotate: 22, duration: 4.4 },
    { left: 50, top: 25, fontSize: 21, initialRotate: 10, animateX1: -15, animateX2: -8, animateRotate: -15, duration: 3.5 },
    { left: 10, top: 80, fontSize: 23, initialRotate: -8, animateX1: 12, animateX2: 18, animateRotate: 28, duration: 4.2 },
    { left: 90, top: 15, fontSize: 17, initialRotate: 5, animateX1: -10, animateX2: -15, animateRotate: -20, duration: 3.8 },
    { left: 25, top: 95, fontSize: 22, initialRotate: -15, animateX1: 5, animateX2: 12, animateRotate: 25, duration: 4.1 },
    { left: 65, top: 60, fontSize: 18, initialRotate: 12, animateX1: -20, animateX2: -25, animateRotate: -12, duration: 3.9 },
    { left: 45, top: 30, fontSize: 25, initialRotate: -3, animateX1: 8, animateX2: 15, animateRotate: 18, duration: 4.0 },
    { left: 82, top: 90, fontSize: 20, initialRotate: 8, animateX1: -8, animateX2: -12, animateRotate: -22, duration: 4.3 },
    { left: 18, top: 45, fontSize: 19, initialRotate: -10, animateX1: 18, animateX2: 10, animateRotate: 30, duration: 3.6 },
    { left: 72, top: 75, fontSize: 21, initialRotate: 15, animateX1: -12, animateX2: -18, animateRotate: -28, duration: 4.4 },
    { left: 38, top: 18, fontSize: 24, initialRotate: -5, animateX1: 10, animateX2: 20, animateRotate: 12, duration: 3.7 },
    { left: 58, top: 70, fontSize: 16, initialRotate: 7, animateX1: -15, animateX2: -8, animateRotate: -25, duration: 4.2 }
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 0.95
      }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Scattered Animated Text */}
      <div className="absolute inset-0">
        {wordPositions.map((position, i) => {
          const word = words[i % words.length];
          return (
            <motion.div
              key={i}
              className="absolute text-primary/40 font-semibold select-none pointer-events-none"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                fontSize: `${position.fontSize}px`,
              }}
              initial={{ 
                opacity: 0,
                scale: 0.5,
                rotate: position.initialRotate
              }}
              animate={{ 
                opacity: [0, 0.6, 0.3, 0],
                scale: [0.5, 1.2, 1, 0.8],
                y: [0, -30, -60, -90],
                x: [0, position.animateX1, position.animateX2],
                rotate: [0, position.animateRotate]
              }}
              transition={{
                duration: position.duration,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            >
              {word}
            </motion.div>
          );
        })}
      </div>

      {/* Central Content */}
      <div className="relative z-10 text-center">
        {/* Company Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6"
        >
          HiTech Plumbing
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-secondary mb-8"
        >
          Professional Plumbing Solutions
        </motion.p>

        {/* Simple Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}