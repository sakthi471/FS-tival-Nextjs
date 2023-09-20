"use client"
import Link from 'next/link'
import React, { FormEventHandler } from 'react'

const page = () => {
  
   
  const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
      
  }
  
  return (
    <div  className=' w-full min-h-screen flex flex-col text-white items-center justify-center bg-slate-900 '>
         <p className=' font-bold text-2xl  py-2'> Register</p>
        <form  onSubmit={ (e)=> handleSubmit(e)} className=' flex flex-col w-[30%]  gap-10 p-5'>
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="text" placeholder='Enter username' required />
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="email" placeholder=' Enter email'  required />
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="password" placeholder='Enter password' required />
            <button className=' px-5 py-3 bg-red-700 rounded-md text-white font-bold'> Register </button>
        </form>
        <Link href="/dashboard/login" className='  text-gray-400 hover:border-b-2 hover: border-red-600' > Login with an existing account</Link>
    </div>
  )
}

export default page