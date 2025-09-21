import { motion } from "framer-motion";
import HoverEffect from "../../../components/custom/hoverEffect";
import { Flyers } from "../../../utils/flyers";
import { Link } from "react-router-dom";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible:(i)=> ({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 200, duration: 0.5, delay: i * 0.2 } })
};

const FlyersDisplay = () => {
    const images = Flyers.home
    return (
        <div
            className="md:p-20 p-4 py-20 bg-white">
            <h1 className="md:text-center mx-auto lg:w-[1023px] font-mediumn font-bold">GRAPHICS DESIGN</h1>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="md:py-20 py-5">
                <motion.div className="grid gap-3 lg:grid-cols-5 md:grid-cols-2 grid-cols-1">
                    {images.map((image, index) => index < 5 && (
                        <motion.div custom={index} key={index} variants={imageVariants}>
                            <img key={index} src={image} className="w-full aspect-square" />
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
                    <motion.div custom={index} key={index} variants={imageVariants}>
                        <img key={index} src={image} className="w-full aspect-square" />
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
                {images.map((image, index) => index > 9 && index < 15 && (
                    <motion.div custom={index} key={index} variants={imageVariants}>
                        <img key={index} src={image} className="w-full aspect-square" />
                    </motion.div>
                ))}
                </motion.div>
            </motion.div>
            <HoverEffect Z={30} rotationRange={20} style={{ width: "fit-content", margin: "0 auto" }}>
                <motion.div
                    className="ml-auto button black_hover rounded-[40px] bg-black text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <HoverEffect Z={30} rotationRange={15} style={{ width: "fit-content" }}>
                        <Link to="/alldesigns" className="button">More Works</Link>
                    </HoverEffect>
                </motion.div>
            </HoverEffect>
        </div>
    )
}

export default FlyersDisplay;