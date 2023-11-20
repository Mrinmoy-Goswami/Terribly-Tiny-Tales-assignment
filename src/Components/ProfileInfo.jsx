import React from 'react'
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

function ProfileInfo({username,followers,following}) {
  return (
    <div className='ml-4'>
<span className='flex flex-row  items-center p-2 items-center justify-center'>

<p className='sm:text-[30px] text-md font-bold font-sans ml-8 ml-2 mb-2'>{username}</p>
<DiamondRoundedIcon color='secondary' fontSize="small" />
<CheckCircleSharpIcon color="success" fontSize="small"/>

  </span>
  <span className='flex flex-row items-center justify-center mr-10 text-gray-600 ml-4'> 

  <span className='ml-5 px-5 sm:mx-5 sm:px-5'>
    <p className='border-2 border-solid  sm:text-xl  rounded border-gray-600 px-4  font-bold ' >{followers}</p>
    <p>Followers</p>

  </span>
  <span>
    <p className='border-2 border-solid  sm:text-xl rounded border-gray-600 px-4 font-bold'>{following}</p>
    <p>Following</p>
  </span>

  </span>   
    </div>
  )
}

export default ProfileInfo
