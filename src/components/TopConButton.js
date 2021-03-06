import React from 'react'
import '../static/css/all.css'

const TopConButton = (props) => {
   return (
      <div className='topconbutton' style={{
         width: '180px',
         minWidth: "160px",
         color: 'grey',
         fontWeight: 600,
         fontSize: '16px',
         display: 'flex',
         borderRadius: '50px',
         margin: '0 40px',
         padding: '0 10px',
         cursor: 'pointer',
      }} >
         <p>
            <i class={props.icon}></i>
         </p>
         <p style={{
            marginLeft: '5px',
         }} > {props.text} </p>
      </div>
   )
}

export default TopConButton;
