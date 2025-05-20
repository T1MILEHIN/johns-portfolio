import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const PageTransition = ({ children, pageName }) => {
  return (
    <>
      {children}
      <motion.div
        className="fixed inset-0 z-[9999] pointer-events-none"
        initial={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ scaleY: 0, originY: 1 }}
          exit={{ scaleY: 1, originY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="absolute inset-0 text-white flex items-center justify-center text-4xl md:text-6xl font-medium tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {pageName}
        </motion.p>
      </motion.div>
      
      {/* Overlay that appears when entering a page */}
      <motion.div
        className="fixed inset-0 z-[9999] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Dark overlay that slides out to top */}
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ scaleY: 1, originY: 0 }}
          animate={{ scaleY: 0, originY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Page name that fades out */}
        <motion.p
          className="absolute inset-0 text-white flex items-center justify-center text-4xl md:text-6xl font-medium tracking-wide"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {pageName}
        </motion.p>
      </motion.div>
    </>
  );
};

PageTransition.propTypes = {
  children: PropTypes.any, 
  pageName:  PropTypes.any
}

// Higher-order component for easy wrapping
export function withPageTransition(
  Component,
  pageName
) {
  const WithPageTransition = (props) => {
    return (
      <PageTransition pageName={pageName}>
        <Component {...props} />
      </PageTransition>
    );
  };

  WithPageTransition.displayName = `withPageTransition(${Component.displayName || Component.name || "Component"})`;
  return WithPageTransition;
}