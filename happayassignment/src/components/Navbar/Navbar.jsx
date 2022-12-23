import happayBlueLogo from '../../assets/blue_logo.svg'
import './navbar.css'
import { IconShoppingCart, IconUserCircle } from '@tabler/icons';
import { useStoreState } from 'easy-peasy';

export default function Navbar({ setPage }) {

  const totalItem = useStoreState((state) => state.total)

  return (
    <div className="p-3 flex justify-between w-screen" >
      <div className='flex'>
        <a target="_blank">
          <img src={happayBlueLogo} className="logo happay" alt="Happay logo" />
        </a>
        <h1 className='px-3 py-2 font-medium text-sky-700/100'>
          Happay
        </h1>
      </div>

      <div className='flex'>
        <button>
          <span className="relative inline-block">
            <IconShoppingCart className='m-1 hover:text-gray-500 rounded-full' onClick={() => setPage(1)}></IconShoppingCart>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs text-bold leading-none text-red-100 transform translate-x-1/4 -translate-y-1/2 bg-red-600 rounded-full">
              {totalItem}
            </span>
          </span>

        </button>
        <IconUserCircle className='m-3'></IconUserCircle>
      </div>
    </div >
  )
}
