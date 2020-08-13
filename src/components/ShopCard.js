import React from 'react'

export const ShopCard = (props) => {
   return (
      <div style={{
         width: '130px',
         textAlign: 'center',
         margin: '20px',
      }} >
         <div className="RCimg" style={{
            width: '110px',
            height: '110px',
            borderRadius: '30px',
            backgroundColor: 'white',
            padding: '10px',
            transition: 'all 0.3s ease 0s',
         }} >
            <img style={{
               width: '90%',
               height: '100%',
               objectFit: 'contain',
               // margin: '10px',
            }} src={props.img} alt='' />
         </div>
         <p style={{
            fontSize: '12px',
         }} > {props.text} </p>
      </div>
   )
}


export default ShopCard