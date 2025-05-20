import { Link, useLocation } from "react-router-dom";
import tesOne from "../assets/images/FOOTER.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Footer = ({footerRef, smoothY, opacity}) => {
    const { pathname } = useLocation();
    return (
        <div className={`z-30 relative ${pathname === "/alldesigns/logodesigns" ? "bg-bodybg text-darkbg border-darkbg" : "bg-darkbg text-text_gray border-text_gray"}`}>
            <motion.footer ref={footerRef} style={{y: smoothY, opacity}} className={`z-30 md:px-32 px-4 pt-16 ${pathname === "/alldesigns/logodesigns" ? "bg-bodybg text-darkbg border-darkbg" : "bg-darkbg text-text_gray border-text_gray"}`}>
                <div className="md:pt-20 p-2">
                    <div className="flex  items-end lg:gap-20 gap-3">
                        <div className="w-fit rounded-3xl overflow-hidden">
                            <img src={tesOne} alt="" className="w-[109px] md:w-52 filter grayscale" />
                        </div>
                        <h1 className="font-specify_exp_med tracking-wide md:w-[476px] w-full text-3xl md:text-5xl lg:text-[64px] md:leading-[76.8px]">Let&apos;s Work Together</h1>
                    </div>
                </div>
                <div className="relative text-right mt-28 md:mt-20 md:mb-20 mb-28">
                    <div>
                        <Link to="/contact">
                            <button className="absolute md:right-20 right-0 top-1/2 -translate-y-1/2 z-10 button blue_black_hover rounded-[40px] bg-blue">Get In Touch</button>
                        </Link>
                    </div>
                    <hr className="z-[2] w-full"></hr>
                </div>
                <div className="flex md:flex-row flex-col gap-4 mt-20 px-2 md:px-0">
                    <Button className="blue_footer_hover duration-300 hover:border-blue border text-xs md:text-[10.78px] bg-transparent rounded-[45px] py-10 md:py-7 md:px-6">oluwawolejohnbelovedayomide2@gmail.com</Button>
                    <Button className="blue_footer_hover duration-300 hover:border-blue border text-xs md:text-[12.57px] bg-transparent rounded-[45px] py-10 md:py-7 md:px-6">+234 9063 606 002</Button>
                </div>
                <div>
                    <div className="px-2 md:pt-20 md:pb-10 pt-10 pb-5">
                        <h1 className="text-sm font-bold text-[#636363] my-2">SOCIALS</h1>
                        <div className="flex lg:flex-row flex-col md:gap-0 gap-10 justify-between">
                            <ul className="flex md:gap-10 gap-4">
                                <li className="text-sm md:text-xs relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300 cursor-pointer">Instagram</li>
                                <li className="text-sm md:text-xs relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300 cursor-pointer">LinkedIn</li>
                                <li className="text-sm md:text-xs relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300 cursor-pointer">Behance</li>
                            </ul>
                            <ul>
                                <li className="content-center text-sm md:text-base font-medium text-[#636363]">2024 Jayzleux. All rights reserved.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </div>
    )
}

Footer.propTypes = {
    footerRef: PropTypes.any,
    smoothY: PropTypes.any,
    opacity: PropTypes.any,
}

export default Footer