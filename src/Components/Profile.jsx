import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return
  return (
    <div className='flex flex-col justify-center items-center text-white text-2xl  py-4'>
      <p>welcome <span className='text-red-400 text-4xl font-bold uppercase tracking-widest align-middle '>{user.userName}</span>  you are one step back to you future job 🚀 </p>
      <p className='ml-[180px]'>Luckey email id     coupen send to your email  <span className='text-red-400 text-2xl font-bold  tracking-widest align-middle '> (  {user.password}  )</span>  </p>


    </div>

)
}

export default Profile