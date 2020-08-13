import React from 'react'
import HTUCard from '../components/HTUCard'

export const HTUContainer = () => {
   return (
      <div style={{
         backgroundColor: 'rgb(255, 240, 237)',
         // backgroundImage: "url(https://sapporo-togo.com/static/media/topWave.aca74e6b.svg)",
         // backgroundPosition: "bottom -20px",
         textAlign: 'center',
         padding: '20px',
      }}>
         <h2 style={{
            color: "salmon",
         }} >簡単3STEP</h2>
         <h2>札幌ToGoでテイクアウト！</h2>
         <div className="HTUcontainer" style={{
            display: 'flex',
            justifyContent: 'space-around',
         }}>
            <HTUCard number='1' img='https://sapporo-togo.com/static/media/logoLarge.61cf1ba4.svg' text='札幌ToGoのWEBで料理を選ぶ' />
            <HTUCard number='2' img='https://sapporo-togo.com/static/media/logoLarge.61cf1ba4.svg' text='オンライン注文・決済' />
            <HTUCard number='3' img='https://sapporo-togo.com/static/media/logoLarge.61cf1ba4.svg' text='お店で受け取り' />
         </div>
      </div>
   )
}


export default HTUContainer;