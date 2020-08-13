import React from 'react';
import '../static/css/all.css'
import { Link } from 'react-router-dom'

const NavbarRight = () => {
   return(
      <div className='navbarright' style={{
         position: "absolute",
         right: '10px',
         bottom: '-10px',
      }} >
         <ul style={{
            display: 'flex',
            listStyle: 'none',
            cursor: 'pointer',
         }} >
            <Link to='/'><li><i class="fas fa-search"></i></li></Link>
            <li><i class="fas fa-map"></i></li>
            <li><i class="fas fa-user"></i></li>
            <li><i class="fas fa-shopping-cart"></i></li>
         </ul>
      </div>
   )
}

export default NavbarRight;