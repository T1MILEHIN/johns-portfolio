import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { useLocation } from "react-router-dom";
import profile_pic from "../assets/images/profile.png";
import { Parallax } from 'react-scroll-parallax';

const LandingProfile = () => {
    const [dir, setDir] = useState(true);
    const { pathname } = useLocation()
    const targetRef = useRef(null);

    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous) {
            setDir(false);
        } else {
            setDir(true);
        }
    });

    return (
        <div ref={targetRef} className="relative min-h-screen flex justify-center items-end">
            <div className='overflow-hidden'>
                <Parallax translateY={[0, 10]} speed={-5} >
                    <img className="w-full md:w-[700px] lg:w-[600px] mx-auto object-cover" src={profile_pic} alt="" />
                </Parallax>
                <div className="cursor-pointer font-light ">
                    <div className="absolute inset-0 flex items-end justify-center">
                        <div className="absolute flex items-end inset-0">
                            <div className={`${dir ? "slide-left" : "slide-right"} relative flex`}>
                                <div className='block'>
                                    <span className="min-w-full whitespace-nowrap text-center inline-block text-[150px] font-specify_exp_med after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-[10px] after:bg-[#263238] group-hover:after:bg-blue group-hover:after:w-3 after:duration-300 duration-300">Oluwawole Johnbeloved Ayomide </span>
                                </div>
                                <div className='block'>
                                    <span className="min-w-full whitespace-nowrap text-center inline-block text-[150px] font-specify_exp_med after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-[10px] after:bg-[#263238] group-hover:after:bg-blue group-hover:after:w-3 after:duration-300 duration-300">Oluwawole Johnbeloved Ayomide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-2/4 md:top-1/2 -translate-y-1/2 md:right-44 right-10 text-center">
                        <AnimatePresence mode="">
                            {pathname === "/" ? (
                                <motion.p
                                    key="product-designer"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="font-medium text-sm  relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300"
                                >
                                    Product Designer
                                </motion.p>
                            ) : (
                                <motion.p
                                    key="graphics-designer"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="font-medium text-sm  relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300"
                                >
                                    Graphics Designer
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <hr className="border-[#636363]" />
            </div>
        </div>
    )
}

export default LandingProfile