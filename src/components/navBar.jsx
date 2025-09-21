import { useState, useEffect, useMemo, useCallback } from "react";
import logo from "../assets/images/johnLogoLight.png";
import darklogo from "../assets/images/johnLogoDark.png";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HoverEffect from "../components/custom/hoverEffect";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useIsMobile } from "./navMobileCheck";
import PropTypes from 'prop-types';

const menuContainerVariant = {
    initial: {
        x: "calc(100% + 100px)"
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.6, 
            ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: {
        x: "calc(100% + 100px)",
        transition: {
            duration: 0.6, 
            ease: [0.76, 0, 0.24, 1], 
            delay: 0.2
        }
    }
};

const liVariants = {
    initial: {
        x: "60px",
        opacity: 0
    },
    animate: (i) => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4, 
            delay: 0.1 + (0.05 * i),
            ease: "easeOut"
        }
    }),
    exit: (i) => ({
        x: "60px",
        opacity: 0,
        transition: {
            duration: 0.3, 
            delay: 0.05 * i,
            ease: "easeIn"
        }
    })
};

const LINKS = [
    {
        name: "Home",
        url: "/",
        ariaLabel: "Go to home page"
    },
    {
        name: "About",
        url: "/about",
        ariaLabel: "Learn about me"
    },
    {
        name: "Contact",
        url: "/contact",
        ariaLabel: "Get in touch"
    },
    {
        name: "Projects",
        url: "/allprojects",
        ariaLabel: "View my projects",
        dropDown: [
            {
                name: "UI/UX Design Projects",
                url: "/allprojects",
                ariaLabel: "View UI/UX design projects"
            },
            {
                name: "Graphics Design Projects",
                url: "/alldesigns",
                ariaLabel: "View graphics design projects"
            }
        ]
    },
    {
        name: "Experience",
        url: "/experience",
        ariaLabel: "View my experience"
    },
    {
        name: "Case Study",
        url: "/case-study",
        ariaLabel: "Read case studies"
    },
];

// Memoized logo component
const Logo = ({ currentLogo, pathname, isProjectPage }) => {
    if (isProjectPage) {
        return (
            <Link 
                className="font-bold hover:text-blue duration-200 flex items-center gap-2" 
                to="/allprojects"
                aria-label="Back to all projects"
            >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline text-sm">Back to Projects</span>
            </Link>
        );
    }

    const showOnlyDesktop = pathname === "/" || pathname === "/graphics";
    
    return (
        <Link 
            to="/" 
            className={showOnlyDesktop ? "md:block hidden" : ""}
            aria-label="Go to homepage"
        >
            <motion.img 
                src={currentLogo} 
                className="lg:w-[96px] sm:w-[90px] w-[90px]" 
                alt="John's Portfolio Logo"
                loading="eager"
                decoding="async"
            />
        </Link>
    );
};

// Optimized navigation tabs component
const NavigationTabs = ({ pathname }) => {
    const isHomePage = pathname === "/" || pathname === "/graphics";
    
    if (!isHomePage) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ 
                opacity: 1, 
                y: 0, 
                transition: { 
                    type: "spring", 
                    stiffness: 300,
                    damping: 25
                } 
            }} 
            exit={{ opacity: 0, y: -20 }}
            className="nav-tabs"
        >
            {/* Desktop Navigation */}
            <nav className="md:flex hidden items-center font-medium text-sm" role="navigation" aria-label="Main navigation">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `px-6 py-3 uppercase w-[86px] font-medium text-[9.63px] grid place-content-center tracking-wider transition-all duration-300 rounded-tl-[5px] rounded-bl-[5px] ${
                            isActive 
                                ? "bg-navactive text-white" 
                                : "bg-nav backdrop-blur-sm hover:bg-navactive/20"
                        }`
                    }
                    aria-label="UI/UX Design section"
                >
                    UI/UX
                </NavLink>
                <NavLink 
                    to="/graphics" 
                    className={({ isActive }) => 
                        `px-6 py-3 uppercase w-[86px] font-medium text-[9.63px] grid place-content-center tracking-wider transition-all duration-300 rounded-tr-[5px] rounded-br-[5px] ${
                            isActive 
                                ? "bg-navactive text-white" 
                                : "bg-nav backdrop-blur-sm text-[#9f9f9f] hover:bg-navactive/20"
                        }`
                    }
                    aria-label="Graphics Design section"
                >
                    GRAPHICS
                </NavLink>
            </nav>

            {/* Mobile Navigation */}
            <nav className="md:hidden flex gap-6 text-sm font-medium" role="navigation" aria-label="Mobile navigation">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `relative transition-colors duration-200 ${
                            isActive 
                                ? "after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-1 after:rounded-full" 
                                : "hover:text-blue/80"
                        }`
                    }
                    aria-label="UI/UX Design section"
                >
                    UI/UX
                </NavLink>
                <NavLink 
                    to="/graphics" 
                    className={({ isActive }) => 
                        `relative transition-colors duration-200 ${
                            isActive 
                                ? "after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-1 after:rounded-full" 
                                : "hover:text-blue/80"
                        }`
                    }
                    aria-label="Graphics Design section"
                >
                    GRAPHICS
                </NavLink>
            </nav>
        </motion.div>
    );
};

