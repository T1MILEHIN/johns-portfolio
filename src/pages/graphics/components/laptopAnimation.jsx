import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import laptop from "../../../assets/images/laptop.png"
import img1 from "../../../assets/images/clearwage/1.jpg"
import img2 from "../../../assets/images/clearwage/2.svg"
import img3 from "../../../assets/images/clearwage/3.png";
import img4 from "../../../assets/images/GadCare/1.svg";
import img5 from "../../../assets/images/moises/1.svg";
import img6 from "../../../assets/images/moises/2.svg";
import img7 from "../../../assets/images/moises/3.svg";
import HoverEffect from "../../../components/custom/hoverEffect";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Section = ({ isInView, laptopImg, contentImgs, title, description, reverse }) => {
    return (
        <div className="py-20 flex flex-col gap-8">
            <motion.div className="mx-auto w-fit relative">
                <img src={laptopImg} alt="Laptop" className="md:w-[677px] w-full mx-auto border-2" />
                <div className="bg-bodybg overflow-hidden grid place-content-center absolute sm:top-5 top-2 sm:right-20 right-10 sm:bottom-14 bottom-5 sm:left-20 left-10">
                    <div className="flex gap-5 items-center">
                        {contentImgs.map((img, index) => reverse ? (
                            <motion.img
                                key={index}
                                src={img.src}
                                alt={`Animation ${index}`}
                                animate={
                                    isInView
                                        ? img.animate
                                        : {}
                                }
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className={img.className || ""}
                            />
                        )
                            :
                            (
                                <div key={index} className="flex gap-5 items-center">
                                    <motion.div className={img.className || ""}
                                        animate={
                                            isInView
                                                ? img.animate
                                                : {}
                                        }
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            repeatType: "loop",
                                        }}
                                    >
                                        {Array.from({ length: 3 }).map(() => (
                                            <motion.img
                                                key={index}
                                                src={img.src}
                                                alt={`Animation ${index}`}
                                                className={img.className || ""}
                                            />
                                        ))}
                                    </motion.div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </motion.div>
            <div className="sm:w-[450px] mx-auto md:text-center flex flex-col gap-4">
                <h2 className="font-bold md:font-medium uppercase">{title}</h2>
                <hr className="border-[#636363] md:hidden block" />
                <p className="text-base md:text-sm">{description}</p>
            </div>
        </div>
    );
};

const LaptopAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const sections = [
        {
            id: 1,
            laptopImg: laptop,
            contentImgs: [
                { src: img1, animate: { translateX: [0, -500, 0] } },
                { src: img2, animate: { scale: [1, 8, 1] }, className: "z-10" },
                { src: img3, animate: { translateX: [0, 500, 0] } },
            ],
            title: 'Clearwage Website Design',
            description: 'End-to-end Web application for Gadcare. GadCare provides product care solutions for your digital products and appliances.',
        },
        {
            id: 2,
            laptopImg: laptop,
            contentImgs: [
                { src: img4, animate: { translateY: [0, -500, 0] }, className: "flex flex-col gap-4" },
                { src: img4, animate: { scale: [1, 3.5, 1] }, className: "z-10" },
                { src: img4, animate: { translateY: [0, 500, 0] }, className: "flex flex-col gap-4" },
            ],
            title: 'GadCare Website Application',
            description: 'End-to-end Web application for Gadcare. GadCare provides product care solutions for your digital products and appliances.',
        },
        {
            id: 3,
            laptopImg: laptop,
            contentImgs: [
                { src: img5, animate: { translateX: [0, -500, 0] } },
                { src: img6, animate: { scale: [1, 8, 1] }, className: "z-10" },
                { src: img7, animate: { translateX: [0, 500, 0] } },
            ],
            title: 'Moises Mobile Application Redesign',
            description: 'Co-design of Clearwage’s Web-application. Clearwage empowers businesses with the modern tools they need.',
        },
    ];

    return (
        <div className="p-4 md:p-10 flex flex-col gap-20">
            <h1 className="mx-auto lg:w-[1023px] font-medium">RECENT WORKS</h1>
            <div ref={ref}>
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        isInView={isInView}
                        laptopImg={section.laptopImg}
                        contentImgs={section.contentImgs}
                        title={section.title}
                        description={section.description}
                        reverse={index % 2 === 0}
                    />
                ))}
            </div>
            <HoverEffect Z={50} rotationRange={20} style={{ width: "fit-content", marginLeft: "auto" }}>
                <motion.div
                    className="ml-auto button black_hover rounded-[40px] bg-black text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <HoverEffect Z={50} rotationRange={20} style={{ width: "fit-content" }}>
                        <Link to="/alldesigns" className="button">More Works</Link>
                    </HoverEffect>
                </motion.div>
            </HoverEffect>
        </div>
    );
};

Section.propTypes = {
    isInView: PropTypes.bool.isRequired,
    laptopImg: PropTypes.string.isRequired,
    contentImgs: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reverse: PropTypes.bool.isRequired,
}

export default LaptopAnimation;