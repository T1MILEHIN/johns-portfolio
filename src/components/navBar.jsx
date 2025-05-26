import { useState, useEffect } from "react";
import logo from "../assets/images/johnLogoLight.png";
import darklogo from "../assets/images/johnLogoDark.png";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HoverEffect from "../components/custom/hoverEffect"
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const menuContainerVariant = {
    initial: {
        x: "calc(100% + 100px)"
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.8, ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: {
        x: "calc(100% + 100px)",
        transition: {
            duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3
        }
    }
}

const liVariants = {
    initial: {
        x: "80px"
    },
    animate: (i) => ({
        x: 0,
        transition: {
            duration: 0.3, delay: 0.05 * i
        }
    }),
    exit: (i) => ({
        x: "80px",
        transition: {
            duration: 0.3, delay: 0.05 * i
        }
    })
}

const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
const finalPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

const svgVariants = {
    initial: { d: initialPath },
    animate: {
        d: finalPath,
        transition: {
            duration: 1, ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: {
        d: initialPath,
        transition: {
            duration: 1, ease: [0.76, 0, 0.24, 1]
        }
    }
}

const LINKS = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Contact",
        url: "/contact"
    },
    {
        name: "Projects",
        url: "/allprojects",
        dropDown: [
            {
                name: "UI/uX Design Projects",
                url: "/allprojects"
            },
            {
                name: "Graphics Design Projects",
                url: "/alldesigns"
            }
        ]
    },
    {
        name: "Experience",
        url: "/experience"
    },
    {
        name: "Case Study",
        url: "/case-study"
    },
]

const NavBar = () => {
    const { pathname } = useLocation()
    const [isActive, setIsActive] = useState(false);
    const handleToggle = (e) => {
        setIsActive(!e.target.checked)
    }
    const [currentLogo, setCurrentLogo] = useState(logo);

    useEffect(() => {
        if (pathname === "/contact" || pathname === "/alldesigns/logodesigns") {
            setCurrentLogo(logo);
        } else {
            setCurrentLogo(darklogo);
        }
    }, [pathname]);

    return (
        <header className={`z-[99999999999999999999999999999] fixed w-full top-0 right-0 flex justify-between items-center md:p-8 p-4 ${pathname === "/contact" ? "bg-darkbg" : "bg-transparent"}`}>
            {(pathname === "/" || pathname === "/graphics") ?
                <Link to="/" className="md:block hidden">
                    <motion.img src={currentLogo} className="lg:w-[96px] sm:w-[90px] w-[90px]" alt="" />
                </Link>
                :
                <Link to="/" className="">
                    <motion.img src={currentLogo} className="lg:w-[96px] sm:w-[90px] w-[90px]" alt="" />
                </Link>
            }
            <AnimatePresence>
                {(pathname === "/" || pathname === "/graphics") &&
                    <motion.div className="z-40" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } }} exit={{ opacity: 0, y: -100 }}>
                        <nav className="md:flex hidden items-center font-medium text-sm *:duration-300">
                            <NavLink to="/" className={({ isActive }) => isActive ? "rounded-[5px] after:origin-left after:ml-auto after:left-0 after:duration-300 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:top-0 after:right-0 after:bg-navactive after:z-[-1] after:w-full text-white rounded-tl-[5px] rounded-bl-[5px]" : "backdrop-blur-sm after:origin-left after:duration-300 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:top-0 after:right-0 after:bg-transparent after:w-0 bg-nav rounded-tl-[5px] rounded-bl-[5px] transition-all"}>
                                <p className="px-6 py-3 uppercase w-[86px] font-medium text-[9.63px] grid place-content-center tracking-wider">UI/UX</p>
                            </NavLink>
                            <NavLink to="/graphics" className={({ isActive }) => isActive ? "rounded-[5px] ml-auto after:duration-300 relative z-[1] overflow-hidden after:absolute after:inset-0 after:bg-navactive after:z-[-1] after:w-full text-white rounded-tr-[5px] rounded-br-[5px]" : "backdrop-blur-sm ml-auto after:duration-300 relative z-[1] overflow-hidden after:absolute after:inset-0 after:bg-transparent after:w-0 bg-nav text-[#9f9f9f] rounded-tr-[5px] rounded-br-[5px] transition-all"}>
                                <p className="px-6 py-3 uppercase w-[86px] font-medium text-[9.63px] grid place-content-center tracking-wider">Graphics</p>
                            </NavLink>
                        </nav>
                        <nav className="md:hidden flex gap-4 text-sm font-medium">
                            <NavLink to="/" className={({ isActive }) => isActive ? "relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-1 after:rounded-full" : "relative"}>
                                <p>UI/UX</p>
                            </NavLink>
                            <NavLink to="/graphics" className={({ isActive }) => isActive ? "relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-1 after:rounded-full" : "relative"}>
                                <p>GRAPHICS</p>
                            </NavLink>
                        </nav>
                    </motion.div>}
            </AnimatePresence>
            <div className={`z-[40] lg:w-20 w-14 aspect-square rounded-full grid place-content-center`}>
                <HoverEffect rotationRange={20}>
                    <motion.label className={`${isActive ? "bg-blue" : "bg-[#282828]"} overflow-hidden blue_hover z-40 grid place-content-center lg:w-20 lg:h-20 w-14 h-14 rounded-full cursor-pointer`} onClick={() => setIsActive(!isActive)}>
                        <HoverEffect Z={50} rotationRange={10} style={{ width: "fit-content" }}>
                            <input onChange={handleToggle} checked={isActive} type="checkbox" id="checkbox" />
                            <label
                                htmlFor="checkbox"
                                className="toggle">
                                <div className="bar bar--top"></div>
                                <div className="bar bar--bottom"></div>
                            </label>
                        </HoverEffect>
                    </motion.label>
                </HoverEffect>
            </div>
            <AnimatePresence>
                <motion.div
                    variants={menuContainerVariant}
                    initial="initial"
                    animate={isActive ? "animate" : "exit"}
                    exit="exit"
                    className="z-20 flex flex-col justify-between pt-20 pb-8 pr-8 lg:pl-20 pl-10 fixed top-0 bottom-0 right-0 md:w-1/2 w-full  bg-[#282828] text-white">
                    <motion.div>
                        <p className="p-4 text-[#4d4d4d] border-b border-[#727272]">Navigation</p>
                        <motion.ul variants={menuContainerVariant} className="relative leading-[80px] text-4xl">
                            {LINKS.map((link, index) => (
                                link.dropDown ? (
                                    <DropdownMenu key={index} className="rounded-lg">
                                        <DropdownMenuTrigger asChild>
                                            <motion.li
                                                className="flex gap-3 items-center hover:text-blue duration-300 w-fit cursor-pointer relative group data-[state=open]:text-blue"
                                                custom={index}
                                                variants={liVariants}
                                            >
                                                <HoverEffect rotationRange={15} style={{ width: "fit-content" }}>
                                                    {link.name}
                                                </HoverEffect>

                                                <span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                                                    <ChevronUp />
                                                </span>
                                            </motion.li>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="start"
                                            alignOffset={30}
                                            side="right"
                                            sideOffset={10}
                                            className="divide-y divide-white relative bg-[#1e1e1e] border-none text-white rounded-xl shadow-lg z-[99999999999999999999999999999]">
                                            {link.dropDown.map((item, i) => (
                                                <DropdownMenuItem key={i} asChild className="">
                                                    <NavLink
                                                        to={item.url}
                                                        onClick={() => setIsActive(false)}
                                                        className="w-full block px-4 py-3"
                                                    >
                                                        <li className="hover:text-blue duration-150 list-none cursor-pointer">
                                                            {item.name}
                                                        </li>
                                                    </NavLink>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <HoverEffect key={index} rotationRange={15} style={{ width: "fit-content" }}>
                                        <motion.li className="hover:text-blue duration-300 w-fit" onClick={() => setIsActive(false)} custom={index} variants={liVariants}>
                                            <NavLink className={({ isActive }) => isActive ? "text-blue" : "text-white"} to={link.url}>{link.name}</NavLink>
                                        </motion.li>
                                    </HoverEffect>
                                )
                            ))}
                        </motion.ul>
                    </motion.div>
                    <svg className="absolute top-0 -left-24 w-[100px] h-full stroke-none fill-[#282828]" >
                        <motion.path variants={svgVariants}></motion.path>
                    </svg>
                </motion.div>
            </AnimatePresence>
        </header>
    )
}

export default NavBar