import Image from 'next/image'
import React from 'react'
import nextImag from '../../public/next.svg'
import next from 'next/types'
import { comic } from '@/types/comics'
import Link from 'next/link'


  interface comicProps{
     comic:comic
  }

const Comics = ({comic}:comicProps) => {
  return (
  
    <Link href={`/comics/${comic.id}`}>
    <div className='w-[250px] h-[490px] flex flex-col gap-[5px] items-center hover:text-red-500 '>
        <div className='w-full h-full shadow-2xl  relative hover:translate-y-[-5px] duration-200'>
            <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true} />
        </div>
        <div className=' flex flex-col gap-5 h-[150px] w-full  px-4  py-6'>

            <p className='font-bold uppercase'> {comic.title} </p>

        </div>
    </div>
</Link>
  )
}

export default Comics