import React from 'react'


import ProfileInfo from './ProfileInfo';

function PhotoContainer({user}) {
  return (
    <div className=' flex flex-col items-center  sm:h-[600px] h-1/4 m-0 p-0 ' >
      
      <img src={user.coverPic} className=' w-screen h-2/3 object-cover  m-0 p-0' />
      <img src={user.profilePic} className='rounded-full sm:w-[180px] sm:h-[180px] border-2 border-solid border-gray-400 object-cover absolute right-[8rem] xl:left-80 xl:top-[28rem] top-[18rem] left-6 md:top-[27rem] md:left-10 lg:left-40 w-[100px] h-[100px] m-0 p-0'/>
      <div>
       <ProfileInfo username={user.username} followers={user.followers} following={user.following}/>    
      </div>
      
    </div>
  )
}

export default PhotoContainer
