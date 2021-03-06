import React from 'react'
import "../static/css/all.css"

export const HTUCard = (props) => {
   return (
      <div className="HTUcard" style={{
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
            fontWeight: 1000,
            fontSize: '30px',
         }} > {props.number} </div>
         <p> <img style={{
            width: '150px',
         }} src={props.img} alt='' /> </p>
         <h3> {props.text} </h3>
      </div>
   )
}

export default HTUCard