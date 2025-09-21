import { Logos } from "../../utils/logo";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LogoDesigns = () => {
    return (
        <div className="py-20 grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 place-content-center">
            {Logos?.map((img, index) => (
                <div key={index} className="flex justify-center items-center w-full h-full">
                    <img
                        src={img}
                        // effect="blur"
                        // visibleByDefault={true}
                        className="lg:w-20 lg:h-20 w-10 h-10 object-contain"
                    />
                </div>
            ))}
        </div>
    )
}

export default LogoDesigns