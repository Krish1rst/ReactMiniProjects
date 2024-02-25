import React,{useState} from 'react'
import StarRating from './StarRating/index'
import Clock from './Clock/index'
import FetchData from './FetchData/FetchData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notify = () => toast.success("Wow so easy!");
  return (
    <>
       <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
    </div>
      {/* <StarRating/> */}
      {/* <Clock/> */}
        {/* <FetchData/> */}
        
    </>
  )
}

export default App