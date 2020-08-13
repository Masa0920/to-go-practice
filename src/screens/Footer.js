import React from 'react'
import "../static/css/all.css"

export const Footer = () => {
   return (
      <ul className="footer" style={{
         display: "flex",
         fontSize: "11px",
         listStyle: "none",
         marginTop: "30px",
         marginBottom: 0,
      }} >
         <li><a href="#" >利用規約</a></li>
         <li>｜</li>
         <li><a href="#" >プライバシーポリシー</a></li>
         <li>｜</li>
         <li><a href="#" >特定商取引に基づく表示</a></li>
         <li>｜</li>
         <li>管理・運営：</li>
         <li><a href="#" >株式会社Lboap</a></li>
         <li>(c)2020 Lboap,inc</li>
      </ul>
   )
}


export default Footer