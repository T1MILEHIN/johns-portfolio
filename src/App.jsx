import React, { useRef } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
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
const CaseStudy = React.lazy(() => import("./pages/caseStudy"));

function App() {
  const location = useLocation();
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const smoothY = useSpring(y, { stiffness: 300, damping: 100 });
  const radius = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const smoothRadius = useSpring(radius, { stiffness: 250, damping: 90 });
  return (
    <>
      <ReactLenis root options={{
        lerp: 0.08,
        infinite: false,
        smoothTouch: true
      }}>
        <NavBar />
        <motion.div style={{borderBottomRightRadius: smoothRadius, borderBottomLeftRadius: smoothRadius}} className={`${location.pathname === "/contact" ? "bg-darkbg" : location.pathname === "/about" ? "bg-white" : "bg-bodybg"} relative z-[99] pb-20`}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />}>
                <Route index element={<Landing />} />
                <Route path='/graphics' element={<Graphics />} />
              </Route>
              <Route path='/about' element={<About />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/allprojects' element={<AllProjects />} />
              <Route path='/case-study' element={<CaseStudy />} />
              <Route path='/alldesigns' element={<AllDesigns />}>
                <Route index element={<FlyerDesigns />} />
                <Route path='logodesigns' element={<LogoDesigns />} />
              </Route>
              <Route path='/projects/:project' element={<SingleProject />} />
            </Routes>
          </AnimatePresence >
        </motion.div>
        <Footer footerRef={footerRef} smoothY={smoothY} />
      </ReactLenis>
    </>
  )
}

export default App
