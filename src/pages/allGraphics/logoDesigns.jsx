import { Logos } from "../../utils/logo";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const LogoDesigns = () => {
    return (
        <div className="py-10 grid lg:gap-20 gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-4 items-center">
            {Logos?.map((img, index) => (
                <DirectionAwareHover key={index} imageUrl={img} className="w-full object-contain" />
                // <LazyLoadImage effect="blur" key={index} src={img} className="lg:w-full w-24" alt="" />
            ))}
        </div>
    )
}

export default LogoDesigns