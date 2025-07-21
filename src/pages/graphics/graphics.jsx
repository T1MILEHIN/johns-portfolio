/* eslint-disable react-refresh/only-export-components */
import Flyers from "./components/flyers";
import LandingProfile from "../../components/landingProfile";
import LaptopAnimation from "./components/laptopAnimation";
import { withPageTransition } from "../../transition";

const Graphics = () => {
  return (
    <>
      <LandingProfile />
      <LaptopAnimation />
      <Flyers />
    </>
  )
}

export default withPageTransition(Graphics, "Logos and FLyers");