import React from 'react'
import Divider from '../Divider/Divider'
import Card from '../Card/Card'


import { useStoreState } from 'easy-peasy';


export default function ListingPage() {
  const cards = useStoreState((state) => state.data)
  return (
    <div className='m-3 p-4 justify-center'>
      <div className='flex justify-center'>
        <h4 className='font-bold text-2xl text-gray-800 antialiased'>Most Popular</h4>
      </div>
      <div >
        <Divider></Divider>
      </div>
      <div className='box w-full grid grid-cols-3 gap-7 p-6' >
        {cards.map((card) => {
          return <Card key={card.id} {...card}></Card>
        })}
      </div>
    </div>
  )
}
