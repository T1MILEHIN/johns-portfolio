import { Logos } from "../../utils/logo";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const LogoDesigns = () => {
    return (
        <div className="py-10 grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            {Logos?.map((img, index) => (
                <LazyLoadImage effect="blur" key={index} src={img} className="" alt="" />
            ))}
        </div>
    )
}

export default LogoDesigns