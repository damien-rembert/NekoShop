import React from 'react';
import {  Link } from "react-router-dom";
import Logo from "../images/LogoNeko.png";


const Navbar = () =>{
  return (
  <div>
    <li>
      <Link to="/">Basquet</Link>
    </li>
    <li>
        <img src={Logo} alt= "" />
    </li>
   
  </div>
  );
}
export default Navbar;