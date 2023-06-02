import React from 'react'
import {Link} from 'react-router-dom'
import { CartIcon, Home } from '../assets/icons/Icons'


export const Navbar = () => {

  return (
    <nav>
      <div className="nav-container">

        <ul>
          <li>
          <Link to='/'>NJADU GAME STORE</Link>
          </li>
        </ul>
        
        <div className="nav-cart-container">
          <ul>
            <li>
            <Link to='/CartContainer'><CartIcon/></Link>
            </li>
          </ul>

          <div className="amount-container">
            <p></p>
          </div>
        </div>
        
      </div>
    </nav>
  )
}
