/* eslint-disable react-refresh/only-export-components */
import transition from "../transition"
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSearchParams, useLocation } from "react-router-dom";
import { Flyers } from "../utils/flyers";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion, AnimatePresence } from "framer-motion";

const AllGraphics = () => {
    const { pathname } = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    const CATEGORY = searchParams.get("CATEGORY") || "All";
    const handleCategories = (e, CATEGORY) => {
        e.preventDefault();
        if (CATEGORY !== "All") {
            setSearchParams({ CATEGORY });
        } else {
            setSearchParams({ CATEGORY: "All" });
        }
    };
    return (
        <>
            <div className="pt-32 px-5 md:px-20">
                <div className="">
                    <div className="py-10">
                        <h1 className="md:w-[686px] w-full font-bold text-[64px] leading-[83.2px] font-specify_exp_med py-10">Graphic Designs Library</h1>
                        <div className="flex items-center gap-[18.61px]">
                            <Button className={`${pathname === "/alldesigns" ? "bg-black text-white" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>Flyer Design</Button>
                            <Button className={`${CATEGORY === "LOGO" ? "bg-black text-white" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>Logo Design</Button>
                        </div>
                    </div>
                    <hr />
                    <div className="py-10 flex flex-col gap-10">
                        <div className="flex flex-wrap items-center gap-5 md:gap-[18.61px]">
                            <Button onClick={(e) => handleCategories(e, "All")} className={`${CATEGORY === "All" ? "bg-black text-white" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>All</Button>
                            <Button onClick={(e) => handleCategories(e, "Codar Design")} className={`${CATEGORY === "Codar Design" ? "bg-black text-white" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>Codar Design</Button>
                            <Button onClick={(e) => handleCategories(e, "MyPromosphere Design")} className={`${CATEGORY === "MyPromosphere Design" ? "bg-black text-white" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>MyPromosphere Design</Button>
                            <Button onClick={(e) => handleCategories(e, "Kwe4 Designs")} className={`${CATEGORY === "MyPromosphere Design" ? "bg-black text-white" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>Kwe4 Designs</Button>
                        </div>
                        <div className="grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                            {Flyers?.home?.map((img, index)=> (
                                <LazyLoadImage effect="blur" key={index} src={img} className="w-full md:aspect-square md:object-cover" alt="" />
                            ))}
                        </div>
                        <hr />
                        <div className="grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                            {Flyers?.codar?.map((img, index)=> (
                                <LazyLoadImage effect="blur" key={index} src={img} className="w-full md:aspect-square md:object-cover" alt="" />
                            ))}
                        </div>
                        <hr />
                        <div className="grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                            {Flyers?.myPromoSphere?.map((img, index)=> (
                                <LazyLoadImage effect="blur" key={index} src={img} className="w-full md:aspect-square md:object-cover" alt="" />
                            ))}
                        </div>

                        <hr />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default transition(AllGraphics, "Logos And Flyers");