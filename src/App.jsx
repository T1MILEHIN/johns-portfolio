import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/navBar";

// import Loader from "./components/loader";

const Home = React.lazy(() => import("./pages/home"));

const Landing = React.lazy(() => import("./pages/ui_ux/landing"));

const Graphics = React.lazy(() => import("./pages/graphics/graphics"));

const About = React.lazy(() => import("./pages/about"));

const Experience = React.lazy(() => import("./pages/experience"));

const Contact = React.lazy(() => import("./pages/contact"));


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
        </Routes>
      </AnimatePresence >
    </>
  )
}

export default App
