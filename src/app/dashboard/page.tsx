import Image from 'next/image'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const page = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-slate-900'>

      <div className=' w-[90%] flex justify-between gap-20 '>

        <div className=' flex flex-col  gap-10 '>
          <div className=' flex gap-7 hover:bg-slate-800 '>
            <div className=' w-[300px] h-[150px] relative '>
              <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png" alt=' sa' fill={true} />
            </div>
            <div className=' p-5 flex items-center gap-5'>
              <p className=' font-bold text-2xl text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <FaTimes className=' text-2xl text-red-700  ' />
            </div>
          </div>
          <div className=' flex gap-7 hover:bg-slate-800 '>
            <div className=' w-[300px] h-[150px] relative '>
              <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png" alt=' sa' fill={true} />
            </div>
            <div className=' p-5 flex items-center gap-5'>
              <p className=' font-bold text-2xl text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <FaTimes className=' text-2xl text-red-700  ' />
            </div>
          </div>
          <div className=' flex gap-7 hover:bg-slate-800 '>
            <div className=' w-[300px] h-[150px] relative '>
              <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png" alt=' sa' fill={true} />
            </div>
            <div className=' p-5 flex items-center gap-5'>
              <p className=' font-bold text-2xl text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <FaTimes className=' text-2xl text-red-700  ' />
            </div>
          </div>
        </div>

        <div className=' w-[40%]'>
          <form className=' flex flex-col gap-6 '>
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="text" placeholder='Title' required />
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="text" placeholder='Description' required />
            <input className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700 ' type="text" placeholder='Image URL' required />
            <textarea className=' px-5  text-gray-300 py-3 rounded-md outline-none  focus:border-[2px]  focus:border-red-500 bg-gray-700' name="" id="" cols={20} rows={10} >  </textarea>
            <button className='px-5 py-3 bg-red-700 rounded-md text-white font-bold'>Post </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page