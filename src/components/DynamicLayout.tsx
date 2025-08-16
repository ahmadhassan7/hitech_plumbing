'use client';

import { useState, useEffect } from 'react';
import { useBannerHeight } from '@/hooks/useBannerHeight';

interface DynamicLayoutProps {
  children: React.ReactNode;
}

export default function DynamicLayout({ children }: DynamicLayoutProps) {
  const bannerHeight = useBannerHeight();
  const [navHeight, setNavHeight] = useState(96); // Default navbar height (24 * 4px)

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        setNavHeight(nav.offsetHeight);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);

    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  const totalTopOffset = bannerHeight + navHeight;

  return (
    <main 
      style={{ 
        paddingTop: `${totalTopOffset}px`,
        transition: 'padding-top 0.5s ease-out'
      }}
    >
      {children}
    </main>
  );
}