import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

export const DirectionAwareHover = ({
    imageUrl,
    children,
    childrenClassName,
    imageClassName,
    className,
}: {
    imageUrl: string;
    children: React.ReactNode | string;
    childrenClassName?: string;
    imageClassName?: string;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const [direction, setDirection] = useState<
        "top" | "bottom" | "left" | "right" | string
    >("left");

    const handleMouseEnter = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (!ref.current) return;

        const direction = getDirection(event, ref.current);
        console.log("direction", direction);
        switch (direction) {
            case 0:
                setDirection("top");
                break;
            case 1:
                setDirection("right");
                break;
            case 2:
                setDirection("bottom");
                break;
            case 3:
                setDirection("left");
                break;
            default:
                setDirection("left");
                break;
        }
    };

    const getDirection = (
        ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
        obj: HTMLElement
    ) => {
        const { width: w, height: h, left, top } = obj.getBoundingClientRect();
        const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
        const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
        const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return d;
    };

    return (
        <motion.div
            onMouseEnter={handleMouseEnter}
            ref={ref}
            className={cn(
                "bg-transparent rounded-lg overflow-hidden group/card relative",
                className
            )}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    className="relative h-full w-full"
                    initial="initial"
                    whileHover={direction}
                    exit="exit"
                >
                    <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
                    <motion.div
                        variants={variants}
                        className="h-full w-full relative bg-gray-50 dark:bg-black bg-opacity-90 "
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}>
                        <LazyLoadImage
                            src={imageUrl}
                            effects="blur"
                            visibleByDefault={true}
                            alt="image"
                            className={cn(
                                "h-full w-full object-contain scale-[1.1]",
                                imageClassName
                            )}
                        />
                    </motion.div>
                    <motion.div
                        variants={textVariants}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className={cn(
                            "text-white absolute bottom-4 left-4 z-40",
                            childrenClassName
                        )}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

const variants = {
    initial: {
        x: 0,
    },

    exit: {
        x: 0,
        y: 0,
    },
    top: {
        y: 20,
    },
    bottom: {
        y: -20,
    },
    left: {
        x: 20,
    },
    right: {
        x: -20,
    },
};

const textVariants = {
    initial: {
        y: 0,
        x: 0,
        opacity: 0,
    },
    exit: {
        y: 0,
        x: 0,
        opacity: 0,
    },
    top: {
        y: -20,
        opacity: 1,
    },
    bottom: {
        y: 2,
        opacity: 1,
    },
    left: {
        x: -2,
        opacity: 1,
    },
    right: {
        x: 20,
        opacity: 1,
    },
};
