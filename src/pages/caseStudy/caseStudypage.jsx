/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom';
import { withPageTransition } from '../../transition';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CaseStudy } from '../../utils/caseStudy';

const CaseStudyPage = () => {
  return (
    <div className="relative z-30 md:pt-32 pt-36 md:px-20 px-4 bg-bodybg">
      <div className="">
        <h1 className="font-bold text-[42px] md:text-[64px] leading-[50px] md:leading-[83.2px] font-specify_exp_med py-10">Case Study</h1>
        <hr className="w-full border-[#636363]" />
        <div className='pt-20 pb-48 flex'>
          {CaseStudy?.map((cs, index)=> (
          <Card key={index} className="shadow-none lg:w-[500px] bg-white rounded">
            <CardHeader>
              <img src={cs.image} className='rounded-2xl' alt='' />
            </CardHeader>
            <CardContent>
              <CardTitle className="lg:text-[38.93px] text-xl">{cs.name}</CardTitle>
              <ul className='list-disc list-inside flex items-center gap-5 my-8 text-base text-[#4F4F4F]'>
                {cs.details?.map((detail, index)=> (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="">
              <Link to={cs.link} className='w-full'>
                <button className="relative blue_black_hover py-4 rounded-xl w-full bg-[#2D4DFF] text-white font-light">View Case Study</button>
              </Link>
            </CardFooter>
          </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withPageTransition(CaseStudyPage, "Case Study");