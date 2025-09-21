import { useState, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import profile_pic from "../assets/images/profile.png";
import profile_pic2 from "../assets/images/mobilePic.png";
import PropTypes from 'prop-types';

const textVariants = {
    initial: { opacity: 0, x: 10 },
    animate: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    exit: { 
        opacity: 0, 
        x: -10,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
};

const SlidingText = ({ direction, children, className }) => {
    const slideClass = direction ? "slide-left" : "slide-right";
    
    return (
        <div className={`${slideClass} relative flex`}>
            <div className='block'>
                <span className={className}>
                    {children}
                </span>
            </div>
            <div className='block'>
                <span className={className}>
                    {children}
                </span>
            </div>
        </div>
    );
};

// Professional title component with route-based content
const ProfessionalTitle = ({ pathname }) => {
    const titleConfig = useMemo(() => ({
        "/": {
            key: "product-designer",
            title: "Product Designer",
            description: "Creating intuitive digital experiences"
        },
        default: {
            key: "graphics-designer", 
            title: "Graphics Designer",
            description: "Crafting visual brand identities"
        }
    }), []);

    const config = titleConfig[pathname] || titleConfig.default;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={config.key}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-center"
            >
                <p className="font-medium text-sm relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300 cursor-pointer">
                    {config.title}
                </p>
                <p className="text-xs opacity-70 mt-1 hidden md:block">
                    {config.description}
                </p>
            </motion.div>
        </AnimatePresence>
    );
};

// Optimized image component with lazy loading and error handling
const ProfileImage = ({ src, alt, className, priority = false, ...motionProps }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        setHasError(true);
        console.warn(`Failed to load profile image: ${src}`);
    }, [src]);

    if (hasError) {
        return (
            <div className={`${className} bg-gray-200 flex items-center justify-center`}>
                <span className="text-gray-400 text-sm">Image unavailable</span>
            </div>
        );
    }

    return (
        <>
            {!isLoaded && (
                <div className={`${className} bg-gray-200 animate-pulse absolute inset-0`} />
            )}
            
            <motion.img 
                src={src}
                alt={alt}
                className={`${className} transition-opacity duration-500 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
                {...motionProps}
            />
        </>
    );
};

const LandingProfile = () => {
    const [dir, setDir] = useState(true);
    const { pathname } = useLocation();
    const targetRef = useRef(null);

    const { scrollY, scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const handleScrollChange = useCallback((latest) => {
        const previous = scrollY.getPrevious();
        const threshold = 5;
        
        if (Math.abs(latest - previous) > threshold) {
            setDir(latest < previous);
        }
    }, [scrollY]);

    useMotionValueEvent(scrollY, "change", handleScrollChange);

    const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const nameOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

    const nameTextClass = useMemo(() => 
        "text-lg md:text-base min-w-full whitespace-nowrap text-center inline-block font-specify_exp_med after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-[10px] after:bg-[#263238] group-hover:after:bg-blue group-hover:after:w-3 after:duration-300 duration-300",
        []
    );

    return (
        <section 
            ref={targetRef} 
            className="relative min-h-screen flex justify-center items-end"
            aria-label="Profile introduction"
        >
            <div className='overflow-hidden w-full'>
                <div className='relative overflow-hidden'>
                    <ProfileImage
                        src={profile_pic}
                        alt="Oluwawole Johnbeloved Ayomide - Professional profile photo"
                        className="md:block hidden w-full md:w-[700px] lg:w-[600px] mx-auto object-cover"
                        priority={true}
                    />
                    
                    <ProfileImage
                        src={profile_pic2}
                        alt="Oluwawole Johnbeloved Ayomide - Mobile profile photo"
                        className="origin-bottom md:hidden block w-full md:w-[700px] lg:w-[600px] mx-auto object-cover"
                        style={{ opacity, scale }}
                        priority={true}
                    />
                </div>

                <motion.div 
                    className="cursor-pointer font-light"
                    style={{ opacity: nameOpacity }}
                >
                    <div className="flex md:flex-col gap-4 flex-col-reverse w-[300px] overflow-hidden absolute top-3/4 md:top-1/2 -translate-y-1/2 md:right-44 right-10 text-center md:text-black text-white">
                        <ProfessionalTitle pathname={pathname} />

                        <motion.div 
                            className="group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <SlidingText 
                                direction={dir} 
                                className={nameTextClass}
                            >
                                Oluwawole Johnbeloved Ayomide
                            </SlidingText>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.hr 
                    className="border-[#636363] lg:w-[90%] mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </div>
        </section>
    );
};

SlidingText.propTypes = {
    direction: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.any,
};

ProfessionalTitle.propTypes = {
    pathname: PropTypes.any,
};

ProfileImage.propTypes = {
    src: PropTypes.any,
    alt: PropTypes.any,
    className: PropTypes.any,
    priority: PropTypes.bool,
};


export default LandingProfile;