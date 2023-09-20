import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div  className=' w-full min-h-screen flex flex-col text-white items-center justify-center bg-slate-900 '>
    <p className=' font-bold text-2xl  py-2'> Login</p>
   <form   className=' flex flex-col w-[30%]  gap-10 p-5'>
       <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="email" placeholder=' Enter email'  required />
       <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="password" placeholder='Enter password' required />
       <button className=' px-5 py-3 bg-red-700 rounded-md text-white font-bold'> Login </button>
   </form>
   <Link href="/dashboard/register" className='  text-gray-400 hover:border-b-2 hover: border-red-600' >Don't have an account  <span> create</span> </Link>
</div>
    )
}

export default page