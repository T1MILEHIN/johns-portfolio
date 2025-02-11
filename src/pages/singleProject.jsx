/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Works } from "../utils/works";

import transition from "../transition";
import HoverEffect from "../components/custom/hoverEffect";

const SingleProject = (props) => {
  const { project } = useParams()
  const navigate = useNavigate()
  const work = Works.find((work) => work?.client === project)
  const nextWork = Math.floor(Math.random() * Works.length + 1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [project])
  return (
    <div className="pt-32">
      <div className="md:px-20 px-4">
        <h1 className="font-bold text-[64px] leading-[83.2px] font-specify_exp_med py-10">{project}</h1>
        <Table className="overflow-hidden md:px-20 px-4">
          <TableHeader>
            <TableRow className="border-b border-[#636363]">
              <TableHead className="md:min-w-[400px] w-fit">ROLE</TableHead>
              <TableHead>CREDIT</TableHead>
              <TableHead>LOCATION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="md:text-[16px] leading-[19.2px] font-medium py-10 px-5">{work?.singleDetails?.role}</TableCell>
              <TableCell className="md:text-[16px] leading-[19.2px] font-medium py-10 px-5">{work?.singleDetails?.credit}</TableCell>
              <TableCell className="md:text-[16px] leading-[19.2px] font-medium py-10 px-5">{work?.singleDetails?.location}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {work?.singleDetails?.laptopMockup && 
      <div className="relative py-10">
        <img className="block xl:w-[1176px] mx-auto" src={work?.singleDetails?.laptopMockup[0]} alt="" />
        <div className="absolute top-0 right-32">
          <HoverEffect Z={30} rotationRange={10} style={{ width: "fit-content" }}>
            <button className="w-28 h-28 grid place-content-center p-4 rounded-[20px] z-10 bg-blue text-white font-normal">
              <HoverEffect Z={20} rotationRange={10} style={{ width: "fit-content" }}>
                <div className="button">Design File</div>
              </HoverEffect>
            </button>
          </HoverEffect>
        </div>
      </div>}

      {work?.singleDetails?.laptopMockup && (
        <div className="py-20 flex flex-col gap-20">
          <div className="relative mb-40">
            <div>
              <img src={work?.singleDetails?.laptopMockup[1]} alt="" />
            </div>
            <div className="absolute -bottom-20 lg:-bottom-40 left-1/2 -translate-x-1/2">
              <img className="" src={work?.singleDetails?.laptopMockup[2]} alt="" />
            </div>
          </div>
          <div className="">
            <img className="w-[773px] mx-auto" src={work?.singleDetails?.laptopMockup[3]} alt="" />
          </div>
          <div className="">
            <img className="w-full" src={work?.singleDetails?.laptopMockup[4]} alt="" />
          </div>
        </div>
      )}


      <div className="py-20 md:px-20 px-4 flex flex-col gap-8">
        {work?.singleDetails?.overview &&
          <div className="flex flex-col gap-6">
            <h1 className="font-specify_exp_med text-[20px] md:text-[40px] leading-[52px] font-bold">Project OverView</h1>
            <p className="text-base leading-[40px] md:text-[24px] md:leading-[51.6px] font-normal">{work?.singleDetails?.overview}</p>
          </div>}


        {work?.singleDetails?.objectives &&
          <div className="flex flex-col gap-6">
            <h1 className="font-specify_exp_med text-[20px] md:text-[40px] leading-[52px] font-bold">Project Objectives</h1>
            <ul className="list-disc list-inside">
              {work?.singleDetails?.objectives.map((objective, index) => (
                <li className="text-base leading-[40px] md:text-[24px] md:leading-[51.6px] font-normal" key={index}>{objective}</li>
              ))}
            </ul>
          </div>}
      </div>
      <div className="bg-black px-4 md:px-32 pt-32">
        <div className="flex items-center justify-center">
          <div onClick={() => navigate(`/projects/${Works[nextWork].client}`)} className="cursor-pointer flex flex-col gap-4 items-center">
            <h1 className="text-text_gray text-base font-medium">Next Project</h1>
            <img src={Works[nextWork].component} className="w-full md:w-[539px] h-[347px] cursor-pointer" alt="" />
          </div>
        </div>
        <div>
          <div className="px-2 md:pt-10 md:pb-10 pt-10 pb-5">
            <h1 className="text-sm font-bold text-[#636363] my-2">SOCIALS</h1>
            <div className="flex justify-between text-xs ">
              <ul className="flex md:gap-10 gap-4 text-white">
                <li className="relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300 cursor-pointer">Instagram</li>
                <li className="relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300 cursor-pointer">LinkedIn</li>
                <li className="relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300 cursor-pointer">Behance</li>
              </ul>
              <ul>
                <li className="font-medium text-[#636363]">2024 Jayzleux. All rights reserved.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default transition(SingleProject)
// export default transition((props) => <SingleProject {...props} project={useParams().project} />);