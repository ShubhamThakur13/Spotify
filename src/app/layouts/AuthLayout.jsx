import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='bg-[#121212] w-screen h-screen flex justify-center items-center'>
        <Outlet/>
    </div>
  )
}

export default AuthLayout
