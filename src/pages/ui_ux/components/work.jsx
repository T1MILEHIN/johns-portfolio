import { useState, useRef } from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import PropTypes from 'prop-types';
import { Works } from "../../../utils/works";
import HoverEffect from "../../../components/custom/hoverEffect";
import { useNavigate } from "react-router-dom";


const works = Works

const Work = ({category, limit}) => {
    const [selected, setSelected] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dir, setDir] = useState(null);
    const handleSetSelected = (val) => {
        if (typeof val === "number" && typeof selected === "number") {
            const direction = selected > val ? "u" : "d";
            setDir(direction);
    
            setCurrentSlide((prev) => {
                if (direction === "d") {
                    return prev + 1;
                } else if (direction === "u") {
                    return prev - 1;
                }
                return prev;
            });
        } else if (val === null) {
            setDir(null);
        }
    
        setSelected(val);
    };
    return (
        <AnimatePresence>
            <TableBody onMouseLeave={() => {
                handleSetSelected(null)
                setDir(null)
            }} className="relative">
                {category === "All" ? works?.filter((_, index)=> index < limit)?.map((work) => (
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
                )) :
                    works.filter((work)=> work.services.includes(category)).map((work)=> (
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
                    ))
                }
            </TableBody>
        </AnimatePresence>
    )
}

const Table_Row = ({ children, currentSlide, setCurrentSlide, dir, handleSetSelected, selected, setSelected }) => {
    const navigate = useNavigate()
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mousePosition.x.set(e.clientX - rect.left - 180);
        mousePosition.y.set(e.clientY - rect.top - 150);
    }
    const handleWheel = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const cursorX = e.clientX - rect.left - 180;
        const cursorY = e.clientY - rect.top - 150;
        mousePosition.x.set(cursorX);
        mousePosition.y.set(cursorY);
    };
    const handleKeyDown = (e) => {
        alert(e)
        if (e.key === "ArrowUp") {
            alert('working')
            mousePosition.y.set((prev) => prev - 20); // Move up
        } else if (e.key === "ArrowDown") {
            mousePosition.y.set((prev) => prev + 20); // Move down
        }
    };
    return (
        <>
            <TableRow
                tabIndex={0}
                onClick={()=> navigate(`/projects/${works.find(work=> work.id === currentSlide).client}`)}
                id={`overflow-hidden relative shift-tab-${children.id} content`}
                onMouseMove={
                    (e) => {
                        handleMouseMove(e);
                    }
                }
                onKeyDown={()=> alert('working')}
                
                onMouseEnter={(e) => {
                    handleMouseMove(e);
                    handleSetSelected(children.id)
                    setCurrentSlide(children.id)
                }}
                // onKeyDown={(e)=> handleKeyDown(e)}
                // onWheel={(e) => handleWheel(e)}
                className={`w-full relative border-b border-[#636363] duration-300 ${selected === children.id && "text-video_bg"}`} >
                <TableCell className="py-10 md:py-16 text-3xl lg:text-5xl font-medium">{children.client}</TableCell>
                <TableCell className="py-10 px-5 text-sm lg:text-base">{children.location}</TableCell>
                <TableCell className="py-10 px-5 text-sm lg:text-base">{children.services}</TableCell>
                {selected === children.id &&
                    <AnimatePresence>
                        <TableCell className="absolute inset-0">
                            <Content
                                dir={dir}
                                currentSlide={currentSlide}
                                setSelected={setSelected}
                                mousePosition={mousePosition} />
                        </TableCell>
                    </AnimatePresence>}
            </TableRow>
        </>
    )
}



const Content = ({ dir, mousePosition, currentSlide }) => {
    const contentRef = useRef(null);

    const translations = (currentSlide) => {
        if (dir === null) {
            return { y: currentSlide * -298 }
        }
        else {
            return { y: currentSlide * -298 };
        }
    }

    return (
        <AnimatePresence mode="sync">
            <motion.div
                ref={contentRef}
                style={{
                    position: 'absolute',
                    top: mousePosition.y,
                    left: mousePosition.x,
                    transition: 'all 200ms 10ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    pointerEvents: "none",
                    zIndex: 10000,
                }}
                className="absolute inset-0 w-[349px] h-[298px] overflow-hidden">
                <motion.div
                    
                    initial={() => dir === "d" ? translations(currentSlide - 1) : dir === "u" ? translations(currentSlide + 1) : translations(currentSlide)}
                    animate={() => translations(currentSlide)}
                    transition={{
                        type: "tween",
                        duration: 0.7
                    }}
                    className={`relative flex flex-col`}>
                    
                    {works.map((img, index) => (
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
                        <button className="w-20 h-20 grid place-content-center cursor-pointer p-4 rounded-[20px] z-10 bg-darkbg text-white font-bold">
                            <HoverEffect Z={50} rotationRange={20} style={{ width: "fit-content" }}>
                                <div className="button">view</div>
                            </HoverEffect>
                        </button>
                    </HoverEffect>
                </div>
            </motion.div>
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
    category: PropTypes.any,
    limit: PropTypes.number,
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