// Menu toggle button component
const MenuToggle = ({ isActive, onToggle }) => (
    <div className="z-50 lg:w-20 w-14 aspect-square rounded-full grid place-content-center">
        <HoverEffect rotationRange={15}>
            <button
                className={`${
                    isActive ? "bg-blue" : "bg-[#282828]"
                } overflow-hidden blue_hover z-40 grid place-content-center lg:w-20 lg:h-20 w-14 h-14 rounded-full cursor-pointer transition-all duration-300 hover:scale-105`}
                onClick={onToggle}
                aria-expanded={isActive}
                aria-label={isActive ? "Close navigation menu" : "Open navigation menu"}
                aria-controls="main-navigation"
            >
                <HoverEffect Z={50} rotationRange={10} style={{ width: "fit-content" }}>
                    <div className="toggle">
                        <div className={`bar bar--top transition-transform duration-300 ${isActive ? 'rotate-45 translate-y-1' : ''}`}></div>
                        <div className={`bar bar--bottom transition-transform duration-300 ${isActive ? '-rotate-45 -translate-y-1' : ''}`}></div>
                    </div>
                </HoverEffect>
            </button>
        </HoverEffect>
    </div>
);

// Dynamic SVG path component
const CurvedOverlay = ({ windowHeight, fillColor = "#282828" }) => {
    const svgVariants = useMemo(() => {
        const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`;
        const finalPath = `M100 0 L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`;
        
        return {
            initial: { d: initialPath },
            animate: {
                d: finalPath,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            },
            exit: {
                d: initialPath,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }
        };
    }, [windowHeight]);

    return (
        <svg 
            className="absolute top-0 -left-24 w-[100px] h-full stroke-none" 
            style={{ fill: fillColor }}
            aria-hidden="true"
        >
            <motion.path variants={svgVariants} />
        </svg>
    );
};

const NavBar = () => {
    const { pathname } = useLocation();
    const [isActive, setIsActive] = useState(false);
    const [subNavIsActive, setSubNavIsActive] = useState(false);
    const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
    const isMobile = useIsMobile();

    // Memoized calculations
    const currentLogo = useMemo(() => {
        return (pathname === "/contact" || pathname === "/alldesigns/logodesigns") 
            ? logo 
            : darklogo;
    }, [pathname]);

    const isProjectPage = useMemo(() => 
        pathname.startsWith("/projects/"), 
        [pathname]
    );

    const headerClass = useMemo(() => 
        `z-[35] w-full fixed top-0 right-0 ${
            pathname === "/contact" ? "bg-darkbg" : "bg-transparent"
        }`, 
        [pathname]
    );

    // Handle menu toggle
    const handleToggle = useCallback(() => {
        setIsActive(prev => {
            if (!prev) {
                setSubNavIsActive(false); // Close submenu when opening main menu
            }
            return !prev;
        });
    }, []);

    const handleSubToggle = useCallback(() => {
        setSubNavIsActive(prev => !prev);
    }, []);

    const closeAllMenus = useCallback(() => {
        setIsActive(false);
        setSubNavIsActive(false);
    }, []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close menu on route change
    useEffect(() => {
        closeAllMenus();
    }, [pathname, closeAllMenus]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isActive]);

    // Submenu animation variants
    const subMenuContainerVariant = useMemo(() => ({
        initial: {
            x: isMobile ? "calc(100% + 100px)" : "calc(200% + 100px)",
        },
        animate: {
            x: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            x: isMobile ? "calc(100% + 100px)" : "calc(200% + 100px)",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
        }
    }), [isMobile]);

    return (
        <header className={headerClass}>
            <div className="flex justify-between items-center md:p-8 p-4">
                <Logo 
                    currentLogo={currentLogo} 
                    pathname={pathname} 
                    isProjectPage={isProjectPage} 
                />

                <AnimatePresence mode="wait">
                    <NavigationTabs pathname={pathname} />
                </AnimatePresence>

                <MenuToggle isActive={isActive} onToggle={handleToggle} />

                {/* Main Navigation Menu */}
                <AnimatePresence>
                    {isActive && (
                        <motion.nav
                            id="main-navigation"
                            variants={menuContainerVariant}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="z-30 flex flex-col justify-between pt-20 pb-8 pr-8 lg:pl-20 pl-10 fixed top-0 bottom-0 right-0 md:w-1/2 w-full bg-[#282828] text-white"
                            role="navigation"
                            aria-label="Main navigation menu"
                        >
                            <div>
                                <h2 className="md:text-xl p-4 text-[#4d4d4d] border-b border-[#727272] font-medium">
                                    Navigation
                                </h2>
                                <ul className="relative leading-[80px] text-4xl mt-4">
                                    {LINKS.map((link, index) => (
                                        <motion.li
                                            key={link.name}
                                            custom={index}
                                            variants={liVariants}
                                            className="hover:text-blue duration-300 w-fit"
                                        >
                                            {link.dropDown ? (
                                                <button
                                                    onClick={handleSubToggle}
                                                    className="flex gap-3 items-center cursor-pointer"
                                                    aria-expanded={subNavIsActive}
                                                    aria-controls="submenu"
                                                    aria-label={link.ariaLabel}
                                                >
                                                    <HoverEffect rotationRange={10} style={{ width: "fit-content" }}>
                                                        <span>{link.name}</span>
                                                    </HoverEffect>
                                                    <ChevronDown 
                                                        className={`transition-transform duration-300 ${
                                                            subNavIsActive ? "rotate-90" : ""
                                                        }`}
                                                        size={20}
                                                    />
                                                </button>
                                            ) : (
                                                <HoverEffect rotationRange={10} style={{ width: "fit-content" }}>
                                                    <NavLink
                                                        to={link.url}
                                                        onClick={closeAllMenus}
                                                        className={({ isActive }) =>
                                                            isActive ? "text-blue" : "text-white hover:text-blue/80"
                                                        }
                                                        aria-label={link.ariaLabel}
                                                    >
                                                        {link.name}
                                                    </NavLink>
                                                </HoverEffect>
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <CurvedOverlay windowHeight={windowHeight} fillColor="#282828" />
                        </motion.nav>
                    )}
                </AnimatePresence>

                {/* Submenu */}
                <AnimatePresence>
                    {subNavIsActive && (
                        <motion.nav
                            id="submenu"
                            variants={subMenuContainerVariant}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`${
                                isMobile ? "z-50" : "z-10"
                            } flex flex-col justify-between pt-20 pb-8 pr-8 lg:pl-10 pl-10 fixed top-0 bottom-0 md:left-[25%] right-0 md:w-1/2 w-full bg-[#4F4F4F] text-white`}
                            role="navigation"
                            aria-label="Projects submenu"
                        >
                            <div>
                                <button
                                    onClick={handleSubToggle}
                                    className="absolute left-5 top-5 p-2 hover:text-blue duration-200"
                                    aria-label="Back to main menu"
                                >
                                    <ArrowLeft size={20} />
                                </button>

                                <h3 className="md:text-xl py-4 px-3 text-[#E0E0E0] border-b border-[#727272] font-medium">
                                    Projects
                                </h3>
                                
                                <ul className="relative leading-[80px] text-[16px] md:text-[20px] mt-4">
                                    {LINKS.find(link => link.name === "Projects")?.dropDown.map((item, index) => (
                                        <motion.li
                                            key={item.name}
                                            custom={index}
                                            variants={liVariants}
                                            className="hover:text-blue duration-300 w-fit"
                                        >
                                            <HoverEffect rotationRange={8} style={{ width: "fit-content" }}>
                                                <NavLink
                                                    to={item.url}
                                                    onClick={closeAllMenus}
                                                    className={({ isActive }) =>
                                                        isActive ? "text-blue" : "text-white hover:text-blue/80"
                                                    }
                                                    aria-label={item.ariaLabel}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            </HoverEffect>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <CurvedOverlay windowHeight={windowHeight} fillColor="#4F4F4F" />
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

Logo.propTypes = {
    currentLogo: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    isProjectPage: PropTypes.bool.isRequired,
};

MenuToggle.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

CurvedOverlay.propTypes = {
    windowHeight: PropTypes.number.isRequired,
    fillColor: PropTypes.string,
};

export default NavBar;