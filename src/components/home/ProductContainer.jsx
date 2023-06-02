import React from 'react'
import PRODUCTS from '../../Data/CartItems'
import { HomeProducts } from './HomeProducts'

const ProductContainer = () => {
  return (
   <section>
    <div className="promo">
    <h3>
     Don Games has the lates Game in the market just for you and a monthly free Shipping deal this month hurry while stock lasts.
    </h3>
    </div>

    <div  className='home-cart'>
     {PRODUCTS.map((item)=> (
      <HomeProducts data={item}/>
     ))}
    </div>
   </section>
  )
}

export default ProductContainer