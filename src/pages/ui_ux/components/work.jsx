import { useState, useRef, useEffect } from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import PropTypes from 'prop-types';
import { Works } from "../../../utils/works";
import HoverEffect from "../../../components/custom/hoverEffect";
import { useNavigate } from "react-router-dom";

const works = Works;

const Work = ({ category, limit }) => {
    const tableBodyRef = useRef(null);
    const [selected, setSelected] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dir, setDir] = useState(null);
    const [focusedIndex, setFocusedIndex] = useState(-1);

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

    // Filter works based on category
    const filteredWorks = category === "All"
        ? works?.filter((_, index) => index < limit)
        : works.filter((work) => work.services.includes(category));

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();

            const currentIndex = focusedIndex;
            let newIndex;

            if (e.key === 'ArrowDown') {
                newIndex = currentIndex < filteredWorks.length - 1 ? currentIndex + 1 : 0;
            } else {
                newIndex = currentIndex > 0 ? currentIndex - 1 : filteredWorks.length - 1;
            }

            setFocusedIndex(newIndex);
            const newWork = filteredWorks[newIndex];
            if (newWork) {
                handleSetSelected(newWork.id);
                setCurrentSlide(newWork.id);

                // Focus the element
                const element = document.getElementById(`shift-tab-${newWork.id}`);
                if (element) {
                    element.focus();
                }
            }
        }
    };

    useEffect(() => {
        if (tableBodyRef.current) {
            tableBodyRef.current.addEventListener('keydown', handleKeyDown);
            return () => {
                if (tableBodyRef.current) {
                    tableBodyRef.current.removeEventListener('keydown', handleKeyDown);
                }
            };
        }
    }, [focusedIndex, filteredWorks]);

    return (
        <AnimatePresence>
            <TableBody
                ref={tableBodyRef}
                tabIndex={0}
                onMouseLeave={() => {
                    handleSetSelected(null);
                    setDir(null);
                    setFocusedIndex(-1);
                }}
                onFocus={() => {
                    // Set focus to first item if none selected
                    if (focusedIndex === -1 && filteredWorks.length > 0) {
                        setFocusedIndex(0);
                        const firstWork = filteredWorks[0];
                        handleSetSelected(firstWork.id);
                        setCurrentSlide(firstWork.id);
                    }
                }}
                className="relative focus:outline-none"
            >
                {filteredWorks.map((work, index) => (
                    <Table_Row
                        key={work.client}
                        index={index}
                        dir={dir}
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        selected={selected}
                        setSelected={setSelected}
                        handleSetSelected={handleSetSelected}
                        focusedIndex={focusedIndex}
                        setFocusedIndex={setFocusedIndex}
                    >
                        {work}
                    </Table_Row>
                ))}
            </TableBody>
        </AnimatePresence>
    );
};

