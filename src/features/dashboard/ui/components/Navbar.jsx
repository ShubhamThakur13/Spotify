import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-3 py-6'>
      <div className="left">
        Logo
      </div>

      <div className="middle flex gap-3">
        <p>Home</p>
        <p>Search Bar</p>
      </div>
      

      <div className="right flex gap-3">
        <p>Sign Up</p>
        <p>Login in</p>
      </div>
    </div>
  )
}

export default Navbar
