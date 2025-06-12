import { useRef } from "react";
import image from "../../../../assets/images/clearwork/image7.jpg";
import { IPhoneMockup } from "react-device-mockup"
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Description = () => {
    const descriptionRef = useRef();
    const isInView = useInView(descriptionRef, { once: false})
    const highlightedDescriptions = [
        {
            header: "Notification bell",
            text: "Keeps users informed of important updates, approvals, and payroll reminders.",
            position: 'top-right',
            targetArea: 'portfolio'
        },
        {
            header: "Clock in",
            text: "Allows employees to track work hours seamlessly with a one-tap clock-in feature.",
            position: 'right',
        },
        {
            header: "Attendance",
            text: " Displays real-time attendance records, helping HR managers monitor employee availability.",
            position: 'left',
        },
                {
            header: "Earnings",
            text: "Provides a clear breakdown of salary details, including deductions and bonuses.",
            position: 'bottom-left',
        },
        {
            header: "Clears",
            text: "Enables employees to access up to 30% of their salary before payday, giving financial flexibility.",
            position: 'bottom-right',
        },
    ];
    const getPositionClasses = (position) => {
        switch (position) {
            case 'top-left':
                return 'absolute -left-64 -top-12';
            case 'top-right':
                return 'absolute -right-96 -top-9';
            case 'bottom-left':
                return 'absolute -left-96 top-80';
            case 'bottom-right':
                return 'absolute -right-96 bottom-4';
            case 'left':
                return 'absolute -left-96 top-44';
            case 'right':
                return 'absolute -right-96 top-36';
            default:
                return 'absolute -right-64 top-32';
        }
    };

    const getDashedLineClasses = (position) => {
        switch (position) {
            case 'top-left':
                return 'absolute -right-24 bottom-1/2 w-20 h-0.5 border-t-2 border-dashed border-[#3333331A]';
            case 'top-right':
                return 'absolute top-1/2 -left-32 bottom-1/2 w-28 h-0.5 border-t-2 border-dashed border-[#3333331A]';
            case 'bottom-left':
                return 'absolute top-1/2 -right-36 bottom-1/2 w-32 h-0.5 border-t-2 border-dashed border-[#3333331A]';
            case 'bottom-right':
                return 'absolute top-12 -left-32 bottom-1/2 w-28 h-0.5 border-t-2 border-dashed border-[#3333331A]';
            case 'left':
                return 'absolute -right-36 top-1/2 w-32 h-0.5 border-t-2 border-dashed border-[#3333331A]';
            case 'right':
                return 'absolute top-1/2 -left-32 bottom-1/2 w-28 h-0.5 border-t-2 border-dashed border-[#3333331A]';
            default:
                return 'absolute left-4 top-1/2 w-16 h-0.5 border-t-2 border-dashed border-[#3333331A]';
        }
    };
    return (
        <div>
            <div ref={descriptionRef} className="relative w-[250px] mx-auto">
                <IPhoneMockup hideStatusBar={true} hideNavBar={true} screenWidth={250} frameColor={'#000'}>
                    <img src={image} className="w-full" alt="" />
                </IPhoneMockup>
                <div className="xl:block hidden">
                    <AnimatePresence>
                        {highlightedDescriptions.map((description, index) => (
                            <motion.div initial={{opacity : 0, scale: 0}} animate={{opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0}} transition={{ type: "spring", delay: 0.4 * index}} key={index} className={getPositionClasses(description.position)}>
                                <div className="bg-[#3333331A] rounded-xl p-3 max-w-64">
                                    <div className="relative">
                                        <h2 className="text-sm font-semibold text-[#333333]">{description?.header}</h2>
                                        <TextGenerateEffect className="text-sm font-normal leading-[27px] text-[#666666] mt-0" duration={1} filter={false} words={description.text} />
                                        {/* <p className="text-sm font-normal leading-[27px] text-[#666666]">{description.text}</p> */}
                                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className={getDashedLineClasses(description.position)}></motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Description