const Table_Row = ({ children, index, currentSlide, setCurrentSlide, dir, handleSetSelected, selected, setSelected, focusedIndex, setFocusedIndex }) => {
    const navigate = useNavigate();
    const rowRef = useRef(null);
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const updateMousePosition = (clientX, clientY) => {
        if (rowRef.current) {
            const rect = rowRef.current.getBoundingClientRect();
            const newX = clientX - rect.left - 174.5;
            const newY = clientY - rect.top - 149;

            mousePosition.x.set(newX);
            mousePosition.y.set(newY);
        }
    };

    // Center the hover content when using keyboard navigation
    const centerHoverContent = () => {
        if (rowRef.current) {
            const rect = rowRef.current.getBoundingClientRect();
            const centerX = rect.width / 2 - 174.5;
            const centerY = rect.height / 2 - 149;

            mousePosition.x.set(centerX);
            mousePosition.y.set(centerY);
        }
    };

    const handleMouseMove = (e) => {
        updateMousePosition(e.clientX, e.clientY);
    };

    const handleFocus = () => {
        setFocusedIndex(index);
        handleSetSelected(children.id);
        setCurrentSlide(children.id);
        setTimeout(centerHoverContent, 0);
    };

    const handleScroll = () => {
        if (selected === children.id && rowRef.current) {
            const rect = rowRef.current.getBoundingClientRect();
            const currentX = mousePosition.x.get() + rect.left + 174.5;
            const currentY = mousePosition.y.get() + rect.top + 149;
            updateMousePosition(currentX, currentY);
        }
    };

    // Add scroll listener when this row is selected
    useEffect(() => {
        if (selected === children.id) {
            const handleGlobalMouseMove = (e) => {
                updateMousePosition(e.clientX, e.clientY);
            };

            window.addEventListener('mousemove', handleGlobalMouseMove);
            window.addEventListener('scroll', handleScroll, true); // Use capture phase

            return () => {
                window.removeEventListener('mousemove', handleGlobalMouseMove);
                window.removeEventListener('scroll', handleScroll, true);
            };
        }
    }, [selected, children.id]);

    const handleClick = () => {
        navigate(`/projects/${children.client}`);
    };

    return (
        <TableRow
            ref={rowRef}
            tabIndex={0}
            onClick={handleClick}
            id={`shift-tab-${children.id}`}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onMouseEnter={(e) => {
                updateMousePosition(e.clientX, e.clientY);
                handleSetSelected(children.id);
                setCurrentSlide(children.id);
                setFocusedIndex(index);
            }}
            className={`w-full relative border-b border-[#636363] duration-300 cursor-pointer hover:bg-gray-50/5 focus:bg-gray-50/10 focus:outline-none ${selected === children.id && "text-video_bg"
                }`}
        >
            <TableCell className="py-10 md:py-16 text-3xl lg:text-5xl font-medium">
                {children.client}
            </TableCell>
            <TableCell className="py-10 px-5 text-sm lg:text-base">
                {children.location}
            </TableCell>
            <TableCell className="py-10 px-5 text-sm lg:text-base">
                {Array.isArray(children.services) ? children.services.join(", ") : children.services}
            </TableCell>

            {selected === children.id && (
                <AnimatePresence>
                    <TableCell className="absolute inset-0 pointer-events-none">
                        <Content
                            dir={dir}
                            currentSlide={currentSlide}
                            setSelected={setSelected}
                            mousePosition={mousePosition}
                        />
                    </TableCell>
                </AnimatePresence>
            )}
        </TableRow>
    );
};

const Content = ({ dir, mousePosition, currentSlide }) => {
    const contentRef = useRef(null);

    const springX = useSpring(mousePosition.x, { stiffness: 300, damping: 20 });
    const springY = useSpring(mousePosition.y, { stiffness: 300, damping: 20 });

    const translations = (slideIndex) => {
        return { y: slideIndex * -298 };
    };

    return (
        <AnimatePresence mode="sync">
            <motion.div
                ref={contentRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    x: springX,
                    y: springY,
                    pointerEvents: "auto",
                    zIndex: 10000,
                }}
                className="w-[349px] h-[298px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    initial={() => {
                        if (dir === "d") return translations(currentSlide - 1);
                        if (dir === "u") return translations(currentSlide + 1);
                        return translations(currentSlide);
                    }}
                    animate={() => translations(currentSlide)}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                        duration: 0.7,
                    }}
                    className="relative flex flex-col"
                >
                    {works.map((img, index) => (
                        <motion.img
                            key={`${img.client}-${index}`}
                            style={{
                                backgroundColor: img.color,
                            }}
                            src={img.component}
                            alt={`${img.client} project`}
                            className="relative w-full h-[298px] object-contain p-7"
                        />
                    ))}
                </motion.div>

                <div className="absolute grid place-content-center inset-0">
                    <HoverEffect Z={80} rotationRange={40} style={{ width: "fit-content" }}>
                        <button
                            className="w-20 h-20 grid place-content-center cursor-pointer p-4 rounded-[20px] z-10 bg-darkbg text-white font-bold transition-transform hover:scale-110"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering the row click
                                // Add specific button action here if needed
                            }}
                        >
                            <HoverEffect Z={50} rotationRange={20} style={{ width: "fit-content" }}>
                                <div className="button">view</div>
                            </HoverEffect>
                        </button>
                    </HoverEffect>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

// PropTypes
Table_Row.propTypes = {
    currentSlide: PropTypes.number,
    setCurrentSlide: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
    dir: PropTypes.string,
    selected: PropTypes.number,
    setSelected: PropTypes.func.isRequired,
    handleSetSelected: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    focusedIndex: PropTypes.number,
    setFocusedIndex: PropTypes.func.isRequired,
};

Work.propTypes = {
    category: PropTypes.string.isRequired,
    limit: PropTypes.number,
};

Content.propTypes = {
    currentSlide: PropTypes.number.isRequired,
    dir: PropTypes.string,
    mousePosition: PropTypes.object.isRequired,
    setSelected: PropTypes.func,
};

export default Work;