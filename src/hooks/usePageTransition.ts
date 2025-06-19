import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const usePageTransition = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true);
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, location]);

  return { displayLocation, isTransitioning };
};

// Smooth scroll to top on route change
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);
};

// Link transition effects
export const linkTransitionVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};

export const buttonTransitionVariants = {
  initial: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
  hover: {
    scale: 1.02,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};
