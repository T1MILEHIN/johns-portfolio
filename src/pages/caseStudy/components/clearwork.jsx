/* eslint-disable react-refresh/only-export-components */
import img from "../../../assets/images/hero-casestudy-img.png";
import targerUser from "../../../assets/images/caseUser.png";
import center from "../../../assets/images/clearwork/center.jpg";
import work from "../../../assets/images/clearwork/work.png";
import bam from "../../../assets/images/clearwork/bam.png";
import image1 from "../../../assets/images/clearwork/image1.jpg";
import image2 from "../../../assets/images/clearwork/image2.jpg";
import image3 from "../../../assets/images/clearwork/image3.jpg";
import image4 from "../../../assets/images/clearwork/image4.jpg";
import image5 from "../../../assets/images/clearwork/image5.jpg";
import image6 from "../../../assets/images/clearwork/image6.jpg";
import image7 from "../../../assets/images/clearwork/image7.jpg";
import image8 from "../../../assets/images/clearwork/image8.jpg";
import image9 from "../../../assets/images/clearwork/image9.jpg";
import image10 from "../../../assets/images/clearwork/image10.jpg";
import image11 from "../../../assets/images/clearwork/image11.jpg";
import image12 from "../../../assets/images/clearwork/image12.jpg";
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import { ButtonShowcaseGrid } from "@/components/buttonShowCaseGrid";
import { TypographyShowcase } from "@/components/typographShowcase";
import ColorShowcase from "@/components/colorShowcase";
import { withPageTransition } from "../../../transition";
import Description from "./clearwork/description";
import ShowCase from "./clearwork/showCase";

import { IPhoneMockup } from "react-device-mockup"

