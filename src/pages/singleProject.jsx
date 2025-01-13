import { useParams } from "react-router-dom"
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
  const work = Works.find((work)=> work.client === project)
  return (
    <div className="pt-32 px-10">
      <h1 className="font-bold text-[64px] leading-[83.2px] font-specify_exp_med py-10">{project}</h1>
      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow className="border-b border-[#636363]">
            <TableHead className="md:min-w-[400px] w-fit">ROLE</TableHead>
            <TableHead>CREDIT</TableHead>
            <TableHead>LOCATION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-[16px] leading-[19.2px] font-medium py-10 px-5">{work.singleDetails.role}</TableCell>
            <TableCell className="text-[16px] leading-[19.2px] font-medium py-10 px-5">{work.singleDetails.credit}</TableCell>
            <TableCell className="text-[16px] leading-[19.2px] font-medium py-10 px-5">{work.singleDetails.location}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-specify_exp_med text-[40px] leading-[52px] font-bold">Project OverView</h1>
          <p className="text-[24px] leading-[51.6px] font-normal">{work.singleDetails.overview}</p>
        </div>


        <div className="flex flex-col gap-4">
          <h1 className="font-specify_exp_med text-[40px] leading-[52px] font-bold">Project Objectives</h1>
          <ul className="list-disc list-inside">
            {work.singleDetails.objectives.map((objective, index) => (
              <li className="text-[24px] leading-[51.6px] font-normal" key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SingleProject;