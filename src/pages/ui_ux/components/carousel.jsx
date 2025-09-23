import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel"

import img1 from '../../../assets/images/carousel/c1.jpg'
import img2 from '../../../assets/images/carousel/c2.jpg'
import img3 from '../../../assets/images/carousel/c3.jpg'
import img4 from '../../../assets/images/carousel/c4.png'
import img5 from '../../../assets/images/carousel/c5.png'
import img6 from '../../../assets/images/carousel/c6.jpg'
import img7 from '../../../assets/images/carousel/c7.png'

const CarouselLogo = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7]
    return (
        <div>
            <Carousel opts={{
                align: "start",

            }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                    
                ]}
                className="w-full items-center">
                <CarouselContent>
                    {images.map((img, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                            <img src={img} className="size-32 object-contain" alt="" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </div>
    )
}

export default CarouselLogo