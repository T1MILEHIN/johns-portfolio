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

const SingleProject = () => {
  const { project } = useParams()
  const navigate = useNavigate()
  const work = Works.find((work) => work?.client === project)
  const nextWork = Math.floor(Math.random() * Works.length + 1)
  useEffect(()=> {
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
              <TableCell className="text-[16px] leading-[19.2px] font-medium py-10 px-5">{work?.singleDetails?.role}</TableCell>
              <TableCell className="text-[16px] leading-[19.2px] font-medium py-10 px-5">{work?.singleDetails?.credit}</TableCell>
              <TableCell className="text-[16px] leading-[19.2px] font-medium py-10 px-5">{work?.singleDetails?.location}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {work?.singleDetails?.images && (
        <div className="py-20">
          {work?.singleDetails?.images?.map((img, ind) => (
            <img key={ind} src={img} className="w-full h-[448px] object-center" alt="" />
          ))}
        </div>
      )}

      <div className="py-20 md:px-20 px-4 flex flex-col gap-8">
        {work?.singleDetails?.overview &&
          <div className="flex flex-col gap-6">
            <h1 className="font-specify_exp_med text-[40px] leading-[52px] font-bold">Project OverView</h1>
            <p className="text-[24px] leading-[51.6px] font-normal">{work?.singleDetails?.overview}</p>
          </div>}


        {work?.singleDetails?.objectives &&
          <div className="flex flex-col gap-6">
            <h1 className="font-specify_exp_med text-[40px] leading-[52px] font-bold">Project Objectives</h1>
            <ul className="list-disc list-inside">
              {work?.singleDetails?.objectives.map((objective, index) => (
                <li className="text-[24px] leading-[51.6px] font-normal" key={index}>{objective}</li>
              ))}
            </ul>
          </div>}
      </div>
      <div className="bg-black px-32 pt-32">
        <div className="flex items-center justify-center">
          <div onClick={()=> navigate(`/projects/${Works[nextWork].client}`)} className="flex flex-col gap-4 items-center">
            <h1 className="text-text_gray text-base font-medium">Next Project</h1>
            <img src={Works[nextWork].component} className="w-[539px] h-[347px] cursor-pointer" alt="" />
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

export default SingleProject;