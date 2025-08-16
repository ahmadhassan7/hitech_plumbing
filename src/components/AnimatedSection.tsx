'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0 
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let animationProps;

    switch (animation) {
      case 'fadeInUp':
        animationProps = { y: 50, opacity: 0 };
        break;
      case 'fadeInLeft':
        animationProps = { x: -50, opacity: 0 };
        break;
      case 'fadeInRight':
        animationProps = { x: 50, opacity: 0 };
        break;
      case 'scaleIn':
        animationProps = { scale: 0.8, opacity: 0 };
        break;
      default:
        animationProps = { y: 50, opacity: 0 };
    }

    gsap.fromTo(
      element,
      animationProps,
      {
        ...Object.keys(animationProps).reduce((acc, key) => {
          acc[key as keyof typeof animationProps] = key === 'opacity' ? 1 : 0;
          return acc;
        }, {} as Partial<typeof animationProps>),
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [animation, delay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}