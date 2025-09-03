import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [isSubmitted,setIsSubmitted] = useState(false)
    const [user,setUser] = useState(null)
    return(
        <UserContext.Provider value={{user,setUser,isSubmitted,setIsSubmitted}}>
            {children}
        </UserContext.Provider>

    )

}

export default UserContextProvider