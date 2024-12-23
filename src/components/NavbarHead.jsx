import React from 'react';
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const NavbarHead = () => {
  return (
  <Link to={"/"} style={{textDecoration:"none"}}>
    <div className='navbar-head-page'>
    <div className='navbar-head-title'>
    <RiContactsFill />
     <h1>Contact List App</h1>
     </div>
    </div>
    </Link>
  )
}

export default NavbarHead
