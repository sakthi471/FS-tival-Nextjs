import { getCharecterDetalis } from '@/api/character'
import { getComicsDetails } from '@/api/comics'
import Image from 'next/image'
import React from 'react'

interface comicDetailProps {
    params: {
        id: string,
    }
}

const page = async ({ params }: comicDetailProps) => {

    const { id } = params
    const comic = await getComicsDetails(id)
    const oneComic = comic.results[0]
    console.log(oneComic);
    
    return (
        <div className=' w-full min-h-screen flex flex-col items-center justify-center rounded-md'>
            <div className=' bg-slate-800 w-[80%] min-h-[200px] p-10 flex gap-10'>
                <div className=' w-[300px] h-[500px] relative'>
                    <Image src={`${oneComic.thumbnail.path}.${oneComic.thumbnail.extension}`} alt={`${oneComic.title}`} fill={true} />
                </div>

                <div className=' w-[80%] text-gray-300  '>
                    <p className=' font-bold text-2xl '>  {oneComic.title}</p>
                    <p className='font-bold text-2xl  '> Published:  <span className=' font-normal text-base'> {oneComic.modified.slice(0, 10)}</span></p>
                  <div>
                      {  oneComic.creators.items.map((creater)=>(
                        <p className='font-bold text-xl  capitalize'>{ creater.role}: <span className='font-normal text-base'> {creater.name}</span> </p>
                      ))
                      }
                  </div>

                   <p className='font-bold'> Description: <span className=' font-normal'> {oneComic.description}</span> </p>
                   <p className=' font-bold '>price <span className=' font-normal'> {oneComic.prices[0].price} </span> </p>
                </div>
            </div>
        </div>
    )
}

export default page