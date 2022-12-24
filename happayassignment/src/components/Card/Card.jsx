import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'

export default function Card({ id, name, description, final_price, original_price, img_url }) {

  const setCount = useStoreActions((actions) => actions.addToCart);
  const count = useStoreState((state) => state.cart[id] || 0);

  return (
    <div className='box w-full p-12 m-3'>
      <img src={img_url} alt={name} className="drop-shadow-md"></img>
      <div className='flex justify-between p-4'>
        <p className='font-bold capitalize'>{name}</p>
        <div className='flex space-x-2'>
          {original_price && <p className='line-through	text-slate-500'> ${original_price}</p>}
          <p className='font-bold'>${final_price}.00</p>
        </div>
      </div>
      <p className='font-light text-gray-500 px-4 py-2'>{description}</p>

      <Button count={count} setCount={setCount} id={id}></Button>
    </div>
  )
}
