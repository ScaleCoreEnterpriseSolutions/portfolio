import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Download, Mail } from "lucide-react";
import Logo from "./Logo";
import {
  linkTransitionVariants,
  buttonTransitionVariants,
} from "@/hooks/usePageTransition";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/why-choose-us", label: "Why Choose Us" },
    { path: "/get-started", label: "Get Started" },
  ];

  const isActivePath = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 w-full bg-white/10 backdrop-blur-xl border-b border-white/20 z-50 shadow-lg shadow-primary-500/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            variants={linkTransitionVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="/" className="flex items-center">
              <Logo size="md" showText={true} />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                variants={linkTransitionVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-white/10 hover:backdrop-blur-sm",
                    isActivePath(item.path)
                      ? "text-primary-600 bg-primary-50/80 backdrop-blur-sm shadow-sm"
                      : "text-gray-700 hover:text-primary-600",
                  )}
                >
                  {item.label}
                  {isActivePath(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div
              variants={buttonTransitionVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-700 hover:text-primary-600 transition-all duration-300"
              >
                <Link to="/case-studies" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Results
                </Link>
              </Button>
            </motion.div>
            <motion.div
              variants={buttonTransitionVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-primary-600 to-accent hover:from-primary-700 hover:to-accent/90 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
              >
                <Link to="/get-started" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Start Now
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            variants={buttonTransitionVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-primary-500/10 z-40"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <nav className="flex flex-col p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    variants={linkTransitionVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        "relative px-4 py-3 text-base font-medium transition-all duration-300 rounded-2xl block",
                        isActivePath(item.path)
                          ? "text-primary-600 bg-gradient-to-r from-primary-50 to-accent/10 border border-primary-200/50 shadow-sm"
                          : "text-gray-700 hover:text-primary-600 hover:bg-white/50",
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                      {isActivePath(item.path) && (
                        <motion.div
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-600 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="flex flex-col gap-3 pt-4 mt-4 border-t border-white/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                >
                  <motion.div
                    variants={buttonTransitionVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary-200 bg-white/50 backdrop-blur-sm hover:bg-primary-50 text-gray-700 hover:text-primary-600 rounded-2xl"
                    >
                      <Link
                        to="/case-studies"
                        className="flex items-center gap-2 justify-center py-3"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Download className="w-4 h-4" />
                        View Results
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={buttonTransitionVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-primary-600 to-accent hover:from-primary-700 hover:to-accent/90 shadow-lg shadow-primary-500/25 rounded-2xl"
                    >
                      <Link
                        to="/get-started"
                        className="flex items-center gap-2 justify-center py-3"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Mail className="w-4 h-4" />
                        Start Now
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
