import React from 'react'
import {CartIcon} from '../../assets/icons/Icons'
import { ShopContext } from '../../context/ShopContext'
import {useContext} from 'react'

//extracting the proparties of the item inside the param to create the items
export const HomeProducts = (props) => {

const {id,img, name, price,game,} = props.data;
const {addToCart, cartItems} = useContext(ShopContext)

const handleItem = () =>{
addToCart(id)
}

 const cartItemAmount = cartItems[id]
  return (

<div className="product-container">

  <img src={img}/>

    <div className="product-details">
    <h4>{name}</h4>
    <h4>{game}</h4>
    <p>R {price}</p>

          <div className="add-to-cart-btn">
            <button type='button'
            onClick={()=>handleItem(id)}> 
            <div className="buy">
              <CartIcon/> 
              {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </div> 
            </button>
          </div>

    </div>
      
      

</div>


  
  )
}
