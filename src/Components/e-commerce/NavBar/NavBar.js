import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import './NavBar.css'
import { useSelector } from 'react-redux'
export default function NavBar() {
  const cart = useSelector(state => state.cartReducer.cart)
  let count = 0 ;

  cart.forEach((item) => (count +=item.quantity))
  return (
    <nav>
        <h2 className='banner'>
            my store
        </h2>
        <div className="right-layout">
            <div className="cart-layout">
                <FaShoppingCart/>
                <h3>{count}</h3>
            </div>
        </div>
      
    </nav>
  )
}
