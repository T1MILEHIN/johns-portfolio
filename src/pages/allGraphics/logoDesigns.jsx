import { Logos } from "../../utils/logo";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const LogoDesigns = () => {
    return (
        <div className="py-20 grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 place-content-center">
            {Logos?.map((img, index) => (
                <div key={index} className="flex justify-center items-center w-full h-full">
                    <DirectionAwareHover
                        imageUrl={img}
                        className="lg:w-20 lg:h-20 w-10 h-10 object-contain"
                    />
                </div>
            ))}
        </div>
    )
}

export default LogoDesigns