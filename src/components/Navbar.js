import React from 'react';
import Logo from "../images/LogoNeko.png";
import Cart from "../images/shopping-cart.png"


const Navbar = () =>{
  return (

  <div id='nav'>
        <img id="logo" src={Logo} alt= "logo" />
        <img id="cart" src={Cart} alt='shopping basket' />
  </div>
  );
}
export default Navbar; 