"use client"


import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineClose } from "react-icons/ai";

type optionType = {
    id: number,
    option: string,
}

const page = () => {

    const [option, setOption] = useState<number>(2)

    const [ques, setQues] = useState("")

    const [optionList, setOptionList] = useState<optionType[]>([])
    const optionCount = Array(option).fill(1)



    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQues(e.target.value)
    }


    const handleOption = (e: React.ChangeEvent<HTMLInputElement>) => {

        const id= parseInt(e.target.id, 10)
        const option=e.target.value

        console.log(`id:${id} , option:${option}`);
        
       if( optionList.length===0){
         
        }
     

        const exits= optionList.find( ( list)=> list.id===id )
         console.log( optionList);
            
         
    }

    
     
    return (
            
        <div className=' w-full min-h-screen  flex justify-center items-center  bg-slate-900 text-white '>

            <form className='w-[50%] flex items-center  flex-col gap-6' >
                <input type="text" placeholder='Enter your Question' className=' w-full px-4 py-3 bg-slate-800' onChange={handleInput} />
                <div className=' flex flex-col gap-5 w-full'>
                    {
                        optionCount.map((x, index) => (
                            <div key={index} className=' flex  w-full relative'>

                                <input id={(index+1) .toString()} onChange={handleOption} type="text" placeholder={`option ${index + 1}`} className='w-full px-4 py-3 bg-slate-800 ' required />
                                <button onClick={(e) => setOption(option => option - 1)} className=' absolute right-4 top-4 '>   <AiOutlineClose /></button>
                            </div>


                        ))
                    }
                </div>
                <div onClick={(e) => setOption(option => option + 1)} >
                    <AiOutlinePlus />
                </div>
                <button className=' w-[60%] px-4 py-3 bg-red-700 rounded-md font-bold  '>Create Poll </button>
            </form>


        </div>
    )
}

    export default page;