const Clearwork = () => {
    const images1 = [image1, image2, image3, image4, image5, image6];
    const images2 = [image7, image8, image9, image10, image11, image12];
    return (
        <section className="">
            <div className="min-h-screen bg-caseStudyBlue flex flex-col items-center justify-between text-center pt-28 md:pt-32 ">
                <div className="text-xl lg:text-[36px] text-white font-bold leading-[180%]">
                    <motion.h1
                        variants={fadeIn("down", 0.1, 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className="text-2xl lg:text-[54px]">CLEARWORK</motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.2, 0.3)}
                        initial="hidden" whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}><span className="text-caseStudyGreen">Revolutionizing{" "}</span>HR Management in the UK</motion.p>
                    <motion.p
                        variants={fadeIn("down", 0.3, 0.3)}
                        initial="hidden" whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}>A UX design Case Study</motion.p>
                </div>
                <motion.img variants={fadeIn("up", 0.5, 0.3)}
                    initial="hidden" whileInView={"show"}
                    viewport={{ once: true }} className="lg:w-[1000px]" src={img} alt="" />
            </div>

            <section className="container mx-auto px-4 bg-white md:mb-[250px]">
                <div className="py-20">
                    <h1 className="text-right text-[64px] font-bold text-[#07499459]">01</h1>
                    <h2 className="text-caseStudyBlue text-[28px] my-10 font-bold">Project Overview</h2>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-20">
                        <div className="flex flex-col gap-4">
                            <h2 className="font-bold text-base">About ClearWork</h2>
                            <p className="text-caseStudyGray leading-[27px]">Clearwork is a HR management platform designed to simplify and streamline HR processes for businesses in the UK. It addresses challenges such as <span className="text-caseStudyBlue">inefficient time tracking, complex tax management, employee payment issues, and limited growth-related services</span></p>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <h2 className="font-bold text-base">Project Duration</h2>
                                <p className="text-caseStudyGray leading-[27px]">This project was carried out within the space of 6 weeks (June 11th - May 12th 2023)</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="font-bold text-base">Design Approach</h2>
                                <p className="text-caseStudyGray leading-[27px]">UX research, Wireframing, Prototyping and testing</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="font-bold text-base">Role</h2>
                                <p className="text-caseStudyGray leading-[27px]">Designer, UX researcher</p>
                            </div>
                            <div>
                                <h2 className="font-bold text-base">Tools used</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="font-bold text-base">Problem Statement</h2>
                            <p className="text-caseStudyGray leading-[27px]">Human Resource (HR) management in the UK is a complex and time-consuming process. HR managers face numerous challenges, including inefficient time tracking, complex tax management, inadequate employee payment systems, and limited growth-related services. These challenges lead to decreased productivity, increased errors, and reduced employee satisfaction.</p>
                        </div>
                        <div className="flex flex-col gap-4 lg:col-span-2">
                            <h2 className="font-bold text-base">Solution Statement</h2>
                            <p className="text-caseStudyGray leading-[27px]">To address the inefficiencies in HR management, Clearwork provides a comprehensive digital platform that automates and simplifies core HR processes. It offers seamless time tracking, accurate tax management, efficient employee payroll processing, and integrated growth-related services to help businesses improve productivity and reduce errors.
                                With a user-friendly interface and automation-driven approach, Clearwork ensures that HR managers can focus on strategic workforce management rather than administrative burdens, ultimately enhancing employee satisfaction and business efficiency.</p>
                        </div>
                    </div>
                </div>

                <div className="py-20">
                    <h1 className="text-[64px] font-bold text-[#07499459]">02</h1>
                    <div className="text-center flex flex-col gap-2 mb-20">
                        <h2 className="text-caseStudyBlue text-[28px] font-bold">The clearwork journey </h2>
                        <p className="text-xl text-caseStudyGray">design Jouney</p>
                    </div>

                    <div className="overflow-hidden lg:p-10">
                        <div className="relative flex items-center justify-center h-screen">
                            <div className="lg:flex hidden absolute w-full h-full justify-center items-center">
                                <div className="absolute w-full border border-gray-300 border-l border-dashed"></div>
                                <div className="absolute w-full border border-gray-300 border-l border-dashed rotate-90"></div>
                            </div>
                            <div className="lg:flex hidden absolute items-center justify-center rounded-full">
                                <img src={center} alt="Icon" className="w-24 h-24" />
                            </div>
                            <ol className="list-outside grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 gap-16 w-3/4 h-3/4 text-gray-700 list-decimal">
                                <div className="flex flex-col gap-2 items-start lg:p-10">
                                    <li className="text-base font-bold list-decimal">User Research</li>
                                    <ul className="list-disc text-caseStudyGray">
                                        <li className="text-base leading-[27px]">Identify key challenges in HR processes.</li>
                                        <li className="text-base leading-[27px]">Understand how HR professionals and businesses currently manage these tasks and where inefficiencies exist.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-2 items-start lg:p-10">
                                    <li className="text-base font-bold list-decimal">Wireframing</li>
                                    <ul className="list-disc text-caseStudyGray">
                                        <li className="text-base leading-[27px]">Define the Structure and User Flow for Clearwork</li>
                                        <li className="text-base leading-[27px]">Allow stakeholders and users to review and refine functionality before high-fidelity design and development.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-2 items-start lg:p-10">
                                    <li className="text-base font-bold list-decimal">Visual Design</li>
                                    <ul className="list-disc text-caseStudyGray">
                                        <li className="text-base leading-[27px]">Create a visually appealing and user-friendly interface for Clearwork</li>
                                        <li className="text-base leading-[27px]">Maintain a professional, cohesive look and feel that aligns with Clearwork’s branding.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-2 items-start lg:p-10">
                                    <li className="text-base font-bold list-decimal">Presentations</li>
                                    <ul className="list-disc text-caseStudyGray">
                                        <li className="text-base leading-[27px]">Clearly showcase the purpose, features, and benefits of Clearwork to stakeholders and users.</li>
                                        <li className="text-base leading-[27px]">Provide compelling insights that drive stakeholder buy-in, funding, and product implementation..</li>
                                    </ul>
                                </div>
                            </ol>

                        </div>

                    </div>

                    <div className="py-20">
                        <div className="text-center flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-bold text-base">Targer users</h2>
                                <p className="text-caseStudyGray">Our target Audience is HR managers and employees in the UK .</p>
                            </div>
                            <img src={targerUser} className="md:w-[433px] w-full mx-auto" alt="" />
                        </div>
                    </div>
                </div>


                <div className="py-20">
                    <h1 className="text-[64px] font-bold text-[#07499459] text-right">03</h1>
                    <div className="flex flex-col gap-2 mb-20">
                        <h2 className="text-caseStudyBlue text-[28px] font-bold">Research Process</h2>
                        <p className="text-base text-caseStudyGray">To achieve the research objectives, we employed a mixed-methods approach, combining both qualitative and quantitative research methods.  The research activities included: Conducting stake holder interviews, Online surveys, Competitor analysis, Usability testing. The research helped us gather insights on the challenges faced and how we can help solve their needs.</p>
                    </div>
                    <h3 className="text-base font-bold list-decimal my-3">Research Findings</h3>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                        <div className="flex flex-col gap-2">
                            <p className="list-disc text-caseStudyGray">Is it important for to consistently track employee work hours?</p>
                            <Progress value={50} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="list-disc text-caseStudyGray">Have  you faced challenges is managing employee taxes for your business?</p>
                            <Progress value={70} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="list-disc text-caseStudyGray">Have you experienced issues with delayed or incorrect employee payments?</p>
                            <Progress value={30} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="list-disc text-caseStudyGray">Are there additional HR services would benefit your company that you’d like to utilize?</p>
                            <Progress value={90} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="list-disc text-caseStudyGray">Can you say that there are time-consuming HR task in your company?</p>
                            <Progress value={10} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="list-disc text-caseStudyGray">Are there any frustrations you face with your current HR software</p>
                            <Progress value={100} />
                        </div>
                    </div>
                </div>


                <div>
                    <h2 className="text-xl font-semibold my-2">User Persona</h2>
                    <div className="p-6 bg-[#07499408] border-2 border-dashed rounded-3xl">
                        <div className="flex items-center flex-wrap justify-between border-b pb-4">
                            <div className="flex items-center ">
                                <img src={center} alt="User Image" className="w-16 h-16 rounded-full mr-4" />
                                <div>
                                    <h2 className="text-lg font-bold">Sarah Thompson</h2>
                                    <p className="text-gray-600">30 years • HR Manager</p>
                                    <p className="text-gray-500 text-sm">London, UK</p>
                                </div>
                            </div>
                            <p className="italic text-gray-500 text-sm">Farhan is a first-generation Pakistani, born and raised in a suburb of Gilgit City.</p>
                        </div>

                        <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 mt-4">
                            <div className="rounded-lg p-4 lg:col-span-2">
                                <h3 className="font-bold text-[#222222]">Background Story</h3>
                                <p className="text-[10px] text-caseStudyGray">About Sarah</p>
                                <p className=" text-caseStudyGray text-sm mt-2 leading-[180%]">
                                    With over eight years of experience in HR, Sarah is responsible for managing payroll, tax compliance, and employee development. She constantly finds herself dealing with inefficient systems that make her job more difficult, limiting her ability to focus on higher-level HR strategies.
                                </p>
                            </div>

                            <div className="rounded-lg p-4 lg:col-span-2">
                                <h3 className="font-bold text-[#222222]">Goals</h3>
                                <p className="text-[10px] text-caseStudyGray">Sarah’s Goal</p>
                                <ul className="list-disc text-caseStudyGray text-sm pl-4 mt-2 leading-[180%]">
                                    <li>Sarah Thompson wants to streamline HR processes by automating time tracking, payroll management, and tax compliance. </li>
                                    <li>She aims to reduce administrative workload, minimize errors, and improve employee satisfaction by ensuring timely payments and providing career development opportunities. </li>
                                    <li>She seeks an HR solution that integrates seamlessly with existing systems while supporting business growth and employee engagement.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-700">Technology</h4>
                                <div className="flex space-x-2 mt-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                    <div className="w-4 h-4 bg-green-300 rounded-full"></div>
                                </div>
                            </div>

                            <div className="rounded-lg p-4 lg:col-span-2">
                                <h3 className="font-bold text-gray-700">Expectations & Needs</h3>
                                <ul className="list-disc text-caseStudyGray text-sm pl-4 mt-2 leading-[180%]">
                                    <li>Automated time tracking to reduce errors and improve efficiency.</li>
                                    <li>Built-in tax compliance features tailored to UK regulations.</li>
                                    <li>A centralized HR solution that simplifies administrative tasks and improves workflow.</li>
                                    <li>A centralized HR solution that simplifies administrative tasks and improves workflow.</li>
                                </ul>
                            </div>

                            <div className="rounded-lg p-4 lg:col-span-2">
                                <h3 className="font-bold text-[#222222]">Pain Points</h3>
                                <p className="text-[10px] text-caseStudyGray">List of points of frustration that the user has encountered</p>
                                <ul className="list-disc text-caseStudyGray text-sm pl-4 mt-2 leading-[180%]">
                                    <li>Manual time tracking often leads to errors and inefficiencies.</li>
                                    <li>Complex tax regulations make compliance difficult and time-consuming.</li>
                                    <li>Inflexible payroll systems result in delayed or incorrect employee payments.</li>
                                    <li>Tedious administrative tasks take up too much time, preventing strategic HR initiatives.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="py-20">
                    <h2 className="text-xl font-semibold my-6">Competitors Analysis</h2>
                    <div className="flex md:flex-row flex-col gap-10">
                        <div className="flex-1 p-4 border-2 border-dashed rounded-2xl">
                            <img className="w-32 mx-auto" src={bam} alt="" />
                            <h3 className="font-bold text-lg">Strength</h3>
                            <ul className="text-sm text-caseStudyGray list-disc list-inside leading-[33px]">
                                <li>User-friendly interface with a clean design</li>
                                <li>Strong automation for time tracking and payroll.</li>
                                <li>Built-in tax compliance features tailored for various regions.</li>
                                <li>Employee self-service portal for easy access to HR information.</li>
                            </ul>
                            <h3 className="font-bold text-lg">Weakness</h3>
                            <ul className="text-sm text-caseStudyGray list-disc list-inside leading-[33px]">
                                <li>Limited customization options for businesses with unique HR needs.s</li>
                                <li>Higher pricing compared to some competitors.</li>
                                <li>Growth-related services like training and performance tracking are not as robust.</li>
                            </ul>
                        </div>
                        <div className="flex-1 p-4 border-2 border-dashed rounded-2xl">
                            <img className="size-32 object-contain mx-auto" src={work} alt="" />
                            <h3 className="font-bold text-lg">Strength</h3>
                            <ul className="text-sm text-caseStudyGray list-disc list-inside leading-[33px]">
                                <li>Advanced payroll and benefits management with compliance tracking.</li>
                                <li>Strong analytics and reporting features for data-driven decision-making.</li>
                                <li>Scalable solution that grows with business needs.</li>
                                <li>Comprehensive employee development tools, including learning management.</li>
                            </ul>
                            <h3 className="font-bold text-lg">Weakness</h3>
                            <ul className="text-sm text-caseStudyGray list-disc list-inside leading-[33px]">
                                <li>Steep learning curve due to complex features.</li>
                                <li>Expensive pricing, making it less accessible for smaller businesses.</li>
                                <li>Requires significant setup and customization, which may be time-consuming.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="py-20">
                    <h1 className="text-[64px] font-bold text-[#07499459]">04</h1>
                    <div className="flex flex-col items-center gap-2 my-8">
                        <h2 className="text-caseStudyBlue text-[28px] font-bold">Sketching and ideation</h2>
                        <p className="text-caseStudyGray">Style guide and mid fidelity</p>
                    </div>
                    <p className="leading-[27px]">Based on our research findings, we began sketching and ideating potential solutions for the ClearWork platform. Our goal was to create a user-friendly and intuitive interface that directly addressed key pain points. During this phase, we explored various layouts, refined user flows, and developed mid-fidelity wireframes to ensure seamless navigation. Additionally, we established a cohesive style guide to maintain visual consistency and enhance usability across the platform.</p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-lg font-semibold text-gray-700 my-4">Components</h2>
                            <ButtonShowcaseGrid />
                        </section>
                    </div>
                </div>


                <div className="py-20">
                    <p className="text-caseStudyGray text-xl font-semibold mb-2">Typography</p>
                    <TypographyShowcase />
                </div>

                <div className="py-20">
                    <p className="text-caseStudyGray text-xl font-semibold mb-2">Brand COlor</p>
                    <ColorShowcase />
                </div>

                <div className="py-20">
                    <h1 className="text-[64px] font-bold text-[#07499459] text-right">05</h1>
                    <div className="flex flex-col gap-2 mb-20">
                        <h2 className="text-caseStudyBlue text-[28px] font-bold">From Low-Fidelity to High-Fidelity Design</h2>
                        <p className="text-base text-caseStudyGray">We began with low-fidelity wireframes to define user flows and structure key interactions, ensuring a seamless experience. Through iterations, we refined them into mid-fidelity designs, improving layout and usability. Finally, we introduced ClearWork’s branding in high-fidelity designs, creating a visually cohesive, user-friendly, and efficient platform for HR professionals.</p>
                    </div>


                    <ShowCase images={images1} />
                </div>

                <div className="">
                    <div className="flex flex-col items-center gap-2 mb-20">
                        <h2 className="text-caseStudyBlue text-[28px] font-bold">ClearWork in Action</h2>
                        <p className="text-base text-caseStudyGray">final design</p>
                    </div>
                    <Description />
                </div>

                <div className="py-20">
                    <ShowCase images={images2} />
                </div>

                <div className="py-20">
                    <h1 className="text-[64px] font-bold text-[#07499459] text-right">06</h1>
                    <div className="flex flex-col gap-2 mb-20">
                        <h2 className="text-caseStudyBlue text-[28px] font-bold">Conclusion</h2>
                        <p className="text-base text-caseStudyGray">ClearWork was designed to simplify HR processes, making time tracking, payroll management, and employee support more efficient. Through research-driven design, we created an intuitive platform that enhances productivity for both HR managers and employees. By refining user flows, implementing key features, and ensuring a seamless experience, ClearWork bridges the gap between traditional HR challenges and modern digital solutions.</p>
                    </div>
                </div>

                <div>

                    <div className="flex justify-center items-center gap-4 my-10 [perspective:1200px]">
                        {/* Left Phone */}
                        <div className="w-[150px] -rotate-12">
                            <IPhoneMockup cl hideStatusBar={true} hideNavBar={true} screenWidth={150} frameColor={'#000'}>
                                <img src={image7} alt="Screen 1" />
                            </IPhoneMockup>
                        </div>
                        {/* Right Phone */}
                        <div className="w-[150px] rotate-12">
                            <IPhoneMockup cl hideStatusBar={true} hideNavBar={true} screenWidth={150} frameColor={'#000'}>
                                <img src={image8} alt="Screen 2" />
                            </IPhoneMockup>
                        </div>
                    </div>

                    <div className="text-center mt-32">
                        <button className="rounded-[50px] font-bold text-2xl mx-auto duration-200 bg-blue/50 hover:bg-blue lg:w-[400px] px-16 py-5">Download Vercel App</button>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default withPageTransition(Clearwork, "Clearwork");