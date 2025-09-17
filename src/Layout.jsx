import React from 'react'
import { useState } from "react";
import UserContextProvider from './context/UserContextProvider';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Logine from './Components/Logine'
import Profile from './Components/Profile'
import { Outlet } from 'react-router-dom'

function Layout() {
  const [isSubmitted,setIsSubmitted] = useState(false)

  return (
    <div className='flex-1'>
    <Header/>

    <UserContextProvider>
      { isSubmitted ? (
        <>
          <Profile/>
        <Outlet/>

          
        </>

      )
      :(
        <div>

          <Logine setIsSubmitted={setIsSubmitted}/>
          

        </div>
      )

      }
    </UserContextProvider>

    <Footer />
    </div>
  )
}

export default Layout