import { createContext, useContext, useState,useEffect } from "react";
import ShopCart from "../components/ShopCart";
const ShoppingCartContext = createContext({})

const initialCartItems = localStorage.getItem("Shopping-cart") ? JSON.parse(localStorage.getItem("Shopping-cart")):[]

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [isOpen,setIsOpen]= useState(false)
  useEffect(()=>{
    localStorage.setItem("Shopping-cart",JSON.stringify(cartItems))
  },[cartItems])
  const openCart= ()=>{
    setIsOpen(true)
  }
  const closeCart= ()=>{
    setIsOpen(false)
  }
  
  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
const cartQuatity = cartItems.reduce((quantity,item)=> item.quantity + quantity,
0)
const test = (id)=>{
  console.log(true);
  
}

  return (
    
    <ShoppingCartContext.Provider
value={{
  cartItems,
  getItemQuantity,
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
  openCart,
  closeCart,
  cartQuatity,
  test
}}
>
{children}
<ShopCart isOpen={isOpen}/>
</ShoppingCartContext.Provider>
)
}
export default ShoppingCartProvider;

export const useShoppingcart =()=>{
  return useContext(ShoppingCartContext)
}