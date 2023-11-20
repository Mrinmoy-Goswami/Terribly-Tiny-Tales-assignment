import React, { useState } from 'react'
import { LikeTag } from 'iconsax-react';

function PostCard({title,post,tag}) {

  const [read,setRead] = useState(false);

  const readMore=()=>{
    setRead(read=>!read);
  }

  return (
    <div className={`sm:w-1/4 m-4 p-5 sm:border-2 sm:border-gray-300 rounded flex flex-col justify-start sm:h-60 
     ml-2 overflow-x-hidden ${read?'overflow-y-auto':''} `}>
      <span className='flex flex-row justify-between items-start px-4 mb-4'>
        <h2 className='font-bold font-sans'>{title}</h2>
        <span>
        <LikeTag size="32" color="#FFC436" variant="Bold"/>
        </span>
      </span>
      <p onClick={readMore} className={`text-left px-4 ${read?'':'line-clamp-3'} `}>
       {post}
      </p>
      <span className='flex flex-row justify-between items-start px-4 mt-5'>
        <p className='text-xs '>
          <span className='text-sky-400 mr-1 font-bold'>

        {tag}
          </span>
          <span>
            By User
          </span>
        </p>
        <p  className="text-xs">
            Date-2min read - 120 views
        </p>
        </span>
        <span className='w-screen sm ;w-0'>
          <hr className='sm:w-0 w-full mt-6'></hr>
        </span>
    </div>
  )
}

export default PostCard
