import React from 'react'
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { LikeTag,Eye,Like } from 'iconsax-react';


function About({occupation,site}) {
  return (
    <>
<div className='flex flex-col items-start sm:m-0 mt-4 justify-start '>

    <p className='sm:text-[20px] text-md my-2'>{occupation}</p>
    <p className='text-sky-400 my-2'>{site}</p>
    <span className='flex flex-row my-2'>
<StarsRoundedIcon color='primary'/>
<p className='mr-4'>21k</p>
<LikeTag size="32" color="#FFC436" variant="Bold"/>
<p  className='mr-4'>1k</p>
<Eye size="32" color="gray" variant="Bold"/>
<p  className='mr-4'>12k</p>
<Like size="32" color="#F31559" variant="Bold"/>
<p  className='mr-4'>2k</p>
    </span>
    </div>
    </>
  )
}

export default About
