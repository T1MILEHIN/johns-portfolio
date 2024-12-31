import { motion, useMotionValue } from "framer-motion";
import img1 from "../../../assets/images/works-images/F.jpg"
import img2 from "../../../assets/images/works-images/hga.jpg"
import img3 from "../../../assets/images/works-images/cocacola.jpg"
import img4 from "../../../assets/images/works-images/coursemigo.jpg"
import img5 from "../../../assets/images/works-images/A.jpg"
import HoverEffect from "../../../components/custom/hoverEffect";
import { useState } from "react";

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
].map((n, idx) => ({ ...n, id: idx + 1 }));

const WorkMobile = () => {
    const [selected, setSelected] = useState(0)
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mousePosition.x.set(e.clientX - rect.left - 100);
        mousePosition.y.set(e.clientY - rect.top - 200);
    }
    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 ">
            {works.map((img, index) => (
                <div key={index} className="relative"
                    onMouseMove={
                        (e) => {
                            handleMouseMove(e);
                        }
                    }
                    onMouseEnter={(e) => {
                        handleMouseMove(e);
                        setSelected(img.id)
                    }}
                >
                    <motion.img
                        style={{
                            backgroundColor: img.color
                        }}
                        src={img.component}
                        alt="" className={`relative w-full h-[298px] object-contain p-7`} />
                        {img.id === selected && <div className="absolute grid place-content-center inset-0">
                            <HoverEffect Z={30} rotationRange={10} style={{ width: "fit-content" }}>
                                <motion.button 
                                style={{
                                    position: 'absolute',
                                    top: mousePosition.y,
                                    left: mousePosition.x,
                                    transition: 'all 200ms 10ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    pointerEvents: "none",
                                    zIndex: 10000,
                                }}

                                className="w-20 h-20 grid place-content-center cursor-pointer p-4 rounded-full z-10 bg-darkbg text-white font-bold">
                                    <HoverEffect Z={10} rotationRange={20} style={{ width: "fit-content" }}>
                                        <div className="button">view</div>
                                    </HoverEffect>
                                </motion.button>
                            </HoverEffect>
                        </div>}
                </div>
            ))}
        </div>
    )
}

export default WorkMobile