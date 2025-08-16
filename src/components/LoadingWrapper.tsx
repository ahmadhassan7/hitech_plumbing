'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingPage from './LoadingPage';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingPage key="loading" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
}