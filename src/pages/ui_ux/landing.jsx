import {
    Table,
    TableCell,
    TableHead,
    TableHeader,
    TableFooter,
    TableRow,
} from "@/components/ui/table";
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
import { Link } from "react-router-dom";

const Landing = () => {
    const testimonialRef = useRef(null)
    return (
        <div>
            <div className="px-2 md:px-20 lg:pt-36 pt-60 pb-0 relative">
                <LandingProfile />
            </div>
            <div className="lg:p-20 py-10 px-4">
                <div className="">
                    <div className="flex lg:flex-row flex-col md:gap-14 gap-20 lg:items-center">
                        <motion.div  initial={{x: -200, opacity: 0}} whileInView={{x:0, opacity: 1}} viewport={{ once: true, amount: 0.5}} transition={{ type: "spring", duration: 0.7}} className="leading-[30px] text-base lg:w-[617px]">
                            <p>Hi, i&apos;m <b>Johnbeloved</b>, a passionate Product designer dedicated to crafting user-centered solutions that drive engagement and success. With a keen eye for detail and a passion for innovation, I create intuitive interfaces that simplify complex interactions and elevate brand experiences.</p>
                        </motion.div>
                        <motion.div  initial={{x: 200, opacity: 0}} whileInView={{x:0, opacity: 1}} viewport={{ once: true, amount: 0.5}} transition={{ type: "spring", duration: 0.7, delay: 0.2}}>
                            <h3 className="font-medium">Creating user-friendly experiences that spark joy</h3>
                        </motion.div>
                    </div>
                    <Parallax translateY={[20, -20]}>
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
                            <Work category={"All"} />
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={2}></TableCell>
                                    <TableCell className="text-right p-10">
                                        <Parallax translateY={[10, -10]}>
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
                <div className="p-10 my-32 relative flex size-full mx-auto max-w-3xl items-center justify-center overflow-hidden bg-background">
                    {/* <IconCloud iconSlugs={slugs} customIcons={customIcons} /> */}
                    {/* <CloudSpin /> */}
                    <img src={software} alt="" />
                </div>
            </div>

            <div className="relative z-[999999999] bg-bodybg p-4">
                <div className="text-center py-10">
                    <h1 className="font-bold uppercase">Testimonials</h1>
                </div>
                <motion.div ref={testimonialRef} className="flex justify-center items-center flex-wrap md:flex-nowrap gap-10 md:p-20">
                    <motion.div>
                        <p className="text-[#C6C3C3] font-bold text-sm py-2">01</p>
                        <div className="py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-[#636363] text-xs">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="font-normal text-darkbg leading-7 text-[12px]">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </motion.div>
                    <motion.div className="origin-center bg-bodybg">
                        <p className="text-[#C6C3C3] font-bold text-sm py-2">02</p>
                        <div className="py-12 border-t-2 border-b border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-[#636363] text-xs">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="font-normal text-darkbg leading-7 text-[12px]">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </motion.div>
                    <motion.div>
                        <p className="text-[#C6C3C3] font-bold text-sm py-2">03</p>
                        <div className="py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-[#636363] text-xs">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="font-normal text-darkbg leading-7 text-[12px]">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}

export default Landing