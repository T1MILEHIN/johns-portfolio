import { useRef } from "react";
import { motion } from "framer-motion";
import tesOne from "../../../assets/images/name1.jpg";
import tesTwo from "../../../assets/images/name2.png";
import tesThree from "../../../assets/images/name3.jpg";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { fadeIn } from "../../variant";

const testimonials = [
    {
        id: 1,
        img: tesOne,
        name: "Emmanuel Oluwawole",
        position: "CEO, Clearwork",
        comment: "Johnbeloved excelled as supervisor and designer on Clearwork's project, delivering exceptional results. I highly recommend him for your design and supervision needs. Contact him today to elevate your project!",
    },
    {
        id: 2,
        img: tesTwo,
        name: "DAVID SOKEFUN",
        position: "CEO, KWE4 Africa",
        comment: "Johnbeloved is a DESIGN GENIUS! As a product/graphic designer at KWE4 Africa, he's consistently exceeded my expectations with his innovative and top-notch designs over the past 2 years. He's a rare gem - a true asset to any team!",
    },
    {
        id: 3,
        img: tesThree,
        name: "Michael Williams",
        position: "Lead UX designer, KWE4 Africa",
        comment: "Johnbeloved is a talented product/graphic designer who consistently delivers exceptional results. His attention to detail, creativity, and passion for design make him a valuable asset to any team.",
    },
]

const Testimonial = () => {
    const testimonialRef = useRef(null)
    return (
        <div className="relative z-30 p-4 overflow-hidden bg-white">
            <div className="text-center py-10">
                <h1 className="font-bold uppercase text-2xl md:text-3xl">Testimonials</h1>
            </div>
            <div className="relative md:hidden block py-10 md:px-0 px-16">
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
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div>
                                <p className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">0{testimonial.id}</p>
                                <div className="py-6 md:py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <img src={testimonial.img} alt="" className="w-10" />
                                        <div className="flex flex-col gap-1 text-sm">
                                            <p><span className="font-bold">{testimonial.name.split(" ")[0]}</span> {testimonial.name.split(" ")[1]}</p>
                                            <p className="text-[#636363] text-xs">{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px] line-clamp-3">{testimonial.comment}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <motion.div ref={testimonialRef} className="md:flex hidden justify-center items-center flex-wrap lg:flex-nowrap gap-16 md:gap-10 md:p-20">
                {testimonials.map((testimonial) => (
                    <motion.div key={testimonial.id}>
                        <motion.p variants={fadeIn("right", 0.1 * testimonial.id, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="text-[#C6C3C3] font-bold text-xl md:text-sm py-2">0{testimonial.id}</motion.p>
                        <motion.div variants={fadeIn("down", 0.2 * testimonial.id, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5 }} className="py-6 md:py-12 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={testimonial.img} alt="" className="size-14 object-cover rounded-xl" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <p><span className="font-bold">{testimonial.name.split(" ")[0]}</span> {testimonial.name.split(" ")[1]}</p>
                                    <p className="text-[#636363] text-xs">{testimonial.position}</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-9 md:leading-7 text-base md:text-[12px] line-clamp-4">{testimonial.comment}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Testimonial