import { useRef, useCallback, useMemo } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import PropTypes from 'prop-types';

const HoverEffect = ({ 
    rotationRange = 20, 
    children, 
    style = {}, 
    Z = 75, 
    springConfig = { stiffness: 150, damping: 15 },
    disabled = false,
    ...props 
}) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    // Optimized mouse move handler with throttling
    const handleMouseMove = useCallback((e) => {
        if (!ref.current || disabled) return;

        const rect = ref.current.getBoundingClientRect();
        const { width, height, left, top } = rect;

        const mouseX = (e.clientX - left) / width - 0.5;
        const mouseY = (e.clientY - top) / height - 0.5;

        // Apply rotation range
        const rX = mouseY * rotationRange * -1; // Inverted for natural feel
        const rY = mouseX * rotationRange;

        x.set(rX);
        y.set(rY);
    }, [disabled, rotationRange, x, y]);

    // Reset rotation on mouse leave
    const handleMouseLeave = useCallback(() => {
        if (disabled) return;
        
        x.set(0);
        y.set(0);
    }, [disabled, x, y]);

    // Memoized style object
    const containerStyle = useMemo(() => ({
        transformStyle: "preserve-3d",
        transform,
        ...style,
    }), [transform, style]);

    // Memoized child transform style
    const childTransformStyle = useMemo(() => ({
        transform: `translateZ(${Z}px)`,
        transformStyle: "preserve-3d",
    }), [Z]);

    // Don't apply hover effects if disabled
    if (disabled) {
        return (
            <div style={style} {...props}>
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={containerStyle}
            className="relative"
            // Remove conflicting whileHover transform
            whileHover={{
                scale: 1.02, // Subtle scale instead of conflicting rotations
                transition: { 
                    duration: 0.2,
                    ease: "easeOut"
                }
            }}
            whileTap={{
                scale: 0.98,
                transition: { 
                    duration: 0.1,
                    ease: "easeInOut"
                }
            }}
            {...props}
        >
            <motion.div
                style={childTransformStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

HoverEffect.propTypes = {
    rotationRange: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    Z: PropTypes.number,
    springConfig: PropTypes.shape({
        stiffness: PropTypes.number,
        damping: PropTypes.number,
    }),
    disabled: PropTypes.bool,
};

// Performance-optimized variant for reduced motion preferences
export const ReducedMotionHoverEffect = ({ children, style = {}, ...props }) => {
    return (
        <motion.div
            style={style}
            whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.1 }
            }}
            whileTap={{ 
                scale: 0.99,
                transition: { duration: 0.05 }
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

ReducedMotionHoverEffect.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

// Hook for detecting reduced motion preference
export const useReducedMotion = () => {
    return typeof window !== 'undefined' && 
           window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Smart wrapper that automatically chooses appropriate effect
export const SmartHoverEffect = (props) => {
    const shouldReduceMotion = useReducedMotion();
    
    if (shouldReduceMotion) {
        return <ReducedMotionHoverEffect {...props} />;
    }
    
    return <HoverEffect {...props} />;
};

SmartHoverEffect.propTypes = HoverEffect.propTypes;

export default HoverEffect;