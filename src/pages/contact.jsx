/* eslint-disable react-refresh/only-export-components */
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import tesOne from "../assets/images/FOOTER.jpg";
import transition from "../transition";

const Contact = () => {
    return (
        <div className="pt-32 flex flex-wrap md:flex-nowrap md:px-20 lg:pt-36 md:gap-32 px-4 bg-darkbg text-white">
            <div className="lg:flex-[2] flex-1">
                <div className="">
                    <h1 className="font-specify_exp_med font-semibold text-[64px] md:w-[564px] text-text_gray">Let&apos;s Work Together</h1>
                </div>
                <div>
                    <h1 className="font-bold text-base border-b border-[#1b1b1b] py-2">How can i help you? </h1>
                    <div className="py-10">
                        <form action="">
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-3 md:gap-6 items-end">
                                    <p className="font-bold text-[#1b1b1b]">01</p>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="font-bold" htmlFor="">What&apos;s your name?</label>
                                        <input type="text" name="" id="" placeholder="James Bond" className="pl-2 w-full h-12 bg-transparent border-b-2 border-[#1b1b1b]" />
                                    </div>
                                </div>
                                <div className="flex gap-3 md:gap-6 items-end">
                                    <p className="font-bold text-[#1b1b1b]">02</p>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="font-bold" htmlFor="">What&apos;s your email?</label>
                                        <input type="email" name="" id="" placeholder="Jamesbond@gmail.com" className="pl-2 w-full h-12 bg-transparent border-b-2 border-[#1b1b1b]" />
                                    </div>
                                </div>
                                <div className="flex gap-3 md:gap-6 items-end">
                                    <p className="font-bold text-[#1b1b1b]">03</p>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="font-bold" htmlFor="">What&apos;s the name of your organization?</label>
                                        <input type="text" name="" id="" placeholder="James Bond & CO" className="pl-2 w-full h-12 bg-transparent border-b-2 border-[#1b1b1b]" />
                                    </div>
                                </div>
                                <div className="flex gap-3 md:gap-6 items-end">
                                    <p className="font-bold text-[#1b1b1b]">04</p>
                                    <div className="flex-1 flex flex-col gap-2 border-b-2 border-[#1b1b1b]">
                                        <label className="font-bold" htmlFor="">What&apos;s services are you looking for?</label>
                                        <Select className="">
                                            <SelectTrigger className="w-full h-12 outline-none border-none">
                                                <SelectValue placeholder="Graphic Design, Website Design" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-none bg-slate-900 text-white">
                                                <SelectGroup>
                                                    <SelectLabel>Services</SelectLabel>
                                                    <SelectItem className="cursor-pointer hover:scale-[1.01] duration-200" value="graphic-design">Graphic Design</SelectItem>
                                                    <SelectItem className="cursor-pointer hover:scale-[1.01] duration-200" value="website-design">Website Design</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex gap-3 md:gap-6 items-end">
                                    <p className="font-bold text-[#1b1b1b]">05</p>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="font-bold" htmlFor="">Your message?</label>
                                        <textarea type="text" name="" id="" placeholder="Hello john i want you to help me with" className="resize-none p-2 w-full bg-transparent border-b-2 border-[#1b1b1b]"></textarea>
                                    </div>
                                </div>
            
                            </div>
                            <div className="relative text-right my-32 md:py-0">
                                <button className="absolute right-20 top-1/2 -translate-y-1/2 z-10 button rounded-[40px] bg-blue blue_black_hover text-white">Get In Touch</button>
                                <hr className="text-[#1b1b1b] z-[2] w-full" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-5">
                <div className="rounded-3xl overflow-hidden w-fit">
                    <img className="w-44 bg-white" src={tesOne} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-[#636363] text-[12px]">Contact Address</h2>
                    <ul className="leading-[30px] text-[15px]">
                        <li>oluwawolejohnbelovedayomide2@gmail.com </li>
                        <li>+234 9063 606 002</li>
                        <li>Lagos, Nigeria</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[#636363] text-[12px]">SOCIALS</h1>
                    <ul className="leading-[30px] text-[13px]">
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>Behance</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default transition(Contact, "Contact");