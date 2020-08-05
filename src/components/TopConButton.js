import React from 'react'
import '../static/css/TopConButton.css'

const TopConButton = (props) => {
   return (
      <div className='tcbutton' >
         <p>
            <img src={props.img} alt='' />
         </p>
         <p> {props.text} </p>
      </div>
   )
}

export default TopConButton;
