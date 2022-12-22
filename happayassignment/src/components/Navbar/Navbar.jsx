import happayBlueLogo from '../../assets/blue_logo.svg'
import './navbar.css'
import { IconShoppingCart, IconUserCircle } from '@tabler/icons';

export default function Navbar() {
  return (
    <div className="nav" >
      <span className='logoTitle'>
        <a target="_blank">
          <img src={happayBlueLogo} className="logo happay" alt="Happay logo" />
        </a>
        <h1 className='heading'>
          Happay
        </h1>
      </span>


      <span className='menuLogo'>
        <IconShoppingCart className='menuItem'></IconShoppingCart>
        <IconUserCircle className='menuItem'></IconUserCircle>
      </span>
    </div >
  )
}
