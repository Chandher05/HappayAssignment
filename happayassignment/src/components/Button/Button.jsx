import React from 'react'

export default function Button({ count, setCount, id }) {

  if (count == 0) {
    return (
      <button
        onClick={() => setCount({ id, count: 1 })}
        className="px-6 py-2 w-full transition ease-in duration-200 capitalize rounded text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-2 font-bold border-blue-500 focus:outline-none">Add
        to cart</button>
    )
  }
  return (
    <div class=" flex rounded-md shadow-sm" role="group">
      <button onClick={() => setCount({ id, count: count - 1 })} type="button" className=" py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-l-lg border border-blue-500 hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700">
        -
      </button>
      <button disabled type="button" className=" w-full py-2 px-4 text-sm font-medium text-blue-700 bg-white border-t border-b border-blue-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
        {count}
      </button>
      <button onClick={() => setCount({ id, count: count + 1 })} type="button" className="py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-r-md border border-gray-200 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700">
        +
      </button>
    </div>
  )
}
