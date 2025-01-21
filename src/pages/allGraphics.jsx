/* eslint-disable react-refresh/only-export-components */
import transition from "../transition"
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";

const AllGraphics = () => {
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
            <div className="pt-32 px-20">
                <div className="md:block hidden">
                    <h1 className="font-bold text-[64px] leading-[83.2px] font-specify_exp_med py-10">Graphic Designs Library</h1>
                    <div className="flex items-center gap-[18.61px]">
                        <Button onClick={(e) => handleCategories(e, "FLYER")} className={`${CATEGORY === "All" ? "bg-black text-white" : ""} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 px-10`}>Flyer Design</Button>
                        <Button onClick={(e) => handleCategories(e, "LOGO")} className={`${CATEGORY === "LOGO" ? "bg-black text-white" : ""} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 px-10`}>Logo Design</Button>
                    </div>
                    <div className="py-10">

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default transition(AllGraphics);