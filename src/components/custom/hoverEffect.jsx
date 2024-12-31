import { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import PropTypes from 'prop-types';


const HoverEffect = ({ rotationRange = 32.5, children, style, Z, ...props }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * rotationRange;
        const mouseY = (e.clientY - rect.top) * rotationRange;

        const halfRotationRange = rotationRange / 2;

        const rX = (mouseY / height - halfRotationRange) * -1;
        const rY = mouseX / width - halfRotationRange;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
                ...style,
            }}
            whileHover={{
                z: Z,
                rotateX: rotationRange,
                rotateY: rotationRange,
                transition: { duration: 0.3 }
            }}
            {...props}
            className="relative"
        >
            <div
                style={{
                    transform: `translateZ(${Z || 75}px)`,
                }}
            >
                {children}
            </div>
        </motion.div>
    )
}

HoverEffect.propTypes = {
    rotationRange: PropTypes.any,
    style: PropTypes.any,
    children: PropTypes.any,
    Z: PropTypes.any,
}

export default HoverEffect;