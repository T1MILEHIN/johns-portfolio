import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import ReactPlayer from 'react-player'

const videos = [
    { id: 1, url: 'https://www.dropbox.com/scl/fi/0jhi10x2odvndlvaqw5ht/art.mp4?rlkey=g1cluvwtcp932jrbb5z2mciv5&st=0imcx1hb&dl=0'},
    { id: 2, url: 'https://www.dropbox.com/scl/fi/q9y5pylmf0jfprdwzyybz/Untitled-video-Made-with-Clipchamp.mp4?rlkey=8tzio6dcsf0snqckjikc6k5j9&st=5r0qrxh7&dl=0'},
    { id: 3, url: 'https://www.dropbox.com/scl/fi/gldar4hxtvdjsfptov0hw/Recording-2024-11-29-112357.mp4?rlkey=banwrm0pgqo44v5bl28p9hb1z&st=xs033ynx&dl=0'},
    { id: 4, url: 'https://www.dropbox.com/scl/fi/aqki7zg8ht85luduhzjv8/Recording-2024-11-29-112747.mp4?rlkey=kqcgb4mzsseidpp1idrhf5mgv&st=e6yaai4k&dl=0'},
    { id: 5, url: 'https://www.dropbox.com/scl/fi/x2iae5vgzx9v3h4ll2cj1/nike.mp4?rlkey=qh1w7y4i0lomjt4m038p9ef97&st=zcufe1u9&dl=0'},
    { id: 6, url: 'https://www.dropbox.com/scl/fi/q9y5pylmf0jfprdwzyybz/Untitled-video-Made-with-Clipchamp.mp4?rlkey=8tzio6dcsf0snqckjikc6k5j9&st=3snm928b&dl=0'},
    { id: 7, url: 'https://www.dropbox.com/scl/fi/aqki7zg8ht85luduhzjv8/Recording-2024-11-29-112747.mp4?rlkey=kqcgb4mzsseidpp1idrhf5mgv&st=odvfruok&dl=0'},
    { id: 8, url: 'https://www.dropbox.com/scl/fi/gjblzfkfcqhpaluwbpjgl/Untitled-Spline-Google-Chrome-2024-03-18-20-37-40.mp4?rlkey=26v0twrx96b15wv5yhalyn7f8&st=7f7hu12w&dl=0'},
    { id: 9, url: 'https://www.dropbox.com/scl/fi/90p2bab6riwh5f04iggq4/tesla.mp4?rlkey=amw3dholecg4vo7k8wy57eeok&st=etldv9ff&dl=0'},
    { id: 10, url: 'https://www.dropbox.com/scl/fi/iujt6jpvhkeoiquj5nqay/Screen-Recording-2024-11-15-101842.mp4?rlkey=1ucbsob45kozjxuqo0moo309v&st=oijwml29&dl=0'},
]

const ScrollSlide = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    const xReverse = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
    return (
        <div ref={targetRef} className="relative h-[400vh] py-[30vh]">
            <div className="sticky top-0 right-0 left-0 overflow-hidden flex items-center h-screen">
                <div className="flex flex-col gap-5">
                    <motion.div style={{ x }} className="flex gap-5">
                        {videos?.map((vid, id)=> id < 5 && (
                            <div key={vid.id} className="relative w-[420px] h-[237px] aspect-square bg-video_bg">
                                <div className="absolute top-[30px] bottom-[30px] right-0 left-0">
                                    <ReactPlayer style={{objectFit: 'cover'}} width={`100%`} height={`100%`} playing={true} loop={true} muted={true} url={vid.url} />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div style={{ x: xReverse }} className="flex gap-5">
                        {videos?.map((vid, id)=> id > 5 && (
                            <div key={vid.id} className="relative w-[420px] h-[237px] aspect-square bg-video_bg">
                                <div className="absolute top-[30px] bottom-[30px] right-0 left-0">
                                    <ReactPlayer width={`100%`} height={`100%`} playing={true} loop={true} muted={true} url={vid.url} />
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