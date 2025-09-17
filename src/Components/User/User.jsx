import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className=' flex-1 w-[100vw] min-h-[60vh] bg-gray-600 text-white text-3xl p-4'>
      User = {userid}
    </div>
  )
}

export default User