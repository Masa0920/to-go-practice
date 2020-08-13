import React from 'react'
import TopConButton from '../components/TopConButtonFR'
import '../static/css/all.css'

export const ForRestaurant = () => {
   return (
      <div className='forrestaurant' style={{
         backgroundColor: '#f5f5f5',
         paddingTop: '100px',
         textAlign: 'center',
      }} >
         <h2>飲食店様へ</h2>
         <TopConButton text='飲食店様向けページ' />
         <div style={{
            display: "flex",
            marginTop: "40px",
         }} >
            <img style={{
               width: "50px",
               margin: "0 auto",
            }} src='https://sapporo-togo.com/static/media/logoIcon.4b83110f.svg' alt='' />
            <div style={{
               position: "absolute",
               right: "5px",
            }} >
               <ul style={{
                  listStyle: "none",
                  display: "flex",
                  // justifyContent: "flex-end",
                  // position: "absolute",
                  // right: "5px",
                  margin: 0,
               }} >
                  <li><img src='https://sapporo-togo.com/static/media/instagram.46e1482e.png' alt='' /></li>
                  <li><img src='https://sapporo-togo.com/static/media/twitter.9df752ca.svg' alt='' /></li>
                  <li><img src='https://sapporo-togo.com/static/media/facebook.1addab07.svg' alt='' /></li>
               </ul>
               <p style={{
                  textAlign: "right",
                  marginTop: 0,
                  fontWeight: 800,
               }} >FOLLOW US!</p>
            </div>
         </div>
      </div>
   )
}


export default ForRestaurant