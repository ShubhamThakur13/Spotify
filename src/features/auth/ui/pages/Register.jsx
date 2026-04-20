import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
   let navigate = useNavigate();
  return (
    <div className='text-white flex flex-col gap-4'>
      <div className="logo text-center flex flex-col gap-3 mb-7">
        <h1 className='text-5xl'><i class="ri-spotify-fill"></i></h1>
        <h1 className='text-5xl font-extrabold w-[350px]'>Sign up to</h1>
         <h1 className='text-5xl font-extrabold'>startlistening</h1>
      </div>

      <div className="middle">
        <form className='flex flex-col gap-3'>
          <div className='flex flex-col'>
            <label className='font-bold'>Email</label>
          <input className='p-2 border rounded border-gray-100' type="email" name="email" id="email" />
          </div>


          <div className='flex flex-col'>
            <label className='font-bold'>Password</label>
          <input className='p-2 border rounded border-gray-100' type="password" name="password" id="password" />
          </div>

          <button className='bg-[#20D760] p-2 font-bold cursor-pointer rounded-3xl text-black hover:scale-110 transition-all duration-200'>Continue</button>
        </form>
      </div>

      <p className='text-center font-bold'>or</p>

      <div className="sociallogins flex flex-col gap-2">
        <p className='p-2 pl-5 border rounded-3xl cursor-pointer   flex  font-bold gap-8 border-gray-400 hover:border-white hover:scale-110 transition-all duration-200'><span><i width='25' height='24' class="ri-smartphone-line"></i></span>Sign Up with phone number</p>
        <p className='p-2 pl-5 border rounded-3xl cursor-pointer flex  font-bold gap-8 border-gray-400 hover:border-white hover:scale-110 transition-all duration-200'><span><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.1 12.2272C22.1 11.5182 22.0364 10.8363 21.9182 10.1818H12.5V14.05H17.8818C17.65 15.3 16.9455 16.3591 15.8864 17.0682V19.5772H19.1182C21.0091 17.8363 22.1 15.2727 22.1 12.2272Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4998 21.9999C15.1998 21.9999 17.4635 21.1045 19.118 19.5772L15.8862 17.0681C14.9907 17.6681 13.8453 18.0227 12.4998 18.0227C9.89529 18.0227 7.69075 16.2636 6.90439 13.8999H3.56348V16.4908C5.20893 19.759 8.59075 21.9999 12.4998 21.9999Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.90455 13.9C6.70455 13.3 6.59091 12.6591 6.59091 12C6.59091 11.3409 6.70455 10.7 6.90455 10.1V7.50909H3.56364C2.88636 8.85909 2.5 10.3864 2.5 12C2.5 13.6136 2.88636 15.1409 3.56364 16.4909L6.90455 13.9Z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4998 5.97727C13.968 5.97727 15.2862 6.48182 16.3226 7.47273L19.1907 4.60455C17.4589 2.99091 15.1953 2 12.4998 2C8.59075 2 5.20893 4.24091 3.56348 7.50909L6.90439 10.1C7.69075 7.73636 9.89529 5.97727 12.4998 5.97727Z" fill="#EA4335"></path></svg></span>Sign up with Google</p>
        <p className='p-2 pl-5 border rounded-3xl cursor-pointer flex  font-bold  gap-8 border-gray-400 hover:border-white hover:scale-110 transition-all duration-200'><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.195 4.513C15.873 3.69 16.351 2.567 16.351 1.433C16.351 1.278 16.341 1.123 16.318 1C15.206 1.044 13.872 1.734 13.083 2.668C12.449 3.379 11.871 4.513 11.871 5.647C11.871 5.825 11.905 5.991 11.916 6.047C11.982 6.058 12.094 6.08 12.216 6.08C13.206 6.08 14.45 5.413 15.195 4.513ZM15.973 6.313C14.317 6.313 12.961 7.325 12.093 7.325C11.171 7.325 9.97 6.38 8.525 6.38C5.779 6.38 3 8.648 3 12.918C3 15.586 4.023 18.398 5.301 20.211C6.391 21.744 7.347 23 8.725 23C10.081 23 10.682 22.1 12.371 22.1C14.083 22.1 14.472 22.978 15.973 22.978C17.463 22.978 18.453 21.61 19.397 20.265C20.442 18.72 20.887 17.219 20.897 17.142C20.809 17.119 17.963 15.952 17.963 12.695C17.963 9.871 20.198 8.604 20.331 8.504C18.852 6.381 16.596 6.314 15.973 6.314V6.313Z" fill="white"></path></svg></span>Sign up with Apple</p>
      </div>

      <div className='flex flex-col gap-3 items-center'>
        <p className='text-gray-500'>Already have an account?</p>
        <h2 onClick={()=> navigate('/')} className='font-bold cursor-pointer'>Log in</h2>
      </div>


    </div>
  )
}

export default Register
