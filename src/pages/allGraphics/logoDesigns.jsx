import { Logos } from "../../utils/logo";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LogoDesigns = () => {
    return (
        <div className="py-10 grid lg:gap-7 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-4 items-center">
            {Logos?.map((img, index) => (
                <LazyLoadImage effect="blur" key={index} src={img} className="lg:w-full w-24" alt="" />
            ))}
        </div>
    )
}

export default LogoDesigns