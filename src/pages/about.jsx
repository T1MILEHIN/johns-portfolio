/* eslint-disable react-refresh/only-export-components */
import { useRef, useEffect } from "react"
import img from "../assets/images/about.jpg"
import profile_pic from "../assets/images/profile.png"
import Footer from "../components/footer"
import transition from "../transition"
import { motion } from "framer-motion"
import { fadeIn } from "./variant";

const About = () => {
  const footerRef = useRef();
  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div ref={footerRef} className="relative">
      <div className="lg:px-20 min-h-screen flex justify-center items-end">
        <div>
          <img className="w-full md:w-[700px] lg:w-[600px] mx-auto object-cover" src={profile_pic} alt="" />
          <hr className="border-[#636363]" />
        </div>
      </div>
      <div className="md:px-20">
        <div className="md:py-20 md:p-0 p-7">
          <h1 className="lg:w-[842px] w-full text-[20px] md:text-[40px] font-medium leading-[64px] font-specify_exp_med">Helping Brands Stand Out with Unique Design</h1>
        </div>
        <hr className="border-[#636363]" />
      </div>
      <div className="w-full overflow-hidden flex flex-wrap md:flex-nowrap gap-10 md:p-20 p-7">
        <motion.div variants={fadeIn("right", 0.2, 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5}} className="flex-1 flex flex-col gap-10 text-[#2E2A2A]">
          <p className="leading-8">As a passionate designer, I believe that effective design has the power to transform brands and businesses. My goal is to help you stand out in a crowded market with unique, tailored designs that capture your brand&apos;s essence and values.</p>
          <p  className="leading-8">With expertise in graphics and product design, I&apos;ll work closely with you to create stunning visuals and innovative solutions that drive results. From logos to branding, print to digital, I&apos;ll help you make a lasting impression on your audience.</p>
          <p className="font-bold">Let&apos;s collaborate to bring your brand to life and make it shine</p>
          <button className="ml-auto md:mx-auto z-10 button rounded-[40px] bg-blue text-white">Get In Touch</button>
        </motion.div>
        <motion.div variants={fadeIn("left", 0.3, 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5}} className="flex-1">
          <img src={img} className="w-full" alt="" />
        </motion.div>
      </div>

      <div className="md:p-20 p-4 relative bg-white">
        <h1 className="text-[55px]">My Services</h1>

        <motion.div className=" relative py-16 flex flex-wrap md:flex-nowrap gap-24 md:gap-10">
          <motion.div className="relative flex flex-col gap-5">
            <h2 className="font-medium text-2xl">Graphic Design</h2>
            <p className="text-[#2E2A2A] text-[15px] leading-[30px]">With a strong portfolio, I possess 5 years of extensive experience in graphics design, delivering high-quality visuals with precision expertise.</p>
            <motion.p variants={fadeIn("up", 0.1, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5}} className="font-bold absolute -bottom-40 text-[212px] text-[#63636386]">01</motion.p>
          </motion.div>
          <motion.div className="origin-center relative flex flex-col gap-5">
            <h2 className="font-medium text-2xl">UI/UX Design</h2>
            <p className="text-[#2E2A2A] text-[15px] leading-[30px]">Utilizing 5 years of expertise, I craft intuitive UI/UX designs that elevate user experiences, drive engagement, and fuel business growth.</p>
            <motion.p variants={fadeIn("up", 0.2, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5}} className="font-bold absolute -bottom-40 text-[212px] text-[#63636386]">02</motion.p>
          </motion.div>
          <motion.div className="relative flex flex-col gap-5">
            <h2 className="font-medium text-2xl">Design Tutoring</h2>
            <p className="text-[#2E2A2A] text-[15px] leading-[30px]">With 2years of experience, I empower students as a design instructor, teaching UI/UX, graphics design, and product design with passion.</p>
            <motion.p variants={fadeIn("up", 0.3, 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.5}} className="font-bold absolute -bottom-40 text-[212px] text-[#63636386]">03</motion.p>
          </motion.div>
        </motion.div>
      </div>


      <div className="md:p-20 p-4 relative bg-white">
        <h1 className="text-[55px] font-medium">Additional Skills</h1>
        <p className="text-[#2E2A2A] text-[15px] leading-[30px] md:leading-[20px]">In my 5years experience as a designer, I’ve been employed by different companies and worked together with various clients. Therefore, I’ve had the opportunity to explore more than one branch of design and built up a series of additional skills that I am now able to bring with me in a UX/UI role:</p>
        <ul className="py-5 list-disc list-inside text-[15px] leading-7">
          <li>Research Writing</li>
          <li>3d Design</li>
          <li>Designing on development tool (Framer and Webflow).</li>
        </ul>
      </div>


      <motion.div initial={{marginTop: -800}} whileInView={{marginTop: 0}} viewport={{once: true}} transition={{ type: "spring", duration: 1}} className="">
        <Footer />
      </motion.div>
    </div>
  )
}

export default transition(About, "About");