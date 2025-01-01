import tesOne from "../assets/images/FOOTER.jpg";
// import footerImg from "../assets/images/footer-img.jpg";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="md:px-32 px-4 bg-darkbg text-white">
            <div className="md:pt-20 p-2">
                <div className="flex md:flex-nowrap flex-wrap items-end lg:gap-20">
                    <div className="w-fit rounded-3xl overflow-hidden">
                        <img src={tesOne} alt="" className="w-52" />
                    </div>
                    <h1 className="font-specify_medium tracking-wide md:w-[476px] w-full text-5xl md:text-[64px] md:leading-[76.8px] text-text_gray">Let&apos;s Work Together</h1>
                </div>
            </div>

            <div className="relative text-right mt-10 mb-20">
                <button className="absolute md:right-20 right-10 top-1/2 -translate-y-1/2 z-10 button blue_black_hover rounded-[40px] bg-blue text-white">Get In Touch</button>
                <hr className="z-[2] w-full"></hr>
            </div>

            <div className="flex gap-4 mt-20 px-2 md:px-0">
                <Button className="border border-text_gray text-text_gray text-[10.78px] bg-transparent rounded-[35px] md:py-7 px-6">oluwawolejohnbelovedayomide2@gmail.com</Button>
                <Button className="border border-text_gray text-text_gray text-[12.57px] bg-transparent rounded-[35px] md:py-7 px-6">+234 9063 606 002</Button>
            </div>

            <div>
                <div className="px-2 md:pt-20 md:pb-10 pt-10 pb-5">
                    <h1 className="font-bold text-[#636363]">SOCIALS</h1>
                    <div className="flex justify-between text-xs ">
                        <ul className="flex md:gap-10 gap-4">
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Behance</li>
                        </ul>
                        <ul>
                            <li className="font-medium text-[#636363]">2024 Jayzleux. All rights reserved.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer