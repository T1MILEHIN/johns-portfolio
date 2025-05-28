import { useRef } from "react";
import { motion } from "framer-motion";
import tesOne from "../../../assets/images/test-one.png";
import tesTwo from "../../../assets/images/test-two.png";
import tesThree from "../../../assets/images/test-three.png";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';



import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { fadeIn } from "../../variant";

const Testimonial = () => {
    const testimonialRef = useRef(null)
  return (
    <div className="relative p-4 overflow-hidden z-40">
                <div className="text-center py-10">
                    <h1 className="font-bold uppercase text-2xl md:text-3xl">Testimonials</h1>
                </div>
                <div className="relative md:hidden block py-10">
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div>
                                <p className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">01</p>
                                <div className="py-6 md:py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <img src={tesOne} alt="" className="w-10" />
                                        <div className="flex flex-col gap-1 text-sm">
                                            <p className="font-bold">John Doe</p>
                                            <p className="text-[#636363] text-xs">CEO, XYZ Corporation</p>
                                        </div>
                                    </div>
                                    <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px] line-clamp-3">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="origin-center">
                                <p className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">02</p>
                                <div className="py-6 md:py-12 border-t-2 border-b border-[#C6C3C3] flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <img src={tesTwo} alt="" className="w-16" />
                                        <div className="flex flex-col gap-1 text-sm">
                                            <p className="font-bold">Sarah Lee</p>
                                            <p className="text-[#636363] text-xs">Manager, E-commerce Company</p>
                                        </div>
                                    </div>
                                    <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px] line-clamp-3">Johnbeloved optimized our website for conversions with their UI/UX expertise. Their graphics captured our brand essence perfectly. Highly recommended for any design project.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <p className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">03</p>
                                <div className="py-6 md:py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <img src={tesThree} alt="" className="w-10" />
                                        <div className="flex flex-col gap-1 text-sm">
                                            <p className="font-bold">Michael Johnson </p>
                                            <p className="text-[#636363] text-xs">Founder, Tech Startup Co.</p>
                                        </div>
                                    </div>
                                    <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px] line-clamp-3">designs boosted our platform&apos;s engagement significantly. Their ability to execute complex concepts sets them apart. A designer who delivers results.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <motion.div ref={testimonialRef} className="md:flex hidden justify-center items-center flex-wrap lg:flex-nowrap gap-16 md:gap-10 md:p-20">
                    <motion.div>
                        <motion.p variants={fadeIn("right", 0.1, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">01</motion.p>
                        <motion.div variants={fadeIn("down", 0.2, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="py-6 md:py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-[#636363] text-xs">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px] line-clamp-3">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </motion.div>
                    </motion.div>
                    <motion.div className="origin-center">
                        <motion.p variants={fadeIn("right", 0.2, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">02</motion.p>
                        <motion.div variants={fadeIn("down", 0.3, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="py-6 md:py-12 border-t-2 border-b border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesTwo} alt="" className="w-10" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-[#636363] text-xs">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px] line-clamp-3">Johnbeloved optimized our website for conversions with their UI/UX expertise. Their graphics captured our brand essence perfectly. Highly recommended for any design project.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div>
                        <motion.p variants={fadeIn("right", 0.3, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">03</motion.p>
                        <motion.div variants={fadeIn("down", 0.4, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="py-6 md:py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesThree} alt="" className="w-10" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-[#636363] text-xs">Founder; Tech Startup Co</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px] line-clamp-3">Johnbeloved Designs boosted our platform&apos;s engagement significantly. His ability to execute complex concepts sets him apart. A designer who delivers results.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
  )
}

export default Testimonial