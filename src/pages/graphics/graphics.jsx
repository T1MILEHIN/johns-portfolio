/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import Flyers from "./components/flyers";
import LandingProfile from "../../components/landingProfile";
import LaptopAnimation from "./components/laptopAnimation";
import { withPageTransition } from "../../transition";
import CarouselLogo from "../ui_ux/components/carousel";

const Graphics = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <LandingProfile />
      <div className="lg:p-20 py-10 px-4">
        <div className="lg:py-28 py-10 p-2">
          <h1 className="font-bold uppercase">Brands i’ve been working with recently</h1>
          <div className="lg:py-20 py-10">
            <CarouselLogo />
          </div>
        </div>
      </div>
      <LaptopAnimation />
      <Flyers />
    </>
  )
}

export default withPageTransition(Graphics, "Logos and Flyers");