import { useState } from "react";
import {
    Table,
    TableCell,
    TableHead,
    TableHeader,
    TableFooter,
    TableRow,
} from "@/components/ui/table";
import IconCloud from "@/components/ui/icon-cloud";
import software from '../../assets/images/software.svg'
import Work from "./components/work";
import WorkMobile from "./components/workMobile";
import tesOne from "../../assets/images/profile.png"
import Footer from "../../components/footer";
import LandingProfile from "../../components/landingProfile";
import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollSlide from "./components/scrollSlide";
import HoverEffect from "../../components/custom/hoverEffect";
import { Parallax } from 'react-scroll-parallax';
import { FactoryIcon } from "lucide-react";

import { FaReact, FaNodeJs } from "react-icons/fa";

// const customIcons = [
//   <FaReact key="react" size={42} />,
//   <FaNodeJs key="node" size={42} />,
//   <FactoryIcon key="fact" size={42} />,
// ];

// const slugs = ["androidstudio", "figma", "tailwindcss"];


const Landing = () => {
    const [selected, setSelected] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dir, setDir] = useState(null);
    const handleSetSelected = (val) => {
        if (typeof val === "number" && typeof selected === "number") {
            const direction = selected > val ? "u" : "d"; // Determine the direction
            setDir(direction);
    
            setCurrentSlide((prev) => {
                if (direction === "d") {
                    return prev + 1;
                } else if (direction === "u") {
                    return prev - 1;
                }
                return prev;
            });
        } else if (val === null) {
            setDir(null);
        }
    
        setSelected(val);
    };
    const testimonialRef = useRef(null)
    return (
        <div>
            <div className="px-2 md:px-20 md:pt-36 relative">
                <LandingProfile />
            </div>
            <div className="lg:px-20 px-2">
                <div className="lg::p-20 px-2 py-10">
                    <div className="flex lg:flex-row flex-col md:gap-14 gap-20 items-center">
                        <div className="leading-[30px] text-base lg:w-[617px]">
                            <p>Hi, i&apos;m <b>Johnbeloved</b>, a passionate Product designer dedicated to crafting user-centered solutions that drive engagement and success. With a keen eye for detail and a passion for innovation, I create intuitive interfaces that simplify complex interactions and elevate brand experiences.</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Creating user-friendly experiences that spark joy</h3>
                        </div>
                    </div>
                    <Parallax translateY={[20, -20]}>
                        <HoverEffect Z={100} rotationRange={20} style={{ width: "fit-content", marginLeft: "auto" }}>
                            <div
                                className="mt-5 ml-auto button black_hover rounded-[40px] bg-black text-white w-fit">
                                <HoverEffect Z={100} rotationRange={30} style={{ width: "fit-content" }}>
                                    <div className="button">About Me</div>
                                </HoverEffect>
                            </div>
                        </HoverEffect>
                    </Parallax>
                </div>
                <hr className="border-[#636363]" />
                <div className="sm:p-2 lg:py-28 py-10 p-2 flex flex-col gap-48 overflow-hidden">
                    <h1 className="mx-auto lg:w-[1023px] font-medium">RECENT WORKS</h1>
                    <div className="md:block hidden">
                        <Table className="overflow-hidden">
                            <TableHeader>
                                <TableRow className="border-b border-[#636363]">
                                    <TableHead className="md:min-w-[400px] w-fit">CLIENT</TableHead>
                                    <TableHead>LOCATION</TableHead>
                                    <TableHead>SERVICES</TableHead>
                                </TableRow>
                            </TableHeader>
                            <Work
                                dir={dir}
                                setDir={setDir}
                                currentSlide={currentSlide}
                                setCurrentSlide={setCurrentSlide}
                                selected={selected}
                                setSelected={setSelected}
                                handleSetSelected={handleSetSelected} />
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={2}></TableCell>
                                    <TableCell className="text-right p-10">
                                        <Parallax translateY={[20, -20]}>
                                            <HoverEffect Z={100} rotationRange={20} style={{ width: "fit-content", marginLeft: "auto" }}>
                                                <div className="ml-auto button black_hover rounded-[40px] bg-black text-white">
                                                    <HoverEffect Z={100} rotationRange={30} style={{ width: "fit-content" }}>
                                                        <div className="button">More Works</div>
                                                    </HoverEffect>
                                                </div>
                                            </HoverEffect>
                                        </Parallax>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                    <div className="md:hidden block">
                        <WorkMobile />
                    </div>
                </div>
            </div>
            <ScrollSlide />
            <div>
                <div className="text-center md:pt-10">
                    <h1 className="font-bold">SoftWares</h1>
                    <p>Here are the softwares i’m proficient in</p>
                </div>
                <div className="my-32 relative flex size-full mx-auto max-w-3xl items-center justify-center overflow-hidden bg-background">
                    {/* <IconCloud iconSlugs={slugs} customIcons={customIcons} /> */}
                    {/* <CloudSpin /> */}
                    <img src={software} alt="" />
                </div>
            </div>

            <div className="relative z-[999999999] bg-bodybg">
                <div className="text-center py-10">
                    <h1 className="font-bold uppercase">Testimonials</h1>
                </div>
                <motion.div ref={testimonialRef} className="flex justify-center items-center flex-wrap md:flex-nowrap gap-10 md:p-20 p-2">
                    <motion.div>
                        <p className="text-[#C6C3C3] font-bold text-sm py-2">01</p>
                        <div className="py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="text-sm">
                                    <p>John Doe</p>
                                    <p className="text-[#636363]">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-7 text-xs">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </motion.div>
                    <motion.div className="origin-center bg-bodybg">
                        <p className="text-[#C6C3C3] font-bold text-sm py-2">02</p>
                        <div className="py-12 border-t-2 border-b border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="text-sm">
                                    <p>John Doe</p>
                                    <p className="text-[#636363]">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-7 text-xs">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </motion.div>
                    <motion.div>
                        <p className="text-[#C6C3C3] font-bold text-sm py-2">03</p>
                        <div className="py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="text-sm">
                                    <p>John Doe</p>
                                    <p className="text-[#636363]">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-7 text-xs">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}

export default Landing