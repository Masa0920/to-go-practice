import React from 'react'

export const HTUCard = (props) => {
   return (
      <div style={{
         width: '30%',
         textAlign: 'center',
      }}>
         <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'white',
            margin: '0 auto',
            textAlign: 'center',
            lineHeight: '60px',
         }} > {props.number} </div>
         <p> <img style={{
            width: '150px',
         }} src={props.img} alt='' /> </p>
         <p> {props.text} </p>
      </div>
   )
}

export default HTUCard