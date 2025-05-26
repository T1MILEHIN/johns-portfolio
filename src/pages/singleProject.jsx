/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Works } from "../utils/works";
import laptop from "../assets/images/laptop.png";
import { withPageTransition } from "../transition"
import HoverEffect from "../components/custom/hoverEffect";
import ReactPlayer from 'react-player';

const SingleProject = () => {
  const { project } = useParams();
  const navigate = useNavigate();
  const work = Works.find((work) => work?.client === project);
  const nextWork = Math.floor(Math.random() * (Works.filter((wrk) => wrk.client !== work.client).length + 1));

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [project]);

  return (
    <div className="pt-32 bg-bodybg">
      <div className="md:px-20 px-4">
        <h1 className="font-bold text-3xl md:text-[64px] leading-[83.2px] font-specify_exp_med py-10">{project}</h1>
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
              <TableCell className="text-xs md:text-[16px] leading-[19.2px] font-medium md:py-10 md:px-5">{work?.singleDetails?.role}</TableCell>
              <TableCell className="text-xs md:text-[16px] leading-[19.2px] font-medium md:py-10 md:px-5">{work?.singleDetails?.credit}</TableCell>
              <TableCell className="text-xs md:text-[16px] leading-[19.2px] font-medium md:py-10 md:px-5">{work?.singleDetails?.location}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="relative lg:py-10 py-20">
        <img className="block xl:w-[1176px] h-80 xl:h-auto mx-auto object-cover" src={work?.singleDetails?.landingImg} alt="" />
        <div className="absolute lg:top-0 top-10 lg:right-32 right-10">
          <HoverEffect Z={20} rotationRange={10} style={{ width: "fit-content" }}>
            <button className="lg:size-28 size-20 grid place-content-center p-4 rounded-[20px] z-10 bg-blue text-white font-normal">
              <HoverEffect Z={20} rotationRange={10} style={{ width: "fit-content" }}>
                <div className="button text-xs">Design File</div>
              </HoverEffect>
            </button>
          </HoverEffect>
        </div>
      </div>

      {work?.singleDetails?.allImage && (
        work?.singleDetails?.allImage.map((img, index) => (
          <img key={index} src={img} className={`${(work?.client === "Abbi's Place" && index === 2) && "py-10 w-[20%] mx-auto"}`} alt="" />
        ))
      )}

      {work?.singleDetails.secondVideo && (
        <div className="md:pt-10 flex flex-col">
          <div className="relative" style={{ backgroundColor: work?.singleDetails?.videoBg }}>
            <div className="px-4 md:px-0 overflow-hidden relative md:w-[677px] mx-auto">
              <img src={laptop} className="py-20 md:py-[200px] lg:py-[300px]" alt="" />
              <div className="px-4 md:px-0 absolute top-[9%] left-[10%] w-[80%] h-[80%]">
                <ReactPlayer
                  className=""
                  playing={true}
                  loop={true}
                  muted={true}
                  url={work?.singleDetails?.secondVideo}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            {work?.singleDetails?.secondAbsoluteVideo && (
              <div className="rounded-xl overflow-hidden absolute -bottom-24 lg:-bottom-[200px] left-1/2 -translate-x-1/2 shadow-2xl">
                <ReactPlayer
                  className=""
                  playing={true}
                  loop={true}
                  muted={true}
                  url={work?.singleDetails?.secondAbsoluteVideo}
                  width="100%"
                  height="100%"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {work?.singleDetails.secondImage && (
        <div className="md:pt-10 flex flex-col z-20">
          <div className="relative" style={{ backgroundColor: work?.singleDetails?.videoBg }}>
            <div className="px-4 md:px-0 overflow-hidden relative md:w-[677px] mx-auto">
              <img src={work?.singleDetails.secondImage} className="w-full" alt="" />
            </div>
            {work?.singleDetails?.imageAbsoluteVideo && (
              <div className="z-[999999] rounded-xl overflow-hidden absolute -bottom-24 lg:-bottom-[250px] left-1/2 -translate-x-1/2 shadow-2xl">
                <ReactPlayer
                  className=""
                  playing={true}
                  loop={true}
                  muted={true}
                  url={work?.singleDetails?.imageAbsoluteVideo}
                  width="100%"
                  height="100%"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {work?.singleDetails?.thirdLaptopVideo && (
        <div className="flex flex-col z-10">
          <div className="pt-20 relative">
            <div className="px-4 md:px-0 overflow-hidden relative md:w-[677px] mx-auto">
              <img src={laptop} className="py-20 md:py-[200px] lg:py-[300px]" alt="" />
              <div className="px-4 md:px-0 absolute top-[9%] left-[10%] w-[80%] h-[80%]">
                <ReactPlayer
                  className=""
                  playing={true}
                  loop={true}
                  muted={true}
                  url={work?.singleDetails?.thirdLaptopVideo}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {work?.singleDetails?.fullSecondImage && (
        <div>
          <img src={work?.singleDetails?.fullSecondImage} alt="" />
        </div>
      )}

      {work?.singleDetails?.thirdVideo && (
        <ReactPlayer
          className=""
          playing={true}
          loop={true}
          muted={true}
          url={work?.singleDetails?.thirdVideo}
          width="100%"
          height="100%"
        />
      )}

      {work?.singleDetails?.lastImage && (
        <img className={`${(work?.client === "Clearwork" || work?.client === "MYABFLEX") && "w-[30%] mx-auto pt-[250px]"}`} src={work?.singleDetails?.lastImage} alt="" />
      )}

      {work?.singleDetails?.lastLaptopVideo && (
        <div className="flex flex-col z-10">
          <div className="pt-20 relative">
            <div className="px-4 md:px-0 overflow-hidden relative md:w-[677px] mx-auto">
              <img src={laptop} className="py-20 md:py-[200px] lg:py-[300px]" alt="" />
              <div className="px-4 md:px-0 absolute top-[9%] left-[10%] w-[80%] h-[80%]">
                <ReactPlayer
                  className=""
                  playing={true}
                  loop={true}
                  muted={true}
                  url={work?.singleDetails?.lastLaptopVideo}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="py-20 md:px-20 px-4 flex flex-col gap-8">
        {work?.singleDetails?.overview &&
          <div className="flex flex-col gap-6">
            <h1 className="font-specify_exp_med text-[20px] md:text-[40px] leading-[52px] font-bold">Project OverView</h1>
            <p className="text-sm leading-[40px] md:text-[24px] md:leading-[51.6px] font-normal">{work?.singleDetails?.overview}</p>
          </div>
        }
        {work?.singleDetails?.objectives &&
          <div className="flex flex-col gap-6">
            <h1 className="font-specify_exp_med text-[20px] md:text-[40px] leading-[52px] font-bold">Project Objectives</h1>
            <ul className="list-disc list-inside">
              {work?.singleDetails?.objectives.map((objective, index) => (
                <li className="text-sm leading-[40px] md:text-[24px] md:leading-[51.6px] font-normal" key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        }
      </div>
      <div className="bg-black px-4 md:px-32 pt-32">
        <div className="flex items-center justify-center">
          <div onClick={() => navigate(`/projects/${Works[nextWork].client}`)} className="cursor-pointer flex flex-col gap-4 items-center">
            <h1 className="text-text_gray text-base font-medium">Next Project</h1>
            <img src={Works[nextWork]?.component} className="w-full md:w-[539px] h-[347px] object-contain cursor-pointer" alt="" />
          </div>
        </div>
        <div>
          <div className="px-2 md:pt-10 md:pb-10 pt-10 pb-5">
            <h1 className="text-sm font-bold text-[#636363] my-2">SOCIALS</h1>
            <div className="flex flex-col gap-10 lg:gap-0 justify-between text-xs">
              <ul className="flex md:gap-10 gap-4 text-white">
                <li className="relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300 cursor-pointer">Instagram</li>
                <li className="relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300 cursor-pointer">LinkedIn</li>
                <li className="relative after:absolute after:bg-blue after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:opacity-0 hover:after:opacity-100 after:duration-300 cursor-pointer">Behance</li>
              </ul>
              <ul>
                <li className="text-center font-medium text-[#636363]">2024 Jayzleux. All rights reserved.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withPageTransition(SingleProject, "")