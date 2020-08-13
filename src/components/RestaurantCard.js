import React from 'react'
import "../static/css/all.css"

export const RestaurantCard = (props) => {
   return (
      <div className="Rcard" style={{
         width: '250px',
         maxHeight: "270px"
      }} >
         <div className="RCimg" style={{
            backgroundColor: '#e9e9e9',
            margin: '5px',
            padding: '5px 10px',
            borderRadius: '30px',
            boxShadow: '5px 20px 10px 0 rgba(0, 0, 0, .1)',
            transition: 'all 0.3s ease 0s',
         }} >
            <img style={{
               width: '90%',
               margin: '0px auto',
               height: '200px',
               maxHeight: '270px',
               objectFit: 'contain',
            }} src={props.img} alt='' />
         </div>
         <a style={{textDecoration: "none", color: "black",}} href="#" >
            <h5 className="RCtext" style={{
               margin: 0,
            }}><i class="fas fa-map-marker-alt"></i> {props.title} </h5>
         </a>
         <p style={{
            margin: 0,
            fontSize: '12px',
            color: 'grey',
         }}> {props.text} </p>
      </div>
   )
}


export default RestaurantCard