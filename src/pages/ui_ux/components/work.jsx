import { useState, useRef, useEffect, useCallback, useMemo } from "react";
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
    const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

    const handleSetSelected = useCallback((val) => {
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
    }, [selected]);

    // Filter works based on category
    const filteredWorks = category === "All"
        ? works?.filter((_, index) => index < limit)
        : works.filter((work) => work.services.includes(category));

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            setIsKeyboardNavigation(true);

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
                    // Smooth scroll to element
                    element.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            }
        }
    }, [focusedIndex, filteredWorks, handleSetSelected, setCurrentSlide]);

    useEffect(() => {
        const tableBodyNode = tableBodyRef.current;
        if (tableBodyNode) {
            tableBodyNode.addEventListener('keydown', handleKeyDown);
            return () => {
                tableBodyNode.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [focusedIndex, filteredWorks, handleKeyDown]);

    // Reset keyboard navigation flag on mouse movement
    useEffect(() => {
        const handleMouseMove = () => {
            if (isKeyboardNavigation) {
                setIsKeyboardNavigation(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isKeyboardNavigation]);

    return (
        <AnimatePresence>
            <TableBody
                ref={tableBodyRef}
                tabIndex={0}
                onMouseLeave={() => {
                    if (!isKeyboardNavigation) {
                        handleSetSelected(null);
                        setDir(null);
                        setFocusedIndex(-1);
                    }
                }}
                onFocus={() => {
                    // Set focus to first item if none selected
                    if (focusedIndex === -1 && filteredWorks.length > 0) {
                        setFocusedIndex(0);
                        const firstWork = filteredWorks[0];
                        handleSetSelected(firstWork.id);
                        setCurrentSlide(firstWork.id);
                        setIsKeyboardNavigation(true);
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
                        isKeyboardNavigation={isKeyboardNavigation}
                        setIsKeyboardNavigation={setIsKeyboardNavigation}
                    >
                        {work}
                    </Table_Row>
                ))}
            </TableBody>
        </AnimatePresence>
    );
};

const Table_Row = ({ 
    children, 
    index, 
    currentSlide, 
    setCurrentSlide, 
    dir, 
    handleSetSelected, 
    selected, 
    setSelected, 
    setFocusedIndex,
    isKeyboardNavigation,
    setIsKeyboardNavigation
}) => {
    const navigate = useNavigate();
    const rowRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const lastMousePosition = useRef({ x: 0, y: 0 });
    
    const mousePosition = useMemo(() => ({
        x,
        y,
    }), [x, y]);

    const updateMousePosition = useCallback((clientX, clientY, smooth = true) => {
        if (rowRef.current) {
            const rect = rowRef.current.getBoundingClientRect();
            const newX = clientX - rect.left - 174.5;
            const newY = clientY - rect.top - 149;

            lastMousePosition.current = { x: clientX, y: clientY };

            if (smooth) {
                mousePosition.x.set(newX);
                mousePosition.y.set(newY);
            } else {
                // For immediate updates without spring animation
                mousePosition.x.jump?.(newX) || mousePosition.x.set(newX);
                mousePosition.y.jump?.(newY) || mousePosition.y.set(newY);
            }
        }
    }, [rowRef, mousePosition]);

    // Center the hover content when using keyboard navigation
    const centerHoverContent = useCallback(() => {
        if (rowRef.current) {
            const rect = rowRef.current.getBoundingClientRect();
            const centerX = rect.width / 2 - 174.5;
            const centerY = rect.height / 2 - 149;

            mousePosition.x.set(centerX);
            mousePosition.y.set(centerY);
        }
    }, [rowRef, mousePosition]);

    const handleMouseMove = useCallback((e) => {
        if (!isKeyboardNavigation) {
            updateMousePosition(e.clientX, e.clientY);
        }
    }, [updateMousePosition, isKeyboardNavigation]);

    const handleFocus = () => {
        setFocusedIndex(index);
        handleSetSelected(children.id);
        setCurrentSlide(children.id);
        
        if (isKeyboardNavigation) {
            // Small delay to ensure the element is properly focused
            setTimeout(centerHoverContent, 50);
        }
    };

    // Enhanced scroll handler for smooth following
    const handleScroll = useCallback(() => {
        if (selected === children.id && rowRef.current) {
            if (isKeyboardNavigation) {
                // For keyboard navigation, keep content centered
                centerHoverContent();
            } else {
                // For mouse navigation, update position based on last known mouse position
                const rect = rowRef.current.getBoundingClientRect();
                const newX = lastMousePosition.current.x - rect.left - 174.5;
                const newY = lastMousePosition.current.y - rect.top - 149;
                
                // Use spring animation for smooth following during scroll
                mousePosition.x.set(newX);
                mousePosition.y.set(newY);
            }
        }
    }, [selected, children.id, rowRef, mousePosition, centerHoverContent, isKeyboardNavigation]);

    // Enhanced scroll and mouse tracking
    useEffect(() => {
        if (selected === children.id) {
            const handleGlobalMouseMove = (e) => {
                if (!isKeyboardNavigation) {
                    updateMousePosition(e.clientX, e.clientY);
                }
            };

            // Use both scroll and wheel events for better trackpad support
            const handleWheel = () => {
                if (!isKeyboardNavigation) {
                    // During wheel/trackpad scroll, update position smoothly
                    requestAnimationFrame(() => {
                        handleScroll();
                    });
                }
            };

            const handleScrollThrottled = () => {
                // Throttle scroll updates for performance
                requestAnimationFrame(handleScroll);
            };

            window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
            window.addEventListener('scroll', handleScrollThrottled, { passive: true, capture: true });
            window.addEventListener('wheel', handleWheel, { passive: true });
            
            // Also listen for resize events
            window.addEventListener('resize', handleScrollThrottled, { passive: true });

            return () => {
                window.removeEventListener('mousemove', handleGlobalMouseMove);
                window.removeEventListener('scroll', handleScrollThrottled, { capture: true });
                window.removeEventListener('wheel', handleWheel);
                window.removeEventListener('resize', handleScrollThrottled);
            };
        }
    }, [selected, children.id, handleScroll, updateMousePosition, isKeyboardNavigation]);

    const handleClick = () => {
        navigate(`/projects/${children.client}`);
    };

    const handleMouseEnter = (e) => {
        if (!isKeyboardNavigation) {
            updateMousePosition(e.clientX, e.clientY);
            handleSetSelected(children.id);
            setCurrentSlide(children.id);
            setFocusedIndex(index);
        }
    };

    return (
        <TableRow
            ref={rowRef}
            tabIndex={0}
            onClick={handleClick}
            id={`shift-tab-${children.id}`}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onMouseEnter={handleMouseEnter}
            className={`w-full relative border-b border-[#636363] duration-300 cursor-pointer hover:bg-gray-50/5 focus:bg-gray-50/10 focus:outline-none ${selected === children.id && "text-video_bg"}`}>
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
                            isKeyboardNavigation={isKeyboardNavigation}
                        />
                    </TableCell>
                </AnimatePresence>
            )}
        </TableRow>
    );
};

const Content = ({ dir, mousePosition, currentSlide, isKeyboardNavigation }) => {
    const contentRef = useRef(null);

    // Adjust spring settings for different navigation modes
    const springConfig = isKeyboardNavigation 
        ? { stiffness: 400, damping: 25 } // Snappier for keyboard
        : { stiffness: 300, damping: 20 }; // Smoother for mouse

    const springX = useSpring(mousePosition.x, springConfig);
    const springY = useSpring(mousePosition.y, springConfig);

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
                    pointerEvents: "none",
                    zIndex: 10000,
                }}
                className="w-[349px] h-[298px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                    duration: isKeyboardNavigation ? 0.15 : 0.2,
                    ease: "easeOut"
                }}
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
                                e.stopPropagation();
                            }}>
                            <HoverEffect Z={20} rotationRange={20} style={{ width: "fit-content" }}>
                                <div className="button">view</div>
                            </HoverEffect>
                        </button>
                    </HoverEffect>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

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
    isKeyboardNavigation: PropTypes.bool,
    setIsKeyboardNavigation: PropTypes.func,
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
    isKeyboardNavigation: PropTypes.bool,
};

export default Work;