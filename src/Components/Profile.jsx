import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return
  return (
    <div className=' max-md:text-[15px] flex flex-col justify-center items-center text-black dark:text-white text-2xl  py-[2vh] gap-4'>
      <p className='mr-[14vw]'>welcome <span className=' max-md:text-[20px] text-red-400 text-4xl font-bold uppercase  align-middle '>{user.userName}</span> to CourseHub 🚀 </p>
      <p>Luckey email id : <span className=' max-md:text-[17px] text-red-400 text-2xl font-bold tracking-widest ml-2 '> (  {user.password}  )</span>  </p>


    </div>

)
}

export default Profile