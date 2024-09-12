import React from 'react'
import {  Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingcart } from '../context/shoppingCartContext'
import CartItem from "./CartItem"
import formatCurrency from './Format'
import storeItems from '../data/storeItem.json'
import WhatsAppLink from './WhatsApp'

const ShopCart = ({isOpen}) => {
    const {cartItems,closeCart} =  useShoppingcart()
  return (
    <Offcanvas show ={isOpen} placement='end' onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
   <Stack gap={3} className='mb-5'>
   {cartItems.map((item)=>(
      <CartItem key={item.id} {...item}/>
      ))}
      
     <div className="ms-auto fw-bold fs-5">
      Total {" "}
      {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
     </div>

   </Stack>
   <h5>Contact Us To Complete the Purchase Process</h5>
   <WhatsAppLink/>

      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShopCart
