/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import transition from "../../transition"
import Footer from "../../components/footer";
import { Button } from "@/components/ui/button";
import { useSearchParams, useLocation, Outlet, Link } from "react-router-dom";
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
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <div className={`${pathname === "/alldesigns/logodesigns" && "bg-black text-bodybg"} pt-32 px-4 md:px-20`}>
                <div>
                    <div className="py-10">
                        <h1 className="md:w-[686px] w-full font-bold text-[65.51px] md:text-[64px] leading-[83.2px] font-specify_exp_med py-10">Graphic Designs Library</h1>
                        <div className="flex items-center gap-2 md:gap-[18.61px]">
                            <Link to="/alldesigns">
                                <Button className={`${pathname === "/alldesigns" ? "bg-black text-white hover:bg-white hover:text-black" : pathname === "/alldesigns/logodesigns" ? "hover:bg-white hover:text-black" : "bg-white hover:bg-black hover:text-white"} border border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>Flyer Design</Button>
                            </Link>
                            <Link to="logodesigns">
                                <Button className={`${pathname === "/alldesigns/logodesigns" ? "bg-bodybg text-black" : "bg-white"} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-[25px] px-10 shadow-none`}>Logo Design</Button>
                            </Link>
                        </div>
                    </div>
                    <hr className="w-full" />
                    <Outlet context={{handleCategories, CATEGORY}} />
                </div>
            </div>
            <Footer />
        </>
    )
}


export default transition(AllGraphics, "Logos And Flyers");