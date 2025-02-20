import { motion } from "framer-motion";
import HoverEffect from "../../../components/custom/hoverEffect";
import { Flyers } from "../../../utils/works";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.5,
        },
    },
};

const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible:(i)=> ({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 200, duration: 0.5, delay: i * 0.2 } })
};

const FlyersDisplay = () => {
    const images = Flyers.slice(0, 15)
    return (
        <div
            className="md:p-20 p-4">
            <h1 className="text-center mx-auto lg:w-[1023px] font-mediumn font-bold">GRAPHICS DESIGN</h1>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="md:py-20 py-5">
                <motion.div className="grid gap-3 lg:grid-cols-5 md:grid-cols-2 grid-cols-1">
                    {Flyers.map((image, index) => index < 5 && (
                        <motion.div custom={index} key={image.id} variants={imageVariants}>
                            <LazyLoadImage threshold={100} visibleByDefault={false} effect="blur" loading="lazy" className="w-full aspect-square object-cover" src={image.image} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="md:py-20 py-5">
                <motion.div className="grid gap-3 lg:grid-cols-5 md:grid-cols-2 grid-cols-1">
                {images.map((image, index) => (index > 4 && index < 10) && (
                    <motion.div custom={index} key={image.id} variants={imageVariants}>
                        <LazyLoadImage threshold={100} visibleByDefault={false} effect="blur" className="w-full aspect-square object-cover" src={image.image} alt="" />
                    </motion.div>
                ))}
                </motion.div>
            </motion.div>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="md:py-20 py-5">
                <motion.div className="grid gap-3 lg:grid-cols-5 md:grid-cols-2 grid-cols-1">
                {images.map((image, index) => index > 9 && (
                    <motion.div custom={index} key={image.id} variants={imageVariants}>
                        <LazyLoadImage effect="blur" className="w-full aspect-square object-cover" src={image.image} alt="" />
                    </motion.div>
                ))}
                </motion.div>
            </motion.div>
            <HoverEffect Z={50} rotationRange={20} style={{ width: "fit-content", margin: "0 auto" }}>
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
    )
}

export default FlyersDisplay;