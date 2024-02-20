import React,{useState} from 'react'
import { FaStar } from "react-icons/fa";
function index() {
const [rating,setRating]=useState(0);
const handleClick=(index)=>{
    setRating(index);
}
  return (
    <section className="text-3xl font-bold  flex flex-col gap-y-8 items-center justify-center pt-32">
    <div className='flex justify-center bg-slate-200 rounded-xl p-12'>
        {[...Array(5)].map((_,index)=>{
            index+=1;
            return <FaStar key={index} onClick={()=>handleClick(index)} className={`${index<=rating? 'text-yellow-500':'text-black' }`}/>
        })}
        
    </div>
    <p className='text-md text-slate-600 tracking-wide'>Click on to star to set rating</p>
    </section>
  )
}

export default index;