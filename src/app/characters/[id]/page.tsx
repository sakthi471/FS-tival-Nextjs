

import { getCharecterDetalis } from '@/api/character';
import Image from 'next/image';
import React from 'react'
export const dynamic = "force-dynamic"


interface characterDetailProps {
  params: {
    id: string,
  }
}

const characterDetail = async ({ params }: characterDetailProps) => {
  const { id } = params;
  const characterDetail = getCharecterDetalis(id)

  
  return (
    <div className=' w-full flex  items-center justify-center min-h-screen  shadow-xl  '>
      <div className=' flex  items-center py-20 w-[70%] rounded-md min-h-[400px] gap-8 shadow-xl px-24 text-white bg-slate-800  '>
        <div className=' w-[300px] h-[300px] hover:translate-y-[-5px] duration-200  relative hover:shadow-lg shadow-gray-400 '>

          <Image className='  rounded-md z-20 bg-cover' src={`${(await characterDetail).results[0].thumbnail.path}.${(await characterDetail).results[0].thumbnail.extension}`} alt={(await characterDetail).results[0].name} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* <div className=' w-[220px] top-8 z-10 right-8   rounded-md h-[300px] bg-red-600 absolute'>
              
              </div> */}
        </div>
        <div className=' flex flex-col items-center gap-7 w-[80%]'>
          <h1 className=' text-center font-bold  text-3xl  text-red-600'> {(await characterDetail).results[0].name} </h1>
          {
            (await characterDetail).results[0].description === "" ? (<p> Description not avaiable</p>) : (
              <p className=' px-10 text-gray-300 '> {(await characterDetail).results[0].description} </p>

            )
          }
        </div>
      </div>
    </div>
  )
}

export default characterDetail