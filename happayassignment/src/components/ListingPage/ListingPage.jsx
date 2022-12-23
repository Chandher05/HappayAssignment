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
        {/* <Divider></Divider> */}
      </div>
      <div className=''>
        <Divider></Divider>
      </div>
      <div className='box m-7 w-full flex flex-wrap space-between gap-x-8 gap-y-6' >
        {cards.map((card) => {
          return <Card key={card.id} {...card}></Card>
        })}
      </div>
    </div>
  )
}
