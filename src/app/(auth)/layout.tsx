"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleTransitionStart = () => {
    setIsTransitioning(true);
  };

  const handleTransitionComplete = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 50); // Small delay to ensure smooth transition
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
          pointerEvents: 'none'
        }}
      />
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 800, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="absolute w-full h-full"
          onAnimationStart={handleTransitionStart}
          onAnimationComplete={handleTransitionComplete}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
