import React from 'react'

export default function Card({ id, name, description, final_price, original_price, img_url }) {
  return (
    <div className='box w-96 '>
      <img src={img_url} alt={name} className="drop-shadow-lg"></img>
      <div className='flex justify-between p-4'>
        <p className='font-bold capitalize'>{name}</p>
        <div className='flex space-x-2'>
          {original_price && <p className='line-through	text-slate-500'> ${original_price}</p>}
          <p className='font-bold'>${final_price}</p>
        </div>
      </div>
      <p className='font-light text-gray-500 px-4 py-2'>{description}</p>

      <button
        class="px-6 py-2 w-full transition ease-in duration-200 capitalize rounded text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-2 font-bold border-blue-500 focus:outline-none">Add
        to cart</button>
    </div>
  )
}
