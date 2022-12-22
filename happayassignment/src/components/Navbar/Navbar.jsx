import happayBlueLogo from '../../assets/blue_logo.svg'
import './navbar.css'
import { IconShoppingCart, IconUserCircle } from '@tabler/icons';

export default function Navbar() {
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
        <IconShoppingCart className='m-3'></IconShoppingCart>
        <IconUserCircle className='m-3'></IconUserCircle>
      </div>
    </div >
  )
}
