import { IconArrowLeft } from '@tabler/icons'
import { useStoreState } from 'easy-peasy'
import React, { useEffect, useState } from 'react'
import ComboButton from '../Button/ComboButton'

export default function OrderSummary({ setPage }) {

  const cards = useStoreState((state) => state.data)
  const totalItem = useStoreState((state) => state.total)
  const cart = useStoreState((state) => state.cart)
  const [billData, setBillData] = useState([]);




  useEffect(() => {
    setBillData(cards.map((card) => {
      return {
        count: cart[card.id],
        ...card
      }
    }))
  }, [cart])

  const totalBill = () => {
    return billData.reduce((acc, item) => {
      return acc + parseInt(item.count * item.final_price)

    }, 0)
  }

  return (
    <div className='flex items-center justify-center'>
      <div className=' m-6 w-full p-4 container'>
        <div>
          <a className='flex my-4 text-gray-500 text-sm' onClick={setPage}> <IconArrowLeft className='mx-2' ></IconArrowLeft> Back To Home</a>
          <p className='my-4 font-semibold text-lg'>Order Summary ({totalItem} Items )</p>
        </div>
        <div className="m-4 grid grid-cols-5 gap-4">
          <div className='sm:col-span-5 lg:col-span-3 box w-full border border-grey-100 p-4'>
            <div className='grid grid-cols-3 '>
              <div >
                <p className='m-3 p-3 font-semibold text-xs text-gray-500'>S. NO</p>
              </div>
              <div>
                <p className='m-3 p-3 font-semibold text-xs text-gray-500'>ITEMS</p>
              </div>
              <div>
                <p className='m-3 p-3 font-semibold text-xs text-gray-500'>QTY</p>
              </div>
            </div>
            <hr className="h-0.5 w-full  bg-gray-300"></hr>

            {billData.map((item, index) => {
              if (item.count > 0) {
                return (
                  <div key={item.id} className='grid grid-cols-3'>
                    <div className='m-3 p-3 font-semibold text-xs text-gray-500'>{index + 1}.</div>
                    <div className='m-3 p-3 capitalize font-semibold text-xs text-gray-500'>{item.name}</div>
                    <div className='m-3 p-3 font-semibold text-xs text-gray-500'><ComboButton count={item.count} id={item.id}></ComboButton></div>
                  </div>
                )
              }
            })}

            {/* <div className='grid grid-cols-3'>
            <div className='m-3 p-3 font-semibold text-xs text-gray-500'>1.</div>
            <div className='m-3 p-3 font-semibold text-xs text-gray-500'>Food card</div>
            <div className='m-3 p-3 font-semibold text-xs text-gray-500'><ComboButton></ComboButton></div>
          </div> */}
            <hr className="h-0.5 w-full  bg-gray-300"></hr>
            <button onClick={setPage} className='p-2 font-semibold text-sm text-blue-500'>+ Add More Items</button>

          </div>
          <div className='sm:col-span-5 lg:col-span-2 box border border-grey-100 bg-blue-50 p-4'>
            <p className='p-2 m-3 font-semibold text-md'>Price Details</p>
            <hr className="h-0.5 w-full  bg-gray-200"></hr>
            {billData.map((item, index) => {
              if (item.count > 0) {
                return (
                  <div key={index} className='grid grid-cols-2'>
                    <div className='m-3 p-3 py-4 font-semibold text-base text-gray-500'>{item.count} X ${item.final_price}.00 </div>
                    <div className='m-3 p-3 font-semibold text-base text-gray-500 justify-self-end'>${item.count * item.final_price}.00</div>
                  </div>
                )
              }
            })}

            {/* <div className='grid grid-cols-2 px-4 justify-between'>
            <div className='m-3 p-3 font-semibold text-base text-gray-500'>2 X $21.00 </div>
            <div className='m-3 p-3 font-semibold text-base text-gray-500 justify-self-end'>$42</div>
          </div> */}
            <hr className="h-0.5 w-full  bg-gray-200"></hr>
            <div className='grid grid-cols-2 px-4 justify-between'>
              <div className='m-3 p-2 font-semibold text-base text-gray-500'>Total Savings </div>
              <div className='m-3 p-2 font-semibold text-base text-green-500 justify-self-end'>- $42.00</div>
              <div className='m-3 p-2 font-semibold text-base text-gray-500'>Delievery Fee </div>
              <div className='m-3 p-2 font-semibold text-base text-gray-500 justify-self-end'>$ 5.00</div>
              <div className='m-3 p-2 font-semibold text-base text-gray-500'>Taxes and Charges  </div>
              <div className='m-3 p-2 font-semibold text-base text-gray-500 justify-self-end'>$2.00</div>
            </div>
            <hr className="h-0.5 w-full  bg-gray-200"></hr>
            <div className='grid grid-cols-2 px-4 justify-between'>
              <div className='m-3 p-3 font-bold text-xs text-gray-500'>To Pay </div>
              <div className='m-3 p-3 font-bold text-base text-gray-700 justify-self-end'>${totalBill() + 5 + 2}.00</div>
            </div>
            <button
              className=" p-2 w-full transition ease-in duration-200 capitalize rounded text-sm text-white bg-blue-500 hover:bg-white hover:text-blue-500 border-2 font-bold border-blue-500 focus:outline-none">
              Place Order</button>
          </div>

        </div>

      </div>
    </div>
  )
}



