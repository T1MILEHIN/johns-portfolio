import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Loader from "./components/loader";

export const PageTransition = ({ children, pageName }) => {
  const { project } = useParams();
  const displayName = pageName || project || "";
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (displayName === "Home") {
      const hasVisited = sessionStorage.getItem("hasVisitedHome");
      if (!hasVisited) {
        setShowLoader(true);
        sessionStorage.setItem("hasVisitedHome", "true");
      }
    }
  }, [displayName]);

  return (
    <>
      {children}
      {
        showLoader ? <Loader /> :
          displayName !== "Home" &&
          <>
            <motion.div className="z-50 fixed inset-0 pointer-events-none" initial={{ opacity: 0 }} exit={{ opacity: 1 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <motion.div
                className="absolute z-[999999999999999999999] inset-0 bg-black"
                initial={{ scaleY: 0, originY: 1 }}
                exit={{ scaleY: 1, originY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.p
                className="absolute  z-[999999999999999999999999]  inset-0 text-white flex items-center justify-center text-4xl md:text-7xl font-medium font-specify_exp_med tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {displayName}
              </motion.p>
            </motion.div>
            <motion.div className="fixed inset-0 z-[999999999999] pointer-events-none" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <motion.div
                className="absolute z-[999999999999999999] inset-0 bg-black"
                initial={{ scaleY: 1, originY: 0 }}
                animate={{ scaleY: 0, originY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.p
                className="absolute  z-[999999999999999999999]  inset-0 text-white flex items-center justify-center text-4xl md:text-7xl font-medium font-specify_exp_med tracking-wide"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
              >
                {displayName}
              </motion.p>
            </motion.div>
          </>
      }
    </>
  );
};

PageTransition.propTypes = {
  children: PropTypes.any,
  pageName: PropTypes.any
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