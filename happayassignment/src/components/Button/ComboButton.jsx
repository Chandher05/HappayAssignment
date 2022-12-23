import { useStoreActions } from 'easy-peasy';
import React, { useState } from 'react'

export default function ComboButton({ count, id }) {
  const setCount = useStoreActions((actions) => actions.addToCart);
  return (
    <div className=" flex rounded-md shadow-sm" role="group" >
      <button onClick={() => setCount({ id, count: count - 1 })} type="button" className=" py-2 px-4 text-sm font-medium text-white bg-gray-700 rounded-l-lg border border-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-700">
        -
      </button>
      <button disabled type="button" className="py-2 px-4 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700">
        {count}
      </button>
      <button onClick={() => setCount({ id, count: count + 1 })} type="button" className="py-2 px-4 text-sm font-medium text-white bg-gray-700 rounded-r-md border border-gray-500 hover:bg-white hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-700">
        +
      </button>
    </div >
  )
}
