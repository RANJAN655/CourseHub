import React, { useEffect } from 'react'
import { useState } from "react";
import UserContextProvider from './context/UserContextProvider';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Logine from './Components/Logine'
import Profile from './Components/Profile'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context2/Theme';
import ThemeBtn from './Components/ThemeBtn';

function Layout() {
  const [isSubmitted,setIsSubmitted] = useState(false)
  const [themeMode,setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  
  useEffect(() => {
    const rk = document.querySelector('html')
    rk.classList.remove('light','dark')
    rk.classList.add(themeMode)
   
  }, [themeMode])
  

  return (
    <div className='flex-1 bg-white dark:bg-[#0a192f] '>
    <Header/>
      <ThemeProvider value = {{themeMode,darkTheme,lightTheme}}>
     <div className="w-[100px] absolute right-100 max-sm:right-20 top-4 ">
                         <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                             <ThemeBtn />
                         </div>
             </div>
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
    </ThemeProvider>

    <Footer />
    </div>
  )
}

export default Layout