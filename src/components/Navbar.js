import React from 'react';
import Logo from "../images/LogoNeko.png";
import Cart from "../images/shopping-cart.png"


const Navbar = ({toggleBasket, sumOfBasket}) =>{
  return (

  <div id='nav'>
        <img id="logo" src={Logo} alt="logo" />
        <div className="bottomLine">
          <img id="cart" src={Cart} alt='shopping basket' onClick={toggleBasket} />
          <p >Total: £{sumOfBasket}</p>
        </div>
  </div>
  );
}
export default Navbar; 