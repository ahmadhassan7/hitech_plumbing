'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useBannerHeight } from '@/hooks/useBannerHeight';

const navigationItems = [
  { name: 'Plumbing', href: '/plumbing' },
  { name: 'Gas', href: '/gas' },
  { name: 'Heating', href: '/heating' },
  { name: 'Hot Water', href: '/hot-water' },
  { name: 'Pricing & Warranty', href: '/pricing-warranty' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const bannerHeight = useBannerHeight();
  
  const navY = useTransform(scrollY, [0, 100], [0, -5]);
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      style={{ 
        y: navY, 
        opacity: navOpacity,
        top: `${bannerHeight}px`,
        transition: 'top 0.5s ease-out'
      }}
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-2xl border-b border-primary/5 shadow-2xl shadow-primary/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: '50%',
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Company Name with Advanced Animation */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="relative group">
              <motion.h1 
                className="text-3xl font-extrabold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                style={{
                  backgroundSize: '200% 100%',
                }}
                whileHover={{
                  backgroundPosition: '100% 0%',
                  transition: { duration: 0.8 }
                }}
              >
                HiTech Plumbing
                
                {/* Glowing effect */}
                <motion.div
                  className="absolute inset-0 text-3xl font-extrabold text-primary/30 blur-sm"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  HiTech Plumbing
                </motion.div>
              </motion.h1>
              
              {/* Progressive underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 0.1 * index + 0.3, 
                  duration: 0.6,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className="relative px-6 py-4 text-foreground font-semibold transition-all duration-300 rounded-xl block group"
                >
                  <motion.span
                    className="relative z-10 block"
                    animate={{ 
                      color: hoveredItem === item.name ? '#ffffff' : undefined,
                      y: hoveredItem === item.name ? -1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  
                  {/* Morphing background */}
                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <>
                        <motion.div
                          initial={{ scale: 0, borderRadius: '50%' }}
                          animate={{ scale: 1, borderRadius: '12px' }}
                          exit={{ scale: 0, borderRadius: '50%' }}
                          transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
                          className="absolute inset-0 bg-gradient-to-r from-primary to-accent shadow-lg"
                        />
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="absolute inset-0 bg-white/20 rounded-xl"
                        />
                      </>
                    )}
                  </AnimatePresence>
                  
                  {/* Particle effect on hover */}
                  {hoveredItem === item.name && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/60 rounded-full"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [-10, -20, -10],
                            opacity: [1, 0, 1],
                            scale: [1, 0.5, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: Math.random() * 0.5,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* Ribbon-style CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: -30, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: 0.1 * navigationItems.length + 0.3, 
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              className="relative ml-8"
              onMouseEnter={() => setHoveredItem('Get Quote')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href="/contact"
                className="relative px-6 py-4 text-foreground font-semibold transition-all duration-300 rounded-xl block group"
              >
                <motion.span
                  className="relative z-10 block flex items-center gap-2"
                  animate={{ 
                    color: hoveredItem === 'Get Quote' ? '#ffffff' : undefined,
                    y: hoveredItem === 'Get Quote' ? -1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Get Quote
                  <motion.span
                    animate={{ x: hoveredItem === 'Get Quote' ? [0, 3, 0] : 0 }}
                    transition={{ duration: 1.5, repeat: hoveredItem === 'Get Quote' ? Infinity : 0, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </motion.span>
                
                {/* Morphing background */}
                <AnimatePresence>
                  {hoveredItem === 'Get Quote' && (
                    <>
                      <motion.div
                        initial={{ scale: 0, borderRadius: '50%' }}
                        animate={{ scale: 1, borderRadius: '12px' }}
                        exit={{ scale: 0, borderRadius: '50%' }}
                        transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
                        className="absolute inset-0 bg-gradient-to-r from-primary to-accent shadow-lg"
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="absolute inset-0 bg-white/20 rounded-xl"
                      />
                    </>
                  )}
                </AnimatePresence>
                
                {/* Ribbon corners */}
                <div className="absolute -left-2 top-0 bottom-0 w-4 bg-primary/20 transform skew-x-12 rounded-l-lg opacity-30"></div>
                <div className="absolute -right-2 top-0 bottom-0 w-4 bg-primary/20 transform -skew-x-12 rounded-r-lg opacity-30"></div>
                
                {/* Particle effect on hover */}
                {hoveredItem === 'Get Quote' && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/60 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          y: [-10, -20, -10],
                          opacity: [1, 0, 1],
                          scale: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: Math.random() * 0.5,
                        }}
                      />
                    ))}
                  </div>
                )}
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.div 
            className="lg:hidden"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    animate={{ pathLength: [0, 1] }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scaleY: 0 }}
            animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
            exit={{ opacity: 0, height: 0, scaleY: 0 }}
            transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-primary/10"
          >
            <div className="px-6 pt-6 pb-8 space-y-3">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -50, rotateY: -45 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 text-foreground hover:text-white font-semibold rounded-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-primary to-accent text-white py-4 rounded-2xl font-bold text-lg relative overflow-hidden"
                >
                  <span className="relative z-10">Get Quote →</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}