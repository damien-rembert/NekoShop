import React from 'react';
import Logo from "../images/LogoNeko.png";
import Cart from "../images/shopping-cart.png"


const Navbar = ({toggleBasket}) =>{
  return (

  <div id='nav'>
        <img id="logo" src={Logo} alt= "logo" />
        <img id="cart" src={Cart} alt='shopping basket' onClick={toggleBasket} />
  </div>
  );
}
export default Navbar; 