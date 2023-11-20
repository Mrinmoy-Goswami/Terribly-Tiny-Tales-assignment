import React from 'react'
import logo from "../assets/STORIES.png"

function Navbar() {
  return (
    <nav className='mt-0  h-20 bg-black w-full flex flex-row justify-between'>
      <span className='flex flex-row items-center'>
        <img className='h-20 w-30 '  src={logo}/>
      </span>
      <span>
        <button className='bg-yellow-400 p-3 rounded-xl m-3 font-bold'>Courses</button>
      </span>
    </nav>
  )
}

export default Navbar
