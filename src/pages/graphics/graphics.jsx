/* eslint-disable react-refresh/only-export-components */
import Flyers from "./components/flyers";
import Footer from "../../components/footer"
import LandingProfile from "../../components/landingProfile";
import LaptopAnimation from "./components/laptopAnimation";
import transition from "../../transition"

const Graphics = () => {
  return (
    <>
      <LandingProfile />
      <LaptopAnimation />
      <Flyers />
      <Footer />
    </>
  )
}

export default transition(Graphics, "Logos and FLyers")