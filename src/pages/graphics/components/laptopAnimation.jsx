import { motion } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";
import laptop from "../../../assets/images/laptop.png";
import logo1 from "../../../assets/images/graphics/logo1.png";
import logo2 from "../../../assets/images/graphics/logo2.png";
import logo3 from "../../../assets/images/graphics/logo3.png";
import HoverEffect from "../../../components/custom/hoverEffect";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const laptopVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2
        }
    }
};

const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.5
        }
    }
};

const Section = ({ laptopImg, title, logo, isInView }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [logoLoaded, setLogoLoaded] = useState(false);

    return (
        <motion.div 
            className="py-20 flex flex-col gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            <motion.div 
                className="mx-auto w-fit relative"
                variants={laptopVariants}
            >
                <img 
                    src={laptopImg} 
                    alt="Laptop mockup" 
                    className={`md:w-[677px] w-full mx-auto border-2 transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    loading="lazy"
                />
                
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg md:w-[677px] w-full mx-auto" />
                )}
                
                <div className="bg-black overflow-hidden grid place-content-center absolute sm:top-5 top-2 sm:right-20 right-10 sm:bottom-14 bottom-5 sm:left-20 left-10 rounded-sm">
                    <div className="flex items-center justify-center">
                        <motion.img
                            src={logo}
                            alt={`${title} logo`}
                            className={`w-32 transition-opacity duration-300 ${
                                logoLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                            variants={logoVariants}
                            onLoad={() => setLogoLoaded(true)}
                            loading="lazy"
                        />
                        
                        {!logoLoaded && (
                            <div className="w-32 h-20 bg-gray-700 animate-pulse rounded" />
                        )}
                    </div>
                </div>
            </motion.div>
            
            <motion.div 
                className="sm:w-[450px] mx-auto md:text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                <h2 className="font-bold md:font-medium uppercase text-lg md:text-xl">
                    {title}
                </h2>
            </motion.div>
        </motion.div>
    );
};

const LaptopAnimation = () => {
    const [inViewSections, setInViewSections] = useState({});
    const sectionRefs = useRef({});

    const sections = useMemo(() => [
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
    ], []);


    useEffect(() => {
        const observers = [];
        
        sections.forEach(section => {
            const element = sectionRefs.current[section.id];
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    setInViewSections(prev => ({
                        ...prev,
                        [section.id]: entry.isIntersecting
                    }));
                },
                {
                    threshold: 0.3,
                    rootMargin: "-50px 0px"
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [sections]);

    return (
        <div className="p-4 md:p-20 flex flex-col gap-20">
            <motion.h1 
                className="mx-auto lg:w-[1023px] font-medium text-2xl md:text-4xl lg:text-5xl text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                RECENT WORKS
            </motion.h1>
            
            <div>
                {sections.map((section) => (
                    <div
                        key={section.id}
                        ref={el => sectionRefs.current[section.id] = el}
                    >
                        <Section
                            laptopImg={section.laptopImg}
                            logo={section.logo}
                            title={section.title}
                            isInView={inViewSections[section.id] || false}
                        />
                    </div>
                ))}
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center md:justify-end"
            >
                <HoverEffect Z={50} rotationRange={20} style={{ width: "fit-content" }}>
                    <motion.div
                        className="button black_hover rounded-[40px] bg-black text-white px-8 py-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <HoverEffect Z={50} rotationRange={20} style={{ width: "fit-content" }}>
                            <Link 
                                to="/alldesigns" 
                                className="button text-white font-medium"
                                aria-label="View more design works"
                            >
                                More Works
                            </Link>
                        </HoverEffect>
                    </motion.div>
                </HoverEffect>
            </motion.div>
        </div>
    );
};

Section.propTypes = {
    isInView: PropTypes.bool.isRequired,
    laptopImg: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default LaptopAnimation;