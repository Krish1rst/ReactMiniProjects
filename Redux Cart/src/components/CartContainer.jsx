import React from 'react'
import { useSelector } from 'react-redux'
function CartContainer() {
const {cartItem,amount,total} =useSelector((store)=>store.cart)
        
        
  return (
    <div>CartContainer</div>
  )
}

export default CartContainer