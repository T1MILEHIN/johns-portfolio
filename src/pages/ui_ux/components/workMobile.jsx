import { motion } from "framer-motion";
import HoverEffect from "../../../components/custom/hoverEffect";
import { Works } from "../../../utils/works";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const WorkMobile = ({ category, slice }) => {
    const works = Works
    const navigate = useNavigate()
    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 ">
            {category === "All" ? works.slice(0, slice).map((img, index) => (
                <div onClick={() => navigate(`/projects/${works.find(work => work.id === img.id).client}`)}
                    key={index} className="relative cursor-default">
                    <motion.img
                        style={{
                            backgroundColor: img.color
                        }}
                        src={img.component}
                        alt="" className={`relative w-full h-[298px] object-contain p-7`} />
                        <div className="py-6">
                            <h1 className="font-medium text-2xl my-2">{img.client}</h1>
                            <hr className="border-[#636363]" />
                            <div className="py-3 flex justify-between items-center text-[10px] font-medium text-[#636363]">
                                <p>{img.services}</p>
                                <p>{img.location}</p>
                            </div>
                        </div>
                </div>
            ))
                :
                works.filter((work) => work.services.includes(category)).map((img, index) => (
                    <div onClick={() => navigate(`/projects/${works.find(work => work.id === img.id).client}`)}
                        key={index} className="relative cursor-default">
                        <motion.img
                            style={{
                                backgroundColor: img.color
                            }}
                            src={img.component}
                            alt="" className={`relative w-full h-[298px] object-contain p-7`} />
                        <div className="absolute grid place-content-center inset-0">
                            <HoverEffect Z={30} rotationRange={10} style={{ width: "fit-content" }}>
                                <motion.button
                                    className="w-20 h-20 grid place-content-center cursor-pointer p-4 rounded-[40px] z-10 bg-darkbg text-white font-bold">
                                    <HoverEffect Z={10} rotationRange={20} style={{ width: "fit-content" }}>
                                        <div className="button">view</div>
                                    </HoverEffect>
                                </motion.button>
                            </HoverEffect>
                        </div>
                    </div>
                ))}
        </div>
    )
}

WorkMobile.propTypes = {
    category: PropTypes.any,
    slice: PropTypes.number,
}

export default WorkMobile