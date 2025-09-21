import React, { useRef, useMemo, Suspense, useCallback } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import PropTypes from 'prop-types';
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

const Home = React.lazy(() => import("./pages/home"));
const Landing = React.lazy(() => import("./pages/ui_ux/landing"));
const Graphics = React.lazy(() => import("./pages/graphics/graphics"));
const About = React.lazy(() => import("./pages/about"));
const Experience = React.lazy(() => import("./pages/experience"));
const Contact = React.lazy(() => import("./pages/contact"));
const AllProjects = React.lazy(() => import("./pages/allProjects"));
const AllDesigns = React.lazy(() => import("./pages/allGraphics/allGraphics"));
const FlyerDesigns = React.lazy(() => import("./pages/allGraphics/flyerDesigns"));
const LogoDesigns = React.lazy(() => import("./pages/allGraphics/logoDesigns"));
const SingleProject = React.lazy(() => import("./pages/singleProject"));
const Clearwork = React.lazy(() => import("./pages/caseStudy/components/clearwork"));
const CaseStudyPage = React.lazy(() => import("./pages/caseStudy/caseStudypage"));

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
      <p className="text-sm text-gray-600">Loading...</p>
    </div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Route loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-2">Something went wrong</h2>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-black text-white rounded"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const location = useLocation();
  const footerRef = useRef(null);

  // Optimized Lenis configuration based on device and route
  const lenisOptions = useMemo(() => {
    const isMobile = window.innerWidth <= 768;
    const isProjectPage = location.pathname.startsWith("/projects");
    
    return {
      lerp: isMobile ? 0.06 : 0.08, // Slightly slower on mobile for better touch control
      duration: 1.2,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: !isProjectPage, // Disable smooth touch on project pages if needed
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      infinite: false,
    };
  }, [location.pathname]);

  // Scroll-based animations for footer
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Optimized transforms with better spring configuration
  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const smoothY = useSpring(y, { 
    stiffness: 200, 
    damping: 30,
    mass: 0.8
  });

  const radius = useTransform(scrollYProgress, [0, 1], [400, 0]);
  const smoothRadius = useSpring(radius, { 
    stiffness: 180, 
    damping: 25,
    mass: 0.6
  });

  // Memoized background class calculation
  const backgroundClass = useMemo(() => {
    const pathClasses = {
      '/': '',
      '/contact': 'bg-darkbg',
      '/about': 'bg-white',
      '/graphics': 'bg-bodybg',
      '/alldesigns/logodesigns': 'bg-black'
    };
    
    return pathClasses[location.pathname] || '';
  }, [location.pathname]);

  // Check if footer should be shown
  const shouldShowFooter = useMemo(() => 
    !location.pathname.startsWith("/projects") && 
    location.pathname !== "/clearwork"
  , [location.pathname]);

  // Lenis callback for debugging (optional)
  const handleLenisScroll = useCallback(() => {
    // Optional: Add scroll tracking or debugging
    // console.log('Lenis scroll:', e);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <ErrorBoundary>
      <ReactLenis 
        root 
        options={lenisOptions}
        onScroll={handleLenisScroll}
      >
        <NavBar />
        
        <div className="relative">
          <motion.div 
            style={{ 
              borderBottomRightRadius: smoothRadius, 
              borderBottomLeftRadius: smoothRadius 
            }}
            className={`${backgroundClass} relative overflow-hidden transition-colors duration-500`}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <AnimatePresence mode="wait">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes location={location} key={location.pathname}>
                  <Route path='/' element={<Home />}>
                    <Route index element={<Landing />}/>
                    <Route path='/graphics' element={<Graphics />} />
                  </Route>
                  <Route path='/about' element={<About />} />
                  <Route path='/experience' element={<Experience />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/allprojects' element={<AllProjects />} />
                  <Route path='/case-study' element={<CaseStudyPage />} />
                  <Route path="/clearwork" element={<Clearwork />} />
                  <Route path='/alldesigns' element={<AllDesigns />}>
                    <Route index element={<FlyerDesigns />} />
                    <Route path='logodesigns' element={<LogoDesigns />} />
                  </Route>
                  <Route path='/projects/:project' element={<SingleProject />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </motion.div>
        </div>

        {shouldShowFooter && (
          <Footer 
            footerRef={footerRef} 
            smoothY={smoothY} 
          />
        )}
      </ReactLenis>
    </ErrorBoundary>
  );
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;