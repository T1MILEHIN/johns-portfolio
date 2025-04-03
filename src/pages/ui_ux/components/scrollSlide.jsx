import { useRef } from 'react';
import { motion, useScroll as S, useTransform, useSpring } from "framer-motion";
import VideoComponent from './videoPlayer';

const videos = [
    { id: 1, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740060001/JOHN%27s%20PORT/glgclk62qardwmp6kt56.mp4'},
    { id: 2, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740060002/JOHN%27s%20PORT/ezbc9wwc6glkctuxwufz.mp4'},
    { id: 3, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740060001/JOHN%27s%20PORT/zn5oe5sa2zh1nfiw2k6k.mp4'},
    { id: 4, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059996/JOHN%27s%20PORT/ubi1x9zxbblzpujp8vog.mp4'},
    { id: 5, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059999/JOHN%27s%20PORT/lmdimfjrolakbtwdknqr.mp4'},
    { id: 6, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059997/JOHN%27s%20PORT/bxiqlcgrq5klqqtdstsa.mp4'},
    { id: 7, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059997/JOHN%27s%20PORT/bagvlwe1a1juijppz8uv.mp4'},
    { id: 8, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059998/JOHN%27s%20PORT/xjz7nx6zhaz8sneeos6k.mp4'},
    { id: 9, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059997/JOHN%27s%20PORT/wbebebhda9chizpusyks.mp4'},
    { id: 10, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059996/JOHN%27s%20PORT/txpag0mf2ig03aiuwseq.mp4'},
]

const ScrollSlide = () => {
    const targetRef = useRef(null);
    const { scrollYProgress: scrollSlideYProgress } = S({
        target: targetRef,
        offset: ["start start", "end end"],
    });
    
    const x = useTransform(scrollSlideYProgress, [0, 1], [0, -500]);
    const xReverse = useTransform(scrollSlideYProgress, [0, 1], [-400, 0]);
    const smoothX = useSpring(x, { stiffness: 130, damping: 90 });
    const smoothXReverse = useSpring(xReverse, { stiffness: 130, damping: 90 });

    return (
        <div ref={targetRef} className="relative h-[400vh] py-[30vh]">
            <div className="sticky top-0 overflow-hidden flex items-center h-screen">
                <div className="flex flex-col gap-5">
                    <motion.div style={{ x:smoothX }} className="flex gap-5">
                        {videos?.map((vid, id)=> id < 5 && (
                            <div key={vid.id} className="relative w-[420px] h-[300px] aspect-square bg-video_bg px-5/ md:px-10">
                                <div className="absolute top-[30px] bottom-[30px] right-0 left-0">
                                    <VideoComponent url={vid.url} />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div style={{ x: smoothXReverse }} className="flex gap-5">
                        {videos?.map((vid, id)=> id > 5 && (
                            <div key={vid.id} className="relative w-[420px] h-[300px] aspect-square bg-video_bg px-10">
                                <div className="absolute top-[30px] bottom-[30px] right-0 left-0">
                                    <VideoComponent url={vid.url} />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ScrollSlide