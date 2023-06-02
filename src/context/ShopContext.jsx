import React from 'react'
import {createContext, useState} from 'react'
import PRODUCTS from '../Data/CartItems'
import {toast} from 'react-toastify'
import CartItems from '../Data/CartItems';

export const ShopContext = createContext(null);
 
  
const getDefaultCart = () =>{
    let cart ={}
    for (let i = 1; i < PRODUCTS.length; i++){
        cart[i] = 0;
    };


    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);

    
    const totalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in CartItems){
            if (cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
       
        return totalAmount;
    };

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));

        toast.success(` Succesfuly added the product to your cart a Discount Code will be sent shortly after confirming the purchase`,{
            position: 'top-left'
        })

    };

    
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));

        toast.info(`You have removed this product from your cart if you are looking for something different please see our home page for more items which may fit your desire`,{
            position: 'top-center'
        })
        
    };

    const checkout = () =>{
        
        setCartItems(getDefaultCart)
        return;
    };

    const contextValue= {
        cartItems, 
        addToCart, 
        removeFromCart, 
        totalCartAmount,
        checkout};

    //console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
