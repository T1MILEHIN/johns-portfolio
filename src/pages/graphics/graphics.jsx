/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import Flyers from "./components/flyers";
import LandingProfile from "../../components/landingProfile";
import LaptopAnimation from "./components/laptopAnimation";
import { withPageTransition } from "../../transition";

const Graphics = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <LandingProfile />
      <LaptopAnimation />
      <Flyers />
    </>
  )
}

export default withPageTransition(Graphics, "Logos and Flyers");