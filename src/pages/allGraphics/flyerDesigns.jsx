import { Flyers } from "../../utils/flyers";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";

const FlyerDesigns = () => {
    const { handleCategories, CATEGORY } = useOutletContext()
    return (
        <div className="py-10 flex flex-col gap-10 w-full">

            <div className="flex flex-wrap items-center gap-4 md:gap-[18.61px] w-full">
                <Button onClick={(e) => handleCategories(e, "All")} className={`${CATEGORY === "All" ? "bg-black text-white" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>All</Button>
                <Button onClick={(e) => handleCategories(e, "Codar Design")} className={`${CATEGORY === "Codar Design" ? "bg-black text-white" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>Codar Design</Button>
                <Button onClick={(e) => handleCategories(e, "MyPromosphere Design")} className={`${CATEGORY === "MyPromosphere Design" ? "bg-black text-white" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>MyPromosphere Design</Button>
                <Button onClick={(e) => handleCategories(e, "Kwe4 Designs")} className={`${CATEGORY === "Kwe4 Designs" ? "bg-black text-white" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>Kwe4 Designs</Button>
            </div>

            <AnimatePresence mode="wait">
                {CATEGORY === "All" &&
                    <motion.div
                        key="all"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ type: "spring", duration: 0.3 }}
                    >
                        <div className="py-10 grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                            {Flyers?.home?.map((img, index) => (
                                <LazyLoadImage effect="blur" key={index} src={img} className="w-full md:aspect-square md:object-cover" alt="" />
                            ))}
                        </div>
                        <hr />
                        <div className="py-10 grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                            {Flyers?.codar?.map((img, index) => (
                                <LazyLoadImage effect="blur" key={index} src={img} className="w-full md:aspect-square md:object-cover" alt="" />
                            ))}
                        </div>
                        <hr />
                        <div className="py-10 grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                            {Flyers?.myPromoSphere?.map((img, index) => (
                                <LazyLoadImage effect="blur" key={index} src={img} className="w-full md:aspect-square md:object-cover" alt="" />
                            ))}
                        </div>
                        <hr />
                        <div className="py-10 grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                            {Flyers?.kwe?.map((img, index) => (
                                <LazyLoadImage effect="blur" key={index} src={img} className="w-full md:aspect-square md:object-cover" alt="" />
                            ))}
                        </div>
                        <hr />
                    </motion.div>
                }
                {
                    CATEGORY === "Codar Design" &&
                    <motion.div
                        key="codar"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ type: "spring", duration: 0.3 }}
                        className="py-10 grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        {Flyers?.codar?.map((img, index) => (
                            <LazyLoadImage effect="blur" key={index} src={img} className="w-full md:aspect-square md:object-cover" alt="" />
                        ))}
                    </motion.div>
                }
                {
                    CATEGORY === "MyPromosphere Design" &&
                    <motion.div
                        key="mypromosphere"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ type: "spring", duration: 0.3 }}
                        className="py-10 grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        {Flyers?.myPromoSphere?.map((img, index) => (
                            <LazyLoadImage effect="blur" key={index} src={img} className="w-full md:aspect-square md:object-cover" alt="" />
                        ))}
                    </motion.div>
                }
                {
                    CATEGORY === "Kwe4 Designs" &&
                    <motion.div
                        key="kwe"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ type: "spring", duration: 0.3 }}
                        className="py-10 grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        {Flyers?.kwe?.map((img, index) => (
                            <LazyLoadImage effect="blur" key={index} src={img} className="w-full md:aspect-square md:object-cover" alt="" />
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
            <hr />
        </div>
    )
}

export default FlyerDesigns;