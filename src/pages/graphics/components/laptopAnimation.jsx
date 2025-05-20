import { motion } from "framer-motion";
import laptop from "../../../assets/images/laptop.png"
import logo1 from "../../../assets/images/graphics/logo1.png"
import logo2 from "../../../assets/images/graphics/logo2.png"
import logo3 from "../../../assets/images/graphics/logo3.png"
import HoverEffect from "../../../components/custom/hoverEffect";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Section = ({ laptopImg, title, logo }) => {
    return (
        <div className="py-20 flex flex-col gap-8">
            <motion.div className="mx-auto w-fit relative">
                <img src={laptopImg} alt="Laptop" className="md:w-[677px] w-full mx-auto border-2" />
                <div className="bg-black overflow-hidden grid place-content-center absolute sm:top-5 top-2 sm:right-20 right-10 sm:bottom-14 bottom-5 sm:left-20 left-10">
                    <div className="flexitems-center">
                        <motion.img
                            src={logo}
                            alt={`Animation ${logo}`}
                            className="w-32"
                        />
                    </div>
                </div>
            </motion.div>
            <div className="sm:w-[450px] mx-auto md:text-center">
                <h2 className="font-bold md:font-medium uppercase">{title}</h2>
            </div>
        </div>
    );
};

const LaptopAnimation = () => {
    
    const sections = [
        {
            id: 1,
            laptopImg: laptop,
            logo: logo1,
            title: 'CALANTHA BRAND Design',
        },
        {
            id: 2,
            laptopImg: laptop,
            logo: logo2,
            title: 'Liftme BRAND Design',
        },
        {
            id: 3,
            laptopImg: laptop,
            logo: logo3,
            title: 'Minato BRAND Design',
        },
    ];

    return (
        <div className="p-4 md:p-10 flex flex-col gap-20">
            <h1 className="mx-auto lg:w-[1023px] font-medium">RECENT WORKS</h1>
            <div>
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        laptopImg={section.laptopImg}
                        logo={section.logo}
                        title={section.title}
                        description={section.description}
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
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default LaptopAnimation;