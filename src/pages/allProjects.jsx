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
import HoverEffect from "../components/custom/hoverEffect";



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
      <div className="md:pt-32 pt-36 md:px-20 px-4">
        <div className="">
          <h1 className="font-bold text-[42px] md:text-[64px] leading-[50px] md:leading-[83.2px] font-specify_exp_med py-10">Recent Projects</h1>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-[18.61px]">
            <HoverEffect Z={70} rotationRange={20} style={{ width: "fit-content"}}>
              <Button onClick={(e) => handleCategories(e, "All")} className={`${CATEGORY === "All" ? "bg-black text-white" : ""} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-6 px-10 shadow-none`}>
                <HoverEffect Z={50} rotationRange={10} style={{ width: "fit-content" }}>
                  <span>All</span>
                </HoverEffect>
              </Button>
            </HoverEffect>
            <HoverEffect Z={70} rotationRange={20} style={{ width: "fit-content"}}>
              <Button onClick={(e) => handleCategories(e, "app")} className={`${CATEGORY === "app" ? "bg-black text-white" : ""} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-6 px-10 shadow-none`}>
                <HoverEffect Z={50} rotationRange={10} style={{ width: "fit-content" }}>
                  <span>Applications</span>
                </HoverEffect>
              </Button>
            </HoverEffect>
            <Button onClick={(e) => handleCategories(e, "Website")} className={`${CATEGORY === "Website" ? "bg-black text-white" : ""} border hover:bg-black hover:text-white border-text_gray text-[13.03px] rounded-[37.22px] md:py-7 py-6 px-10 shadow-none`}>Website</Button>
            <Button className="hover:bg-black hover:text-white border border-text_gray text-black text-[13.03px] bg-transparent rounded-[37.22px] md:py-7 py-6 px-10 shadow-none">Case Studies</Button>
          </div>
          <div className="py-10 md:block hidden">
            <Table className="overflow-hidden">
              <TableHeader>
                <TableRow className="border-b border-[#636363]">
                  <TableHead className="md:min-w-[400px] w-fit">CLIENT</TableHead>
                  <TableHead>LOCATION</TableHead>
                  <TableHead>SERVICES</TableHead>
                </TableRow>
              </TableHeader>
              <Work category={CATEGORY} limit={100} />
            </Table>
          </div>
        </div>

        <div className="py-10 md:hidden block">
          <WorkMobile category={CATEGORY} slice={100} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default transition(AllProjects, "All Project");