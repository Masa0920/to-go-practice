import React from 'react';
import NavbarRight from '../components/NavbarRight';



const Navbar = () => {
   return (
      <div className='navbar' style={{
         width: '100%',
         display: 'flex',
         background: 'white',
         paddingTop: '30px',
         paddingBottom: '10px',
         position: 'fixed',
         top: 0,
         zIndex: 100,
         
      }}>
         <img className="navbarimg" style={{
            height: '30px',
            margin: '0 auto',
            cursor: 'pointer',
            position: "relative" ,
         }} src='https://sapporo-togo.com/static/media/logoLarge.61cf1ba4.svg' alt=''/>
         <NavbarRight/>
      </div>
   )
}

export default Navbar;
