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
    </div>
  )
}

export default SingleProject;