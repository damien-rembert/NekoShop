import React from 'react';
import Logo from "../images/LogoNeko.png";


const Navbar = () =>{
  return (
  <div>
        <img src={Logo} alt="logo" />
        <img src={Logo} alt='basket_logo' />
  </div>
  );
}
export default Navbar;