import React from 'react';
import Togo from '../static/images/togo.png';
import '../static/css/Navbar.css';
import NavbarRight from './NavbarRight';



const Navbar = () => {
   return (
      <div className='navbar'>
         <img src={Togo} alt=''/>
         <NavbaRight/>
      </div>
   )
}

export default Navbar;
