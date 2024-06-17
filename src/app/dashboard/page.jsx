"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

import useSWR from 'swr'



const Page = () => {



  const session = useSession()
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session.data?.user.name}`,
    fetcher
  );

  const handleSubmit = async(e)=>{
         e.preventDefault()
       const title=  e.target[0].value;
       const  description = e.target[1].value;
       const img= e.target[2].value;
       const  content= e.target[3].value;
     

       const data={
                title,
                description,
                img,
                content,
                username:session.data.user.name
       }
       
         try{
           
         const res=  await fetch("/api/posts",{
             method:"POST",
             body:JSON.stringify({
                title,
                description,
                img,
                content,
                username:session.data.user.name
             })
          })

         }
         catch(err){

         }
    
  } 

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login")
  }

  if (session.status === "authenticated") {
    return (
      <div className='w-full min-h-screen flex justify-center items-center text-white bg-slate-900'>

       <div className=' w-[90%] flex justify- between gap-20 '>
    
            <div className=' flex flex-col  gap-10 '>
        
               {
                   data && data.map( (data)=>(
                    <Link key={data._id} href={`/blog/${data._id}`}>
                         <div  className=' flex gap-7 hover:bg-slate-800 '>
                    <div className=' w-[300px] h-[150px] relative  '>
                      <Image src={data.img} alt=' sa' fill={true} />
                    </div>
                    <div className=' p-5 flex items-center gap-5'>
                      <p className=' font-bold text-2xl text-white'> {data.title} </p>
                      <FaTimes className=' text-2xl text-red-700  ' />
                    </div>
                  </div>
                    </Link>
                   ))
               }
            </div>
    
            <div className=' w-[40%]'>
              <form className=' flex flex-col gap-6 ' onSubmit={handleSubmit}>
                <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="text" placeholder='Title' required  />
                <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="text" placeholder='Description' required  />
                <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="text" placeholder='Image URL' required  />
                <textarea placeholder='Enter your content' className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700' name="" id="" cols={20} rows={10} />  
                <button className='px-5 py-3 bg-red-700 rounded-md text-white font-bold'>Post </button>
              </form>
            </div>
          </div> 

       
      </div>
    )
  }


}

export default Page