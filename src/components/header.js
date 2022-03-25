
import React from "react"

import{FaBars} from 'react-icons/fa'






const Header = ({toggle})=>{
return (
  <>
  <appLogoWrapper>
    <title to='/'> Nasa Photo of the day   </title>
    <appLogoImg className = "App-logo">
    <FaBars/>
    </appLogoImg>
  </appLogoWrapper>
  </>
)
}
export default Header;