import React from 'react';
import '../static/css/TopContainer.css';
import TopConButton from '../components/TopConButton';

const TopContainer = () => {
   return (
      <div className='topcontainer' >
         <div className='left'>
            <h2>札幌のテイクアウト事前予約サービス</h2>
            <img src='https://sapporo-togo.com/static/media/logoLarge.61cf1ba4.svg' alt=''/>
            <p>オンラインで注文&決済し、</p>
            <p>札幌の外食の味を</p>
            <p>待ち時間無しでテイクアウト。</p>
            <p>素敵な札幌の味を勤務先やご家庭で。</p>
            <p>札幌ToGoで普段のごはんを</p>
            <p>少しぜいたくにしませんか？</p>
            <div className='button' >
               <TopConButton text='マップから探す' />
               <TopConButton/>
               <TopConButton/>
            </div>
         </div>
         <div>
            <img className='right' src='https://sapporo-togo.com/static/media/topImage.712b74ce.png' alt='' />
         </div>
      </div>
   )
}

export default TopContainer;