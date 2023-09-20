import { Character } from '@/types/marvel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CharacterCardProps {
    character: Character
}


const CharacterCard = ({ character }: CharacterCardProps) => {

    return (
        <Link href={`/characters/${character.id}`}>
            <div className='w-[250px] h-[390px] bg-red-600 shadow-xl flex flex-col gap-[5px] items-center '>
                <div className='w-full h-full  relative'>
                    <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true} />
                </div>
                <div className=' flex flex-col gap-5 h-[150px] w-full  px-4 bg-black py-6 hover:bg-red-600 duration-150 '>

                    <p className='  text-white font-bold uppercase'> {character.name} </p>

                    {/* <Link  href={`/characters/${character.id}`} className=' px-6 py-2  bg-red-500 rounded-sm'>See more</Link> */}
                </div>
            </div>
        </Link>
    )
}


export default CharacterCard
