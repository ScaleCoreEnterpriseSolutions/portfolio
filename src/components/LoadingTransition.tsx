import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoadingTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent z-50 origin-left"
        />
      )}
    </AnimatePresence>
  );
};

export default LoadingTransition;
