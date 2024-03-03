import React,{useState} from 'react'
import StarRating from './StarRating/index'
import Clock from './Clock/index'
import FetchData from './FetchData/FetchData'
import { toast } from 'react-toastify';
import ProductSection from './FilterProducts/Filter';
import Form from './Form/Form';


function App() {


  return (
    <>
      <Form />
      {/* <div>
          <button onClick={() => toast.success("Success")}>Notify!</button>
      </div> */}
      {/* <StarRating/> */}
      {/* <Clock/> */}
        {/* <FetchData/> */}
        {/* <ProductSection/> */}
    </>
  )
}

export default App