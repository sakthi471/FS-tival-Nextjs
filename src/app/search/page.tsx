"use client"
import CharacterCard from '@/components/CharacterCard'
import ChracterWrapper from '@/components/ChracterWrapper'
import { Character } from '@/types/marvel'
import { searchCharater } from '@/api/character'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const searchPrams = useSearchParams()
    const querySearch = searchPrams.get('query')
    const [data, setData] = useState<Character[]>([])


    useEffect(() => {
        const getData = async () => {
            const data = await searchCharater(querySearch)

            setData(data.results)
        }

        getData()
    }, [querySearch])

    return (
        <div className=' w-full min-h-screen flex items-center justify-center gap-20 '>
            <div className=' flex flex-wrap w-[80%] gap-10 justify-center py-20'>

                {
                    data.map((data) => (    
                        <CharacterCard key={data.id} character={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Page