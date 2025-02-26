/* eslint-disable react-refresh/only-export-components */
import transition from "../../transition"
import Footer from "../../components/footer";
import { Button } from "@/components/ui/button";
import { useSearchParams, useLocation, Outlet } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';

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
                    <Outlet context={{handleCategories, CATEGORY}} />
                </div>
            </div>
            <Footer />
        </>
    )
}


export default transition(AllGraphics, "Logos And Flyers");