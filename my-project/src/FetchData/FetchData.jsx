import React from 'react'
import useFetch from '../utils/useFetch'

function FetchData() {
const url='https://jsonplaceholder.typicode.com/posts';
const {data,error,isLoading}=useFetch(url)
console.log(data)
if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='flex flex-col p-8  gap-8'>  {data && data.map(post => (
        <div key={post.id} className='flex flex-col gap-2 bg-slate-300 rounded-xl p-4'>
          <h2 className='text-md text-gray-700 font-semibold line-clamp-2 '>TITLE :  {post.title}</h2>
          <p className='text-sm text-gray-600 underline '>{post.body}</p>
        </div>
      ))}
      </div>
  )
}

export default FetchData