import {
    Table,
    TableCell,
    TableHead,
    TableHeader,
    TableFooter,
    TableRow,
} from "@/components/ui/table";
import software from '../../assets/images/softwares.png'
import Work from "./components/work";
import WorkMobile from "./components/workMobile";
import tesOne from "../../assets/images/profile.png"
import Footer from "../../components/footer";
import LandingProfile from "../../components/landingProfile";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollSlide from "./components/scrollSlide";
import HoverEffect from "../../components/custom/hoverEffect";
import { Parallax } from 'react-scroll-parallax';
import { Link } from "react-router-dom";
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { fadeIn } from "../variant";

const Landing = () => {
    const testimonialRef = useRef(null)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <LandingProfile />
            <div className="lg:p-20 py-10 px-4">
                <div className="">
                    <div className="flex lg:flex-row flex-col md:gap-14 gap-20 lg:items-center overflow-hidden">
                        <motion.div variants={fadeIn("right", 0.2, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="leading-[30px] text-base lg:w-[617px]">
                            <p className="">Hi, i&apos;m <b>Johnbeloved</b>, a passionate Product designer dedicated to crafting user-centered solutions that drive engagement and success. With a keen eye for detail and a passion for innovation, I create intuitive interfaces that simplify complex interactions and elevate brand experiences.</p>
                        </motion.div>
                        <motion.div variants={fadeIn("left", 0.3, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
                            <h3 className="font-medium">Creating user-friendly experiences that spark joy</h3>
                        </motion.div>
                    </div>
                    <Parallax translateY={[10, -15]} easing={"easeInOut"} speed={5}>
                        <HoverEffect Z={70} rotationRange={20} style={{ width: "fit-content", marginLeft: "auto" }}>
                            <Link to="/about"
                                className="mt-5 ml-auto button black_hover rounded-[40px] bg-black text-white w-fit">
                                <HoverEffect Z={50} rotationRange={10} style={{ width: "fit-content" }}>
                                    <div className="button">About Me</div>
                                </HoverEffect>
                            </Link>
                        </HoverEffect>
                    </Parallax>
                </div>
                <hr className="border-[#636363] md:block hidden" />
                <div className="sm:p-2 lg:py-28 py-10 p-2 flex flex-col md:gap-48 gap-6 overflow-hidden">
                    <h1 className="md:mx-auto md:w-[1023px] font-medium">RECENT WORKS</h1>
                    <div className="md:block hidden">
                        <Table className="overflow-hidden">
                            <TableHeader>
                                <TableRow className="border-b border-[#636363]">
                                    <TableHead className="md:min-w-[400px] w-fit">CLIENT</TableHead>
                                    <TableHead>LOCATION</TableHead>
                                    <TableHead>SERVICES</TableHead>
                                </TableRow>
                            </TableHeader>
                            <Work category={"All"} limit={5} />
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={2}></TableCell>
                                    <TableCell className="text-right p-10">
                                        <Parallax translateY={[10, -15]} easing={"easeInOut"} speed={5}>
                                            <HoverEffect Z={70} rotationRange={20} style={{ width: "fit-content", marginLeft: "auto" }}>
                                                <Link to="/allprojects" className="ml-auto button black_hover rounded-[40px] bg-black text-white">
                                                    <HoverEffect Z={50} rotationRange={10} style={{ width: "fit-content" }}>
                                                        <div className="button">More Works</div>
                                                    </HoverEffect>
                                                </Link>
                                            </HoverEffect>
                                        </Parallax>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                    <div className="md:hidden block">
                        <WorkMobile category={"All"} slice={4} />
                        <Parallax translateY={[10, -15]} easing={"easeInOut"} speed={5}>
                            <HoverEffect Z={70} rotationRange={20} style={{ width: "fit-content", margin: "0 auto" }}>
                                <Link to="/allprojects" className="button black_hover rounded-[40px] bg-black text-white">
                                    <HoverEffect Z={50} rotationRange={10} style={{ width: "fit-content" }}>
                                        <div className="button">More Works</div>
                                    </HoverEffect>
                                </Link>
                            </HoverEffect>
                        </Parallax>
                    </div>
                </div>
            </div>
            <ScrollSlide />
            <div>
                <div className="text-center md:pt-10 flex flex-col gap-2">
                    <h1 className="font-bold text-2xl md:text-3xl">SoftWares</h1>
                    <p className="font-specify_exp_med text-xs">Here are the softwares i’m proficient in</p>
                </div>
                <div className="p-4 my-32 relative flex size-full mx-auto max-w-3xl items-center justify-center overflow-hidden bg-background">
                    <img src={software} className="w-full" alt="" />
                </div>
            </div>

            <div className="relative z-[999999999] bg-bodybg p-4">
                <div className="text-center py-10">
                    <h1 className="font-bold uppercase text-2xl md:text-3xl">Testimonials</h1>
                </div>
                <div className="md:hidden block py-10">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div>
                                <p className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">01</p>
                                <div className="py-6 md:py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <img src={tesOne} alt="" className="w-10" />
                                        <div className="flex flex-col gap-1 text-sm">
                                            <p className="font-bold">John Doe</p>
                                            <p className="text-[#636363] text-xs">CEO, XYZ Corporation</p>
                                        </div>
                                    </div>
                                    <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px]">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="origin-center bg-bodybg">
                                <p className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">02</p>
                                <div className="py-6 md:py-12 border-t-2 border-b border-[#C6C3C3] flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <img src={tesOne} alt="" className="w-10" />
                                        <div className="flex flex-col gap-1 text-sm">
                                            <p className="font-bold">John Doe</p>
                                            <p className="text-[#636363] text-xs">CEO, XYZ Corporation</p>
                                        </div>
                                    </div>
                                    <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px]">Johnbeloved optimized our website for conversions with their UI/UX expertise. Their graphics captured our brand essence perfectly. Highly recommended for any design project.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <p className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">03</p>
                                <div className="py-6 md:py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <img src={tesOne} alt="" className="w-10" />
                                        <div className="flex flex-col gap-1 text-sm">
                                            <p className="font-bold">John Doe</p>
                                            <p className="text-[#636363] text-xs">Founder; Tech Startup Co</p>
                                        </div>
                                    </div>
                                    <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px]">Johnbeloved Designs boosted our platform&apos;s engagement significantly. His ability to execute complex concepts sets him apart. A designer who delivers results.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <motion.div ref={testimonialRef} className="md:flex hidden justify-center items-center flex-wrap lg:flex-nowrap gap-16 md:gap-10 md:p-20">
                    <motion.div>
                        <motion.p variants={fadeIn("right", 0.1, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">01</motion.p>
                        <motion.div variants={fadeIn("down", 0.2, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="py-6 md:py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-[#636363] text-xs">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px]">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </motion.div>
                    </motion.div>
                    <motion.div className="origin-center bg-bodybg">
                        <motion.p variants={fadeIn("right", 0.2, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">02</motion.p>
                        <motion.div variants={fadeIn("down", 0.3, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="py-6 md:py-12 border-t-2 border-b border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-[#636363] text-xs">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px]">Johnbeloved optimized our website for conversions with their UI/UX expertise. Their graphics captured our brand essence perfectly. Highly recommended for any design project.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div>
                        <motion.p variants={fadeIn("right", 0.3, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">03</motion.p>
                        <motion.div variants={fadeIn("down", 0.4, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="py-6 md:py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-[#636363] text-xs">Founder; Tech Startup Co</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px]">Johnbeloved Designs boosted our platform&apos;s engagement significantly. His ability to execute complex concepts sets him apart. A designer who delivers results.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}

export default Landing