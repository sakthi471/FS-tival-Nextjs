"use client"
import { set } from 'mongoose';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Page = () => {
    
    const router=useRouter()
  
    const [name,setName]= useState("");
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const[err,setErr]=useState(false)
   

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const inputs={ name,email,password}
        const data= JSON.stringify(inputs)
        console.log(data);
        
        
        try{
          const res= await fetch (`/api/auth/register/`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:data
          })

          res.status===201 && router.push("/dashboard/login?success=201")

        }
        catch(err){
            setErr(true)
        }
      
  }
  
  
  return (
    <div  className=' w-full min-h-screen flex flex-col text-white items-center justify-center bg-slate-900 '>
         <p className=' font-bold text-2xl  py-2'> Register</p>
        <form  onSubmit={ (e)=> handleSubmit(e)} className=' flex flex-col w-[30%]  gap-10 p-5'>
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="text" placeholder='Enter username' required onChange={(e)=>setName(e.target.value)} />
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="email" placeholder=' Enter email'  required onChange={(e)=>setEmail(e.target.value)} />
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="password" placeholder='Enter password' required onChange={(e)=>setPassword(e.target.value)} />
            <button className=' px-5 py-3 bg-red-700 rounded-md text-white font-bold'> Register </button>
        </form>
        {
          err && (<p> Something went wrong</p> )
        }
        <Link href="/dashboard/login" className='  text-gray-400 hover:border-b-2 hover: border-red-600' > Login with an existing account</Link>
    </div>
  )
}

export default Page