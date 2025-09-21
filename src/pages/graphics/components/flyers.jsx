import { motion } from "framer-motion";
import { useMemo, useState, useCallback } from "react";
import HoverEffect from "../../../components/custom/hoverEffect";
import { Flyers } from "../../../utils/flyers";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const imageVariants = {
    hidden: { 
        x: -60, 
        opacity: 0,
        scale: 0.9
    },
    visible: (i) => ({ 
        x: 0, 
        opacity: 1,
        scale: 1,
        transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.6,
            delay: (i % 5) * 0.1 
        } 
    })
};


const OptimizedImage = ({ src, index, alt = "Graphics design" }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        setHasError(true);
        console.warn(`Failed to load image: ${src}`);
    }, [src]);

    // Check if image is Cloudinary URL and optimize it
    const optimizedSrc = useMemo(() => {
        if (src.includes('cloudinary.com')) {
            // Add Cloudinary optimizations
            return src.replace('/upload/', '/upload/f_auto,q_auto:good,w_800,h_800,c_fill,ar_1:1/');
        }
        return src;
    }, [src]);

    if (hasError) {
        return (
            <div className="w-full aspect-square bg-gray-100 flex items-center justify-center rounded-lg">
                <span className="text-gray-400 text-sm">Image unavailable</span>
            </div>
        );
    }

    return (
        <motion.div
            custom={index}
            variants={imageVariants}
            className="group relative overflow-hidden rounded-lg bg-gray-100"
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
        >
            <img 
                src={optimizedSrc}
                alt={`${alt} ${index + 1}`}
                className={`w-full aspect-square object-cover transition-all duration-500 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                } group-hover:scale-110`}
                loading={index < 5 ? "eager" : "lazy"} // Eager load first row
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
            />
            
            {/* Loading placeholder */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
            )}
        </motion.div>
    );
};

// Grid Row Component for better organization
const GridRow = ({ images, startIndex, endIndex, rowIndex }) => {
    const rowImages = useMemo(() => 
        images.slice(startIndex, endIndex + 1), 
        [images, startIndex, endIndex]
    );

    if (rowImages.length === 0) return null;

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ 
                once: true, 
                margin: "-50px 0px" // Start animation earlier
            }}
            className="md:py-10 py-5"
        >
            <motion.div className="grid gap-3 lg:grid-cols-5 md:grid-cols-2 grid-cols-1">
                {rowImages.map((image, index) => (
                    <OptimizedImage
                        key={`${rowIndex}-${startIndex + index}`}
                        src={image}
                        index={startIndex + index}
                        alt="Graphics design work"
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

// Memoized Button Component
const ViewMoreButton = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10 flex justify-center"
    >
        <HoverEffect Z={30} rotationRange={20} style={{ width: "fit-content" }}>
            <motion.div
                className="button black_hover rounded-[40px] bg-black text-white px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <HoverEffect Z={30} rotationRange={15} style={{ width: "fit-content" }}>
                    <Link 
                        to="/alldesigns" 
                        className="button text-white font-medium"
                        aria-label="View more graphics design works"
                    >
                        More Works
                    </Link>
                </HoverEffect>
            </motion.div>
        </HoverEffect>
    </motion.div>
);

const FlyersDisplay = () => {
    const images = useMemo(() => Flyers.home || [], []);
    
    // Define grid configuration
    const gridConfig = useMemo(() => [
        { start: 0, end: 4, id: 'row-1' },
        { start: 5, end: 9, id: 'row-2' },
        { start: 10, end: 14, id: 'row-3' }
    ], []);

    // Early return if no images
    if (!images.length) {
        return (
            <div className="md:p-20 p-4 py-20 bg-white text-center">
                <h1 className="md:text-center mx-auto lg:w-[1023px] font-bold mb-8">
                    GRAPHICS DESIGN
                </h1>
                <p className="text-gray-500">No designs available at the moment.</p>
            </div>
        );
    }

    return (
        <section 
            className="md:p-20 p-4 py-20 bg-white"
            aria-label="Graphics Design Portfolio"
        >

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
            >
                <h1 className="md:text-center mx-auto lg:w-[1023px] font-bold text-2xl md:text-4xl lg:text-5xl">
                    GRAPHICS DESIGN
                </h1>
            </motion.div>

            {gridConfig.map((config, index) => (
                <GridRow
                    key={config.id}
                    images={images}
                    startIndex={config.start}
                    endIndex={config.end}
                    rowIndex={index}
                />
            ))}

            <ViewMoreButton />
        </section>
    );
};

OptimizedImage.propTypes = {
    src: PropTypes.any,
    index: PropTypes.any,
    alt: PropTypes.any,
};

GridRow.propTypes = {
    images: PropTypes.any,
    startIndex: PropTypes.any,
    endIndex: PropTypes.any,
    rowIndex: PropTypes.any,
};

export default FlyersDisplay;