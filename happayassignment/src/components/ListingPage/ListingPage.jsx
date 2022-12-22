import React from 'react'
import Divider from '../Divider/Divider'
import Card from '../Card/Card'

import data from '../../assets/data.json'


export default function ListingPage() {
  console.log(data)
  return (
    <div className='m-3 justify-center'>
      <div className='flex justify-center'>
        <h4 className='font-bold text-2xl text-gray-800 antialiased'>Most Popular</h4>
        {/* <Divider></Divider> */}
      </div>
      <div className=''>
        <Divider></Divider>
      </div>
      <div className='box m-7 flex flex-wrap space-between gap-x-8 gap-y-6' >
        {data.map((card) => {
          return <Card key={card.id} {...card}></Card>
        })}
      </div>
    </div>
  )
}
