import { useEffect, useRef, useState } from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import PropTypes from 'prop-types';

import img1 from "../../../assets/images/works-images/F.jpg"
import img2 from "../../../assets/images/works-images/hga.jpg"
import img3 from "../../../assets/images/works-images/cocacola.jpg"
import img4 from "../../../assets/images/works-images/coursemigo.jpg"
import img5 from "../../../assets/images/works-images/A.jpg"
import HoverEffect from "../../../components/custom/hoverEffect";

const works = [
    {
        client: "Clearwage",
        location: "United Kingdom",
        services: "Website and app design",
        component: img1,
        color: "#0000008f",
    },
    {
        client: "HGA",
        location: "United States",
        services: "Website Design",
        component: img2,
        color: "#e2e2e2"
    },
    {
        client: "Cocacola",
        location: "Practice",
        services: "Web re-design",
        component: img3,
        color: "red"
    },
    {
        client: "Coursemigo",
        location: "Nigeria",
        services: "App design",
        component: img4,
        color: "#407BFF"
    },
    {
        client: "Abbi's Place",
        location: "Nigeria",
        services: "Website re-design",
        component: img5,
        color: "#FFF"
    },
    {
        client: "MYABFLEX",
        location: "Nigeria",
        services: "App Design",
        component: img3
    }
].map((n, idx) => ({ ...n, id: idx, next: idx + 1 }));


const Work = ({ dir, setDir, currentSlide, setCurrentSlide, selected, setSelected, handleSetSelected }) => {
    return (
        <TableBody onMouseLeave={() => {
            handleSetSelected(null)
            setDir(null)
        }} className="relative">
            {works.map((work) => (
                <Table_Row
                    key={work.client}
                    dir={dir}
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    selected={selected}
                    setSelected={setSelected}
                    handleSetSelected={handleSetSelected}>
                    {work}
                </Table_Row>
            ))}
        </TableBody>
    )
}

const Table_Row = ({ children, currentSlide, setCurrentSlide, dir, handleSetSelected, selected, setSelected }) => {
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mousePosition.x.set(e.clientX - rect.left - 180);
        mousePosition.y.set(e.clientY - rect.top - 150);
    }
    return (
        <>
            <TableRow
                id={`overflow-hidden relative shift-tab-${children.id} content`}
                onMouseMove={
                    (e) => {
                        handleMouseMove(e);
                    }
                }
                onMouseEnter={(e) => {
                    handleMouseMove(e);
                    handleSetSelected(children.id)
                    setCurrentSlide(children.id - 1 || 0)
                }}
                className={`w-full relative border-b border-[#636363] duration-300 ${selected === children.id && "text-video_bg"}`} >
                <TableCell className="py-10 md:py-16 md:text-5xl font-medium">{children.client}</TableCell>
                <TableCell className="py-10 px-5">{children.location}</TableCell>
                <TableCell className="py-10 px-5">{children.services}</TableCell>
                {selected === children.id &&
                    <AnimatePresence>
                        <TableCell className="absolute inset-0">
                            <Content
                                dir={dir}
                                selected={selected}
                                currentSlide={currentSlide}
                                setSelected={setSelected}
                                mousePosition={mousePosition} />
                        </TableCell>
                    </AnimatePresence>}
            </TableRow>
        </>
    )
}



const Content = ({ selected, dir, mousePosition, currentSlide }) => {
    const contentRef = useRef(null);

    const [imageHeight, setImageHeight] = useState(0);
    const [totalHeight, setTotalHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            const imgElement = contentRef.current.querySelector("img");
            if (imgElement) {
                setImageHeight(imgElement.offsetHeight);
            }
            setTotalHeight(contentRef.current.scrollHeight);
        }
    }, [contentRef]);

    console.log("dir", dir)
    console.log("current", currentSlide)
    console.log("selected", selected)


    const translations = (action, currentSlide)=> {
        if (dir === null && action === "initial") {
            return {y : currentSlide * -298}
        }
        if (dir && dir === 'd') {
            return {y : currentSlide * -298}
        }
        if (dir && dir === "u") {
            return { y: currentSlide * -298 };
        }
        else {
            return { y: currentSlide * -98 };
        }
    }

    return (
        <AnimatePresence>
            {<motion.div
                ref={contentRef}
                style={{
                    position: 'absolute',
                    top: mousePosition.y,
                    left: mousePosition.x,
                    transition: 'all 200ms 10ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    pointerEvents: "none",
                    zIndex: 10000,
                }}
                className="absolute inset-0 w-[349px] h-[298px] overflow-hidde">
                <motion.div
                    initial={dir === "u" ? translations("initial", selected) : translations("animate", currentSlide)}
                    animate={dir === "u" ? translations("animate", currentSlide) :  translations("initial", selected)}
                    transition={{
                        type: "spring",
                        duration: 2
                    }}
                    className={`relative flex flex-col`}>
                    { works.map((img, index) => (
                        <motion.img key={index} layout="fill"
                            style={{
                                backgroundColor: img.color
                            }}
                            src={img.component}
                            alt="" className={`relative w-full h-[298px] object-contain p-7`} />
                    ))}
                </motion.div>
                <div className="absolute grid place-content-center inset-0">
                    <HoverEffect Z={80} rotationRange={40} style={{ width: "fit-content" }}>
                        <button className="w-20 h-20 grid place-content-center cursor-pointer p-4 rounded-full z-10 bg-darkbg text-white font-bold">
                            <HoverEffect Z={50} rotationRange={20} style={{ width: "fit-content" }}>
                                <div className="button">view</div>
                            </HoverEffect>
                        </button>
                    </HoverEffect>
                </div>
            </motion.div>}
        </AnimatePresence>
    );
}



Table_Row.propTypes = {
    currentSlide: PropTypes.any,
    setCurrentSlide: PropTypes.func,
    children: PropTypes.any,
    dir: PropTypes.any,
    selected: PropTypes.any,
    setSelected: PropTypes.func,
    handleSetSelected: PropTypes.func,
}
Work.propTypes = {
    currentSlide: PropTypes.any,
    setCurrentSlide: PropTypes.func,
    dir: PropTypes.any,
    setDir: PropTypes.any,
    selected: PropTypes.any,
    current: PropTypes.any,
    setSelected: PropTypes.func,
    handleSetSelected: PropTypes.func,
}

Content.propTypes = {
    currentSlide: PropTypes.any,
    setCurrentSlide: PropTypes.func,
    dir: PropTypes.any,
    selected: PropTypes.any,
    current: PropTypes.any,
    setSelected: PropTypes.func,
    mousePosition: PropTypes.any,
}

export default Work;