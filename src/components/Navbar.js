import React from 'react';
import Togo from '../static/images/togo.png';
import '../static/css/Navbar.css';
import NavbarRight from './NavbarRight';



const Navbar = () => {
   return (
      <div className='navbar'>
         <img src='https://sapporo-togo.com/static/media/logoLarge.61cf1ba4.svg' alt=''/>
         <NavbarRight/>
      </div>
   )
}

export default Navbar;
