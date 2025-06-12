import { AndroidMockup } from "react-device-mockup"
import PropTypes from 'prop-types';

const PhoneDesignShowcase = ({children}) => {
  return (
    <div className="w-[250px] mx-auto">
      <AndroidMockup hideStatusBar={true} hideNavBar={true} screenWidth={250} className="mx-auto" frameColor={"#000"}>
        {children}
      </AndroidMockup>
    </div>
  )
}

PhoneDesignShowcase.propTypes = {
  children: PropTypes.node
}

export default PhoneDesignShowcase;