'use client';

import { useState, useEffect } from 'react';

export function useBannerHeight() {
  const [bannerHeight, setBannerHeight] = useState(48); // Default banner height (12 * 4px)

  useEffect(() => {
    const updateBannerHeight = () => {
      const banner = document.getElementById('top-banner');
      if (banner) {
        setBannerHeight(banner.offsetHeight);
      } else {
        setBannerHeight(0);
      }
    };

    // Initial check
    updateBannerHeight();
    
    // Set up observers for banner changes
    const observer = new MutationObserver(() => {
      updateBannerHeight();
    });

    // Watch for changes in the document body
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    window.addEventListener('resize', updateBannerHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateBannerHeight);
    };
  }, []);

  return bannerHeight;
}