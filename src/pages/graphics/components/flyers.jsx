import { motion } from "framer-motion";
import HoverEffect from "../../../components/custom/hoverEffect";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.5,
        },
    },
};

const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible:(i)=> ({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 200, duration: 0.5, delay: i * 0.2 } })
};

const images = [
    { id: 1, image: 'https://www.dropbox.com/scl/fi/52lzwpghd5chyuv3ivcu0/Artboard-1-copy-1.png?rlkey=bh1ih36ryvbanet6st5ffw1cz&st=ajztxrd4&raw=1' },
    { id: 2, image: 'https://www.dropbox.com/scl/fi/boi7ogbaetjm19w2g3vg1/Artboard-1-copy-4.png?rlkey=6rpwrh8xcwd9wt8ur2mxh2ddi&st=uwibhebk&raw=1' },
    { id: 3, image: 'https://www.dropbox.com/scl/fi/pxchkvbjkegr2dmiipm57/BTS-special-seminar.png?rlkey=te8dpwxjbl6e86w1pti1cbiid&st=nc3q4pv4&raw=1' },
    { id: 4, image: 'https://www.dropbox.com/scl/fi/s05vzqh38be519h65005a/Business-Management-Training.png?rlkey=cc24gsj84pa8d65ny6vm2ev3g&st=7sbcxi68&raw=1' },
    { id: 5, image: 'https://www.dropbox.com/scl/fi/96xhm9am68y3x4y9mk8eg/Desktop-57.png?rlkey=bbsv0zmndnc3yj7aeaikojqx7&st=z5bgolwz&raw=1' },
    { id: 6, image: 'https://www.dropbox.com/scl/fi/dk1ojkn9gvp0m8ewh6j2m/Desktop-59.png?rlkey=zas7cm9r4zpid20h4k86mgnwe&st=ulxbadk4&raw=1' },
    { id: 7, image: 'https://www.dropbox.com/scl/fi/3140ft7p9bhdfce7i56ig/ekrem-1.png?rlkey=tiqfcusjk557w4g4po9u0vwz0&st=z97mftyp&raw=1' },
    { id: 8, image: 'https://www.dropbox.com/scl/fi/hhlvdr9bjhzbbxi9kiydb/Foursquare.png?rlkey=m4x605zag5etc73g7k60reb6e&st=ibbhh1v0&raw=1' },
    { id: 9, image: 'https://www.dropbox.com/scl/fi/3f95ouqgm21rj2v4fkv09/Frame-13.png?rlkey=r0dho5310mnxk90h5b5c5opbr&st=0mfq6gux&raw=1' },
    { id: 10, image: 'https://www.dropbox.com/scl/fi/r8gfb87r0ug5c4g446q1r/Frame-1532.png?rlkey=7p79en49ujia5xhqqrsus7z71&st=eef4r9rf&raw=1' },
    { id: 11, image: 'https://www.dropbox.com/scl/fi/t8hacg80c2kugpotxkkoq/HIGHER-GROUND-COMMUNITY.png?rlkey=gr5252i81hzifwt4zcsfryyr6&st=5wgjbjon&raw=1' },
    { id: 12, image: 'https://www.dropbox.com/scl/fi/2qp88cpckq1ksowytsczl/LIVE-PRAISE-CONNECT.png?rlkey=lqtzykzbkhnazk774j5drgdxf&st=vb5mnw99&raw=1' },
    { id: 13, image: 'https://www.dropbox.com/scl/fi/9d8alznn2tmazqmtvbbzs/Menu.png?rlkey=e7mowp7gdnx00n8l1gzdhn5m8&st=q07z7w45&raw=1' },
    { id: 14, image: 'https://www.dropbox.com/scl/fi/azk2aa01epgiaeom4ojj6/monibite-2.png?rlkey=i0gmhsa0ki89qtxcxcml85jf1&st=ao5xtax0&raw=1' },
    { id: 15, image: 'https://www.dropbox.com/scl/fi/d583nik4ajwg3v7ultx69/PGA-carol.png?rlkey=ltm2dcxfbranyqmjixghk7zmv&st=lesevbsc&raw=1' },
]

const Flyers = () => {
    return (
        <div
            className="md:p-20 p-4">
            <h1 className="text-center mx-auto lg:w-[1023px] font-mediumn font-bold">GRAPHICS DESIGN</h1>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="md:py-20 py-5">
                <motion.div className="flex lg:flex-nowrap flex-wrap gap-3 w-full">
                    {images.map((image, index) => index < 5 && (
                        <motion.img loading="lazy" custom={index} key={image.id} variants={imageVariants} className="w-32 object-cover flex-1" src={image.image} alt="" />
                    ))}
                </motion.div>
            </motion.div>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="md:py-20 py-5">
                <motion.div className="flex lg:flex-nowrap flex-wrap gap-3 w-full">
                {images.map((image, index) => (index > 4 && index < 10) && (
                        <motion.img loading="lazy" custom={index} key={image.id} variants={imageVariants} className="w-32 object-cover flex-1" src={image.image} alt="" />
                    ))}
                </motion.div>
            </motion.div>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="md:py-20 py-5">
                <motion.div className="flex lg:flex-nowrap flex-wrap gap-3 w-full">
                {images.map((image, index) => index > 9 && (
                        <motion.img custom={index} key={image.id} variants={imageVariants} className="w-32 object-cover flex-1" src={image.image} alt="" />
                    ))}
                </motion.div>
            </motion.div>
            <HoverEffect Z={50} rotationRange={20} style={{ width: "fit-content", margin: "0 auto" }}>
                <motion.div
                    className="ml-auto button black_hover rounded-[40px] bg-black text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <HoverEffect Z={50} rotationRange={20} style={{ width: "fit-content" }}>
                        <div className="button">More Works</div>
                    </HoverEffect>
                </motion.div>
            </HoverEffect>
        </div>
    )
}

export default Flyers