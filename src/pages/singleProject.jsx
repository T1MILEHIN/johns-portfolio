import { useParams } from "react-router-dom"

const SingleProject = () => {
    const { project } = useParams()
  return (
    <div  className="pt-32 px-10">
        <h1 className="font-bold text-[64px] leading-[83.2px] font-specify_exp_med py-10">{project}</h1>
    </div>
  )
}

export default SingleProject