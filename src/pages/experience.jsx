/* eslint-disable react-refresh/only-export-components */
import color from "../assets/images/EXP/color.jpg";
import nip from "../assets/images/EXP/nip.jpg";
import codar from "../assets/images/EXP/codar.jpg";
import kw from "../assets/images/EXP/kw.jpg";
import clearwage from "../assets/images/EXP/clearwage.jpg";
import promo from "../assets/images/EXP/promo.jpg";
import Footer from "../components/footer";
import transition from "../transition";
import { motion } from "framer-motion";

const EXP = [
    {
        id: 1,
        image: color,
        date: '2023- 2023',
        job: 'UI/UX DESIGNER INTERN',
        location: 'COLORFI, NEWYORK USA.',
        description: 'As a UI/UX intern in Colorfi, i assists in user interface and experience design, contributing to projects, learning design principles, and gaining practical experience.'
    },
    {
        id: 2,
        image: nip,
        date: '2023- 2023',
        job: 'uI Designer & GRAPHICS DESIGNER',
        location: 'NUPIUM CONSULTATION, INDIA.',
        description: 'as a UI Designer/ Graphics Designer in Nupium, i design interfaces such as website, flyers  designs and more.'
    },
    {
        id: 3,
        image: codar,
        date: '2023 - present',
        job: 'uI Designer & GRAPHICS DESIGNER',
        location: 'CODAR INSTITUTE, LAGOS NIG.',
        description: 'I empower designers as a UI/UX and Graphics Design instructor, teaching intuitive design principles and visual storytelling techniques expertly.'
    },
    {
        id: 4,
        image: kw,
        date: '2023 - present',
        job: 'PRODUCT DESIGNER',
        location: 'KWE4 AFRICA, LAGOS NIG.',
        description: 'Product Designer at KWE4 Africa, driving user-centered innovation, crafting intuitive UI/UX, and leading cross-functional teams to deliver impactful digital solutions.'
    },
    {
        id: 5,
        image: clearwage,
        date: '2024 - present',
        job: 'LEAD PRODUCT DESIGNER',
        location: 'CLEARWAGE LIMITED, UNITED KINGDOM.',
        description: 'As Lead Product Designer at ClearWage, I spearhead innovative design solutions, driving user-centric product development and business growth strategies.'
    },
    {
        id: 6,
        image: promo,
        date: '2024 - present',
        job: 'PRODUCT DESIGNER & GRAPHICS DESIGNER',
        location: 'MYPROMOSPHERE LIMITED, NIGERIA.',
        description: 'Highly skilled Product Designer & Graphic Designer, crafting intuitive user experiences and visually stunning designs. Successfully designed innovative products for mypromosphere, showcasing expertise in UI/UX and visual storytelling.'
    },
]

const Experience = () => {
    return (
        <div>
            <div className="md:px-20 md:pb-40 pt-40 p-4 bg-bodybg">
                <div className="md:px-20">
                    <h1 className="specify-light leading-[60px] lg:leading-[70px] text-4xl lg:text-[70px] w-full lg:w-[819px] tracking-tighter"><span className="font-semibold">5</span> Years Background Experience in Designing</h1>
                </div>
                <div className="relative text-right mx-auto mt-20 md:py-0">
                    <button className="absolute right-20 top-1/2 -translate-y-1/2 z-10 button blue_black_hover rounded-[40px] bg-blue text-white w-fit">Get In Touch</button>
                    <hr className="z-[2] w-full border-[#636363]"></hr>
                </div>
                <div className="py-48">
                    <h1 className="specify-light text-[40px] font-medium lg:w-804px md:my-5">Firms I worked with of recent</h1>
                    <div>
                        {EXP.map((exp) => 
                        {
                        return (
                            <motion.div key={exp.id} className="overflow-hidden md:pt-20 md:px-20 flex md:flex-row flex-col md:items-center gap-10 border border-b-[#636363]">
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="font-bold text-[15px] flex flex-col">
                                        <p className="uppercase">{exp.date}</p>
                                        <p className="uppercase">{exp.job}</p>
                                        <p className="uppercase">{exp.location}</p>
                                    </div>
                                    <p className="text-[15px] md:w-[464px] md:leading-7 leading-[20px]">As a UI/UX intern in Colorfi, i assists in user interface and experience design, contributing to projects, learning design principles, and gaining practical experience.</p>
                                </div>
                                <motion.img initial={{y:300}} whileInView={{y:0}} transition={{duration: 0.3, type: 'spring'}} viewport={{once: true}} src={exp.image} className="lg:w-[385px] object-cover " alt="" />
                            </motion.div>
                        )})}
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default transition(Experience);