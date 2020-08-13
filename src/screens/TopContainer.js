import React from 'react';
import TopConButton from '../components/TopConButton';
import "../static/css/all.css"

const TopContainer = () => {
   return (
      <div className="topcontainer" style={{
         padding: '30px',
         paddingTop: '120px',
         backgroundColor: '#f5f5f5',
      }} >
         <div className='TopContainer' style={{
            display: 'flex',
         }} >
            <div className='TCtext' style={{
               textAlign: 'center',
               width: '55%',
            }}>
               <h2>札幌のテイクアウト事前予約サービス</h2>
               <img style={{
                  width: '45%',
                  margin: '0 auto',
               }} src='https://sapporo-togo.com/static/media/logoLarge.61cf1ba4.svg' alt=''/>
               <h3>オンラインで注文&決済し、</h3>
               <h3>札幌の外食の味を</h3>
               <h3>待ち時間無しでテイクアウト。</h3>
               <h3>素敵な札幌の味を勤務先やご家庭で。</h3>
               <div className='dots'>
                  <span ></span>
                  <span className="two" ></span>
                  <span ></span>
                  <span className="four" ></span>
                  <span ></span>  
               </div>
               <h3>札幌ToGoで普段のごはんを</h3>
               <h3 style={{marginTop:"10px",}}>少し<span className="ze" style={{color: "salmon", fontSize: "20px"}} >ぜいたく</span>にしませんか？</h3>
            </div>
            <div className='right' style={{
               width: '40%',
               maxWidth: '700px',
               padding: '8px',
               marginTop: '50px',
            }}>
               <img style={{
                  width: '100%',
               }} src='https://sapporo-togo.com/static/media/topImage.712b74ce.png' alt='' />
            </div>
         </div>
         <div className="TCbutton" style={{
               display: 'flex',
            }}>
               <TopConButton text='マップからさがす' icon='fas fa-map' />
               <TopConButton text='ジャンルでさがす' icon='fas fa-search' />
               <TopConButton text='登録/ログイン' icon='fas fa-user' />
            </div>
      </div>
   )
}

export default TopContainer;