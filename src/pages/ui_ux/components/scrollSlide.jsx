import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import VideoComponent from './videoPlayer';
import PropTypes from 'prop-types';

const videos = [
    { id: 1, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740060001/JOHN%27s%20PORT/glgclk62qardwmp6kt56.mp4' },
    { id: 2, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740060002/JOHN%27s%20PORT/ezbc9wwc6glkctuxwufz.mp4' },
    { id: 3, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740060001/JOHN%27s%20PORT/zn5oe5sa2zh1nfiw2k6k.mp4' },
    { id: 4, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059996/JOHN%27s%20PORT/ubi1x9zxbblzpujp8vog.mp4' },
    { id: 5, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059999/JOHN%27s%20PORT/lmdimfjrolakbtwdknqr.mp4' },
    { id: 6, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059997/JOHN%27s%20PORT/bxiqlcgrq5klqqtdstsa.mp4' },
    { id: 7, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059997/JOHN%27s%20PORT/bagvlwe1a1juijppz8uv.mp4' },
    { id: 8, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059998/JOHN%27s%20PORT/xjz7nx6zhaz8sneeos6k.mp4' },
    { id: 9, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059997/JOHN%27s%20PORT/wbebebhda9chizpusyks.mp4' },
    { id: 10, url: 'https://res.cloudinary.com/dqrhl6zcc/video/upload/v1740059996/JOHN%27s%20PORT/txpag0mf2ig03aiuwseq.mp4' },
];

const VideoCard = ({ video, className = "" }) => (
    <div className={`relative min-w-[420px] h-[300px] bg-black rounded-md overflow-hidden shadow-lg ${className}`}>
        <div className="absolute inset-0">
            <VideoComponent url={video.url} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
);

const ScrollSlide = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const videoWidth = 420;
    const gap = 20;
    const totalWidth = (videoWidth + gap) * 5;

    // More dynamic transform ranges
    const x = useTransform(scrollYProgress, [0, 1], [0, -totalWidth * 0.6]);
    const xReverse = useTransform(scrollYProgress, [0, 1], [-totalWidth * 0.3, 0]);

    // Smoother spring configuration
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const smoothX = useSpring(x, springConfig);
    const smoothXReverse = useSpring(xReverse, springConfig);

    // Split videos into two rows
    const firstRowVideos = videos.slice(0, 7);
    const secondRowVideos = videos.slice(5);

    return (
        <section
            ref={targetRef}
            className="relative flex items-center h-[200vh] py-0 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
            aria-label="Video showcase with scroll animation"
        >
            <div className="sticky top-0 overflow-hidden flex items-center h-screen w-full">
                <div className="flex flex-col gap-5 w-full px-4">
                    <motion.div
                        style={{ x: smoothX }}
                        className="flex gap-5 will-change-transform"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {firstRowVideos.map((video, index) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                className="hover:scale-105 transition-transform duration-300"
                                style={{
                                    animationDelay: `${index * 0.1}s`
                                }}
                            />
                        ))}
                    </motion.div>

                    <motion.div
                        style={{ x: smoothXReverse }}
                        className="flex gap-5 will-change-transform"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {secondRowVideos.map((video, index) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                className="hover:scale-105 transition-transform duration-300"
                                style={{
                                    animationDelay: `${(index + 5) * 0.1}s`
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

VideoCard.propTypes = {
    video: PropTypes.any,
    className: PropTypes.any,
}

export default ScrollSlide;