import Flyers from "./components/flyers";
import Footer from "../../components/footer"
import LandingProfile from "../../components/landingProfile";
import LaptopAnimation from "./components/laptopAnimation";

const Graphics = () => {
  return (
    <>
      <div className="">
        <div className="px-2 md:px-20 lg:pt-36 pt-60 pb-0 relative">
          <LandingProfile />
        </div>
        <LaptopAnimation />
      </div>
      <Flyers />
      <Footer />
    </>
  )
}

export default Graphics