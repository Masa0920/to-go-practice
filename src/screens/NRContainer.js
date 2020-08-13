import React from 'react'
import RestaurantCard from '../components/RestaurantCard'

export const NRContainer = () => {
   return (
      <div style={{
         textAlign: 'center',
         backgroundColor: '#f5f5f5',
         padding: '50px',
      }} >
         <h2>人気の店舗</h2>
         <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
         }} >
            <RestaurantCard img='https://firebasestorage.googleapis.com/v0/b/sapporotogo-prod.appspot.com/o/restaurants%2F495c9539-d139-43d2-b1ad-8abf5f19131b?alt=media&token=b9ebf201-c2b7-4061-be9a-bea087831832' title='ステーキレストランがんねん'　text='厚別区/がんねん, ステーキ' />
            <RestaurantCard img='https://firebasestorage.googleapis.com/v0/b/sapporotogo-prod.appspot.com/o/restaurants%2F0491d450-5c70-4ba7-898c-76f6a370a557?alt=media&token=c7c133d8-e10c-4b16-b4a2-b74abdad3017' title='十勝豚丼いっぴん　北十条店' text='東区/豚丼, 豚皿' />
            <RestaurantCard img='https://firebasestorage.googleapis.com/v0/b/sapporotogo-prod.appspot.com/o/restaurants%2Ff3a1968a-d6ec-4ab8-aa04-b3d99dd4bff1?alt=media&token=ce6894c5-14a4-4fb8-a3f1-f59a2e08eb0e' title='十勝豚丼いっぴん　東雁来店' text='東区/豚丼, 豚皿' />
            <RestaurantCard img='https://firebasestorage.googleapis.com/v0/b/sapporotogo-prod.appspot.com/o/restaurants%2F756c0564-1d1b-428d-81ed-cfb633b897e9?alt=media&token=8d0a4447-56d7-44e9-9ea3-912ed38babf7' title='cafeRain' text='中央区/cafeRain, カフェ' />
            <RestaurantCard img='https://firebasestorage.googleapis.com/v0/b/sapporotogo-prod.appspot.com/o/restaurants%2F7abeac81-cdcc-4084-9529-af61dc2725df?alt=media&token=4167f3de-a3d8-4542-87f0-62a60f5e1147' title='リトルジュースバー札幌本店' text='大通/中央区, スイーツ' />
            <RestaurantCard img='https://firebasestorage.googleapis.com/v0/b/sapporotogo-prod.appspot.com/o/restaurants%2F1e8e5892-a4a4-4102-ab99-6a1400169147?alt=media&token=93cb44ae-3e62-4cfe-8121-256631500455' title='十勝豚丼いっぴん　手稲店' text='手稲区/豚丼, 豚皿' />
            <RestaurantCard img='https://firebasestorage.googleapis.com/v0/b/sapporotogo-prod.appspot.com/o/restaurants%2F51b6425f-02fd-4a11-942c-de54bff78810?alt=media&token=68c1b6ec-5513-4535-8c6b-10736ddc7f4d' title='十勝丼いっぴん　平岡店' text='清田区/豚丼, 豚皿' />
            <RestaurantCard img='https://firebasestorage.googleapis.com/v0/b/sapporotogo-prod.appspot.com/o/restaurants%2F8f3c1eab-b868-47d3-9e9d-bc841fe7b98b?alt=media&token=f5c0107f-cf9e-4e46-bf18-4f8329980754' title='自由人舎時館' text='北区/カレーライス, ハンバーグ' />
         </div>
      </div>
   )
}


export default NRContainer;