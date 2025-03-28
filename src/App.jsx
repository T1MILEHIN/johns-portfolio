import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/navBar";

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

function App() {
  const location = useLocation()
  return (
    <>
      <NavBar />
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
          <Route path='/alldesigns' element={<AllDesigns />}>
            <Route index element={<FlyerDesigns />} />
            <Route path='logodesigns' element={<LogoDesigns />} />
          </Route>
          <Route path='/projects/:project' element={<SingleProject />} />
        </Routes>
      </AnimatePresence >
    </>
  )
}

export default App
