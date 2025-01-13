/* eslint-disable react-refresh/only-export-components */
import transition from "../transition"
import Footer from "../components/footer";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Work from "./ui_ux/components/work";
import { useSearchParams } from "react-router-dom";
import WorkMobile from "./ui_ux/components/workMobile";



const AllProjects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const CATEGORY = searchParams.get("CATEGORY") || "All";
  const handleCategories = (e, CATEGORY) => {
    e.preventDefault();
    if (CATEGORY !== "All") {
      setSearchParams({ CATEGORY });
    } else {
      setSearchParams({ CATEGORY: "All" });
    }
  };
  return (
    <>
      <div className="pt-32 px-10">
        <h1 className="font-bold text-[64px] leading-[83.2px] font-specify_exp_med py-10">Recent Projects</h1>
        <div className="flex items-center gap-[18.61px]">
          <Button onClick={(e) => handleCategories(e, "All")} className={`${CATEGORY === "All" ? "bg-black text-white" : ""} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 px-10`}>All</Button>
          <Button onClick={(e) => handleCategories(e, "app")} className={`${CATEGORY === "app" ? "bg-black text-white" : ""} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 px-10`}>Applications</Button>
          <Button onClick={(e) => handleCategories(e, "Website")} className={`${CATEGORY === "Website" ? "bg-black text-white" : ""} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 px-10`}>Website</Button>
          <Button className="blue_footer_hover border border-text_gray text-black text-[13.03px] bg-transparent rounded-[37.22px] md:py-7 px-10">Case Studies</Button>
        </div>
        <div className="py-10">
          <Table className="overflow-hidden">
            <TableHeader>
              <TableRow className="border-b border-[#636363]">
                <TableHead className="md:min-w-[400px] w-fit">CLIENT</TableHead>
                <TableHead>LOCATION</TableHead>
                <TableHead>SERVICES</TableHead>
              </TableRow>
            </TableHeader>
            <Work category={CATEGORY} />
          </Table>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default transition(AllProjects);