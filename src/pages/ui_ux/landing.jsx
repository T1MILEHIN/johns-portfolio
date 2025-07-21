import {
    Table,
    TableCell,
    TableHead,
    TableHeader,
    TableFooter,
    TableRow,
} from "@/components/ui/table";
import software from '../../assets/images/softwares.png';
import Work from "./components/work";
import WorkMobile from "./components/workMobile";
import LandingProfile from "../../components/landingProfile";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ScrollSlide from "./components/scrollSlide";
import Testimonial from "./components/testimonial";
import HoverEffect from "../../components/custom/hoverEffect";
import { Parallax } from 'react-scroll-parallax';
import { Link } from "react-router-dom";
import { fadeIn } from "../variant";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ReactPlayer from 'react-player'

const words = `Hi, i'm Johnbeloved, a passionate Product designer dedicated to crafting user-centered solutions that drive engagement and success. With a keen eye for detail and a passion for innovation, I create intuitive interfaces that simplify complex interactions and elevate brand experiences`

const Landing = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <LandingProfile />
            <div className="lg:p-20 py-10 px-4">
                <div className="">
                    <div className="flex lg:flex-row flex-col md:gap-14 gap-20 lg:items-center overflow-hidden">
                        <motion.div variants={fadeIn("right", 0.2, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="leading-[30px] text-base lg:w-[617px]">
                            <TextGenerateEffect duration={0.5} filter={false} words={words} />
                        </motion.div>
                        <motion.div variants={fadeIn("left", 0.3, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
                            <h3 className="font-medium">Creating user-friendly experiences that spark joy</h3>
                        </motion.div>
                    </div>
                    <Parallax translateY={[5, -30]} easing={"easeInOut"} speed={10}>
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
                            <Work category={"All"} limit={6} />
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
                        <Parallax translateY={[5, -30]} easing={"easeInOut"} speed={5}>
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
            <Testimonial />

            <div className="bg-white lg:pt-20 pb-32 lg:pb-[300px] overflow-hidden">
                <h1 className="text-center font-bold text-2xl md:text-3xl my-10">MY UI/UX TUTORIALS</h1>
                <div className="">
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?si=AFF4y0vIFeGIWYWj&v=bAXwbnLLVSQ&feature=youtu.be'
                        width='100%'
                        height='500px'
                        controls={true}
                    />
                </div>
            </div>
        </>
    )
}

export default Landing;