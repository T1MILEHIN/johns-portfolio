import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useParams, useLocation } from "react-router-dom";
import Loader from "./components/loader";

const overlayVariants = {
  initial: { opacity: 0 },
  exit: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const slideVariants = {
  exit: {
    scaleY: 1,
    originY: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  initial: { 
    scaleY: 0, 
    originY: 1 
  }
};

const enterSlideVariants = {
  initial: { 
    scaleY: 1, 
    originY: 0 
  },
  animate: {
    scaleY: 0,
    originY: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const textVariants = {
  exit: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      delay: 0.2
    }
  },
  initial: { 
    opacity: 0, 
    y: 20 
  }
};

const enterTextVariants = {
  initial: { 
    opacity: 1, 
    y: 0 
  },
  animate: {
    opacity: 0,
    y: -20,
    transition: { 
      duration: 0.6 
    }
  }
};

// Memoized transition overlay component
const TransitionOverlay = ({ displayName, isExiting = false }) => {
  const variants = isExiting ? slideVariants : enterSlideVariants;
  const textVars = isExiting ? textVariants : enterTextVariants;
  const zIndex = isExiting ? 'z-[9999]' : 'z-[9998]';

  return (
    <motion.div 
      className={`fixed inset-0 ${zIndex} pointer-events-none`}
      initial={isExiting ? "initial" : "initial"}
      animate={isExiting ? "exit" : "animate"}
      exit={isExiting ? "exit" : "animate"}
      variants={isExiting ? overlayVariants : { initial: { opacity: 1 }, animate: { opacity: 0 }, transition: { duration: 0.8, delay: 0.4 } }}
    >
      <motion.div
        className="absolute inset-0 bg-black will-change-transform"
        variants={variants}
        style={{ backfaceVisibility: 'hidden' }}
      />
      <motion.p
        className="absolute inset-0 text-white flex items-center justify-center text-4xl md:text-7xl font-medium font-specify_exp_med tracking-wide will-change-transform select-none"
        variants={textVars}
        style={{ backfaceVisibility: 'hidden' }}
      >
        {displayName}
      </motion.p>
    </motion.div>
  );
};

TransitionOverlay.propTypes = {
  displayName: PropTypes.string.isRequired,
  isExiting: PropTypes.bool
};

export const PageTransition = ({ children, pageName }) => {
  const { project } = useParams();
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Memoized display name calculation
  const displayName = useMemo(() => {
    if (pageName) return pageName;
    if (project) return project.charAt(0).toUpperCase() + project.slice(1);
    
    // Route-based page names
    const routeNames = {
      '/': 'Home',
      '/about': 'About',
      '/contact': 'Contact',
      '/graphics': 'Graphics',
      '/experience': 'Experience',
      '/allprojects': 'Projects',
      '/alldesigns': 'Designs',
      '/case-study': 'Case Study'
    };
    
    return routeNames[location.pathname] || 'Page';
  }, [pageName, project, location.pathname]);

  // Optimized home loader logic
  useEffect(() => {
    if (displayName === "Home") {
      const hasVisited = sessionStorage.getItem("hasVisitedHome");
      if (!hasVisited) {
        setShowLoader(true);
        sessionStorage.setItem("hasVisitedHome", "true");
        
        // Auto-hide loader after animation completes
        const timer = setTimeout(() => {
          setShowLoader(false);
        }, 3000); // Adjust based on your loader duration
        
        return () => clearTimeout(timer);
      }
    }
  }, [displayName]);

  // Handle transition state
  useEffect(() => {
    if (displayName !== "Home" && !showLoader) {
      setIsTransitioning(true);
      
      // Reset transition state after animation completes
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1600); // Total animation duration
      
      return () => clearTimeout(timer);
    }
  }, [displayName, showLoader, location.pathname]);

  // Callback for loader completion
  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  // Early return for home with loader
  if (showLoader) {
    return (
      <>
        {children}
        <Loader onComplete={handleLoaderComplete} />
      </>
    );
  }

  // No transition for home page
  if (displayName === "Home") {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <React.Fragment key="transition">
            {/* Exit transition */}
            <TransitionOverlay 
              displayName={displayName} 
              isExiting={true}
            />
            {/* Enter transition */}
            <TransitionOverlay 
              displayName={displayName} 
              isExiting={false}
            />
          </React.Fragment>
        )}
      </AnimatePresence>
    </>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string
};

// Optimized HOC with better performance
export function withPageTransition(Component, pageName) {
  const WithPageTransition = React.memo((props) => {
    return (
      <PageTransition pageName={pageName}>
        <Component {...props} />
      </PageTransition>
    );
  });

  WithPageTransition.displayName = `withPageTransition(${
    Component.displayName || Component.name || "Component"
  })`;
  
  return WithPageTransition;
}

// Performance monitoring hook (optional)
export const useTransitionPerformance = () => {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name.includes('transition')) {
          console.log(`Transition performance: ${entry.duration}ms`);
        }
      });
    });
    
    observer.observe({ entryTypes: ['measure'] });
    
    return () => observer.disconnect();
  }, []);
};

export default PageTransition;