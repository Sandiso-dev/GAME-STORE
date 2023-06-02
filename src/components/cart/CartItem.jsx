import React from 'react'
import { useContext } from 'react';
import {ShopContext} from '../../context/ShopContext'

const CartItem = (props) => {
  const {id, name,price, game, img} = props.data;
  const {cartItems, addToCart,removeFromCart} = useContext(ShopContext)
  return (
    <>
<div className="cartItem">
  <img src={img} alt={name}/>

    <div className="description">
    <h4>{name}</h4>
    <h4>{game}</h4>
    <p>R {price}</p>

    <div className="countHandler">
      <button onClick={()=> addToCart(id)}> + </button>
      <input value={cartItems[id]}/>
      <button onClick={() => removeFromCart(id)}> - </button>
    </div>
    </div>

</div>
 
</>

  )
}

export default CartItem