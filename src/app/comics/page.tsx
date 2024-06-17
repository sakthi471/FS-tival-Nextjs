import { getComics } from '@/api/comics'
import Comics from '@/components/Comics';
import Image from 'next/image';
import React from 'react'
import ComicsImg from '@/assets/background/wp1832315-marvel-comics-wallpapers.jpg'
export const dynamic = "force-dynamic"


const page = async () => {

  const comics = await getComics()


  


  return (
    <div className=' w-full min-h-screen flex flex-col justify-center items-center'>

      <div className=' w-full relative h-[400px] '>
        <Image src={ComicsImg} alt='logo' fill={true} />
        <div className=' absolute w-full h-full bg-image-gray  flex justify-center items-center '>
          <p className=' text-white font-bold text-3xl'>MARVEL COMICS  </p>
        </div>
      </div>
      <div className='  w-[80%] flex flex-wrap justify-center  py-24 gap-10'>
        {
          comics.results.map((comic) => (
            <Comics key={comic.id} comic={comic} />
          ))
        }
      </div>
    </div>
  )
}

export default page