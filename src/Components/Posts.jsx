import React from 'react'

import PostCard from './PostCard'
import posts from '../Data/data'

function Posts() {

  return (
    <>
    <div className='w-screen h-full mt-4 flex justify-start'>
      <span id='postNumber' className='sm:text-xl font-bold text-sky-400 border-t-2 border-r-2 border-gray-200 p-4
      
      '>{posts.length} posts</span>

    </div>
    

    <hr className='z-[-2] w-screen'></hr>

    <div className='w-screen flex sm:flex-row flex-col sm:flex-wrap items-center justify-center'>

   {
    posts.map((post,index)=> (<PostCard key={index} title = {post.title} post = {post.post} tag={post.tag} />))
   }
   
    </div>


    </>
  )
}

export default Posts
