"use client"
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(email, password);

    signIn("credentials ", { email, password })
  }

  const session =useSession()
  const router =useRouter()
   console.log(session);
  

      if(session.status==="authenticated"){
        router.push("/dashboard")
     } 
  
    if( session.status==="unauthenticated"){
      return (
        <div className=' w-full min-h-screen flex flex-col text-white items-center justify-center bg-slate-900 '>
          <p className=' font-bold text-2xl  py-2'> Login</p>
          <form className=' flex flex-col w-[30%]  gap-10 p-5'>
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="email" placeholder=' Enter email' required />
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="password" placeholder='Enter password' required />
            <button onClick={(e) => handleSubmit} className=' px-5 py-3 bg-red-700 rounded-md text-white font-bold'> Login </button>
          </form>
          <button className=' px-5 w-[300px] py-3 bg-blue-700 rounded-md text-white font-bold' onClick={() => signIn("google")} > Login with Google</button>
    
          <Link href="/dashboard/register" className='  text-gray-400 hover:border-b-2 hover: border-red-600 py-5 ' >Don&apos;t have an account  <span> create</span> </Link>
        </div>
      )
    }
 
   
   
}

export default Page