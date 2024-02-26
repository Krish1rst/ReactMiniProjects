import React,{useState} from 'react'
import StarRating from './StarRating/index'
import Clock from './Clock/index'
import FetchData from './FetchData/FetchData'
import { toast } from 'react-toastify';


function App() {

  const notify = () => toast.success("Success");
  return (
    <>
       <div>
      <button onClick={notify}>Notify!</button>
 

    </div>
      {/* <StarRating/> */}
      {/* <Clock/> */}
        {/* <FetchData/> */}
        
    </>
  )
}

export default App