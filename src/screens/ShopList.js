import React from 'react'
import ShopCard from '../components/ShopCard'

export const ShopList = () => {
   return (
      <div style={{
         backgroundColor: '#fff0ed',
         textAlign: 'center',
         padding: '20px 0',
      }} >
         <h2>掲載飲食店</h2>
         <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
         }} >
            <ShopCard img='https://images.ctfassets.net/ty5a6w0tuizd/25iSFSIJ87VWUjuWuVNIRH/34d2edb396486eb7cc345f78b43d1ccb/_________.jpg?w=200&h=200' text='SASSYU' />
            <ShopCard img='https://images.ctfassets.net/ty5a6w0tuizd/4ALBb042XFYzQsa6gJtm3T/d6e1fda51f63ce48f9d3be5927bbcfc5/download.jpg?w=200&h=200' text='インドカレー アマン' />
            <ShopCard img='https://images.ctfassets.net/ty5a6w0tuizd/4BxBQbKqKnAAssJShA0AAq/29d4de04a5f1ed2d01364aec94289434/LOGO__4_.jpg?w=200&h=200' text='金丸農園直営野菜居酒屋ルンゴカーニバル' />
            <ShopCard img='https://images.ctfassets.net/ty5a6w0tuizd/7rZTqyPSkdAruNTgq7F0To/cf8eb04df932ce059180230ca530a023/_________.png?w=200&h=200' text='ピッカーニャ' />
            <ShopCard img='https://images.ctfassets.net/ty5a6w0tuizd/xmLK7Ejguub9EUp9ggqkB/345cfd104ad58f660f9ca2e552a4e2af/________________1__1_.png?w=200&h=200' text='焼き鳥 はなごし' />
            <ShopCard img='https://images.ctfassets.net/ty5a6w0tuizd/2evHYmtwoByXmbipI7Hken/b7111244649d677f89ae81812a34ea4d/Logo__3_.jpg?w=200&h=200' text='おずsmoked和taste' />
            <ShopCard img='https://images.ctfassets.net/ty5a6w0tuizd/7HGPcPOaJvO6rlUk4O2Q8z/34437a57b5b78935c04a42c0350d6ac0/P031905921_69.jpg?w=200&h=200' text='Asian Village' />
            <ShopCard img='https://images.ctfassets.net/ty5a6w0tuizd/5ACynzGodr2x0fetXzf2hs/30735bdb0b7cfca4411250e87c71ec88/___________2_.jpg?w=200&h=200' text='TK36' />
         </div>
      </div>
   )
}


export default ShopList