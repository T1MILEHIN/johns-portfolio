import { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import profile_pic from "../assets/images/profile.png";

const LandingProfile = () => {
    const { pathname } = useLocation()
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-70%", "0%"]);

    return (
        <div ref={targetRef} className="">
            <img className="w-full md:w-[700px] lg:w-[570px] mx-auto object-cover" src={profile_pic} alt="" />
            <div className="overflow-hidden md:w-[300px] cursor-pointer font-light absolute top-3/4 md:top-1/2 -translate-y-1/2 md:right-44 text-center flex flex-col gap-3 group">
                <div className="flex">
                    <motion.p transition={{type: 'spring'}} style={{ x }} className="whitespace-nowrap md:text-base text-8xl font-bold md:text-black md:font-normal relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-[10px] after:bg-[#263238] group-hover:after:bg-blue group-hover:after:w-3 after:duration-300 duration-300">Oluwawole Johnbeloved Ayomide</motion.p>
                    <motion.p transition={{type: 'spring'}} style={{ x }} className="whitespace-nowrap md:text-base text-8xl font-bold md:text-black md:font-normal relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-[10px] after:bg-[#263238] group-hover:after:bg-blue group-hover:after:w-3 after:duration-300 duration-300">Oluwawole Johnbeloved Ayomide</motion.p>
                </div>
                        <AnimatePresence mode="">
                            {pathname === "/" ? (
                                <motion.p
                                    key="product-designer"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="font-medium text-sm"
                                >
                                    Product Designer
                                </motion.p>
                            ) : (
                                <motion.p
                                    key="graphics-designer"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="font-medium text-sm"
                                >
                                    Graphics Designer
                                </motion.p>
                            )}
                        </AnimatePresence>
            </div>
            <hr className="border-[#636363]" />
        </div>
    )
}

export default LandingProfile