import React from 'react'
import { Link } from 'react-router-dom'
import {ChevronUp} from '../../assets/icons/Icons'
import { ShopContext } from '../../context/ShopContext'
import {useContext} from 'react'
import PRODUCTS from '../../Data/CartItems'
import CartItem from '../cart/CartItem'

export const CartContainer = () => {
  const {cartItems, totalCartAmount, checkout} = useContext(ShopContext)

  const totalAmount = totalCartAmount()


  if (cartItems < 1){
    return(
      <section>
        <header>
          <h3>Your Cart Is Currently Empty</h3>
          <p>
            Continue You Shopping and come back here 
            to follow up on your order.
            
             <Link to='/HomeProducts' >
             click here.
            </Link>

          </p>
        </header>
      </section>
    )
  }

  return (
    <>
    <div className='cart'> 
      {PRODUCTS.map((item)=>{
      if (cartItems[item.id] !== 0) {
      return <CartItem data={item}/>
      }
    })}</div>

<hr />

<div className="checkout">
  <p>Total: R {totalAmount}</p> 
  <button onClick={()=> checkout()}> checkout</button>
  <button ><Link to='/'>shop</Link>
  </button>
</div>
    </>
  )
}
