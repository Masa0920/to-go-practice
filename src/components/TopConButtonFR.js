import React from 'react'
import '../static/css/all.css'

const TopConButtonFR = (props) => {
   return (
      <div className='topconbutton' style={{
         width: '180px',
         color: 'grey',
         fontWeight: 600,
         fontSize: '16px',
         display: 'flex',
         borderRadius: '50px',
         margin: '10px auto',
         padding: '0 10px',
         boxShadow: '15px 15px 30px 0 rgba(0, 0, 0, .1)',
         cursor: 'pointer',
      }} >
         <p style={{
            margin: '10px auto',
         }} > {props.text} </p>
      </div>
   )
}

export default TopConButtonFR;
