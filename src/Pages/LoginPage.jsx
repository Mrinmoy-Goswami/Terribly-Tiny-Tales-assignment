import React, { useState } from 'react'
import Molecules from '../Components/Molecules'
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import { useContext } from 'react';
import userContext from '../Context/UserContext';

function LoginPage() {
  const [user,setUser] = useContext(userContext)
   const[username,setUsername] = useState();
   const [password,setPassword] = useState();
    const navigate = useNavigate();

    
//Function to login and set the global user data using useContext which will be used in the Profile Page
    const handleLogin = async(e) =>{
           e.preventDefault();
           if(!username || !password){
            alert("Please fill all the details")
           }
           try {
            
             const response = await axios.post("https://userttt.onrender.com/api/login",{
              username:username.trim(),
              password:password.trim()
             });
             setUser(response.data)
             

             navigate('/profile')
           } catch (error) {
            alert(error.response.data)
           }
    }


  return (
    <div className='bg-black'>
      <Molecules/>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-1/2 w-3/4 '>
        <div className='flex flex-col  bg-gradient-to-r from-emerald-500 to-purple-400 rounded p-5 items-center'>
        <h2 className='text-center text-[20px] font-bold font-serif text-white' >Welcome to ttt Stories</h2>
            <h2 className='text-center text-[30px] font-extrabold font-serif text-white' >Login</h2>
            <input type='text' required onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter your name' className='p-2 m-4 w-full rounded focus:outline-pink-300' />
            <input type='password' required onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' className='p-2 m-4 w-full rounded focus:outline-pink-300'/>
            <button onClick={handleLogin} className='p-2 mt-4 bg-sky-400 w-1/4 hover:bg-sky-300 sm:font-semibold rounded-xl  text-white font-serif'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
