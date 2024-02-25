import React from 'react'
import useFetch from '../utils/useFetch'

function FetchData() {
const url='https://api.escuelajs.co/api/v1/products';
const {data,error,isLoading}=useFetch(url)

// const [img1,img2,img3]=images; 
console.log(data)

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='flex flex-col p-8 gap-8'> 
  {data && data.map(post => (
    <div key={post.id} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <h2 className="text-xl font-bold">{post.category?.name}</h2>
      <p className="text-gray-500">{post.description}</p>
      <div className="flex gap-4">
        {post?.images.map(imageUrl => (
          <img key={imageUrl} src={imageUrl} alt="Product" className="w-32 h-32 object-cover" />
        ))}
      </div>
    </div>
  ))}
</div>
  )
}

export default FetchData