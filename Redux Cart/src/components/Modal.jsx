import React from 'react'
import { closeModal } from '../features/modal/ModalSlice.jsx'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
function Modal() {
  const dispatch=useDispatch();
  return (
    <aside className='modal-container'>
    <div className='modal'>
      <h4>Remove all items from your shopping cart?</h4>
      <div className='btn-container'>
        <button onClick={()=>{
          dispatch(clearCart());
          dispatch(closeModal())
        }} type='button' className='btn confirm-btn'>
          confirm
        </button>
        <button onClick={()=>dispatch(closeModal())} type='button' className='btn clear-btn'>
          cancel
        </button>
      </div>
    </div>
  </aside>
  )
}

export default Modal