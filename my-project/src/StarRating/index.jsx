import React from 'react'
import { FaRegStar } from "react-icons/fa";
function index() {
  return (
    <div className='flex justify-center'>
        {[...Array(5)].map(()=>{
            return <FaRegStar className='text-pink-500'/>
        })}
        
    </div>
  )
}

export default index;