import React from 'react'
import CharacterCard from './CharacterCard'
import { getCharecter } from '@/api/character'
import Image from 'next/image'

export const dynamic = "force-dynamic"

const ChracterWrapper = async () => {
  const characters = await getCharecter()
  

  return (
    <div className='  w-full flex  flex-col items-center flex-wrap justify-center  gap-20 '>
         <div className=' w-full relative h-[400px]'>
             <Image  src="https://cdn.marvel.com/content/1x/characters_art_mas_dsk_01.jpg" alt='logo' fill={true} />
              <div className=' absolute top-[50%] left-[50%] translate-x-[-50%]  '>
                  <p className=' text-white font-bold text-3xl'>MARVEL CHARACTERS  </p>
              </div>
         </div>

         <div className=' flex  flex-wrap w-[80%] justify-center  gap-12 py-20'>
         {
        characters.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      } 
         </div>
    </div>
  )
}

export default ChracterWrapper