import Image from 'next/image'
import React from 'react'
export const dynamic = "force-dynamic"


type BlogDetailsParams = {
    params: {
        id: string
    }
}



const page = async ({ params }: BlogDetailsParams) => {

    const id = params.id


    const res = await fetch(`${process.env.ROOT_URL}/api/posts?id=${id}`)
    const blog = await res.json()
   



    return (
        <div className='w-full min-h-screen flex justify-center items-center '>
            <div className=' w-[80%]  shadow-2xl p-20'>
                <div className=' flex  justify-between'>
                    <div className=' flex flex-col gap-10 w-[60%]' >
                        <p className=' font-bold text-4xl'>{blog.title}</p>
                        <p>{blog.description} </p>
                        <div className=' flex  items-center gap-5'>
                            <div className=' w-[50px] h-[50px] bg-gray-300 rounded-full relative  overflow-hidden'>
                                <Image alt='avathar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s" fill={true} />
                            </div>
                            <p>{ blog.username} </p>

                        </div>
                    </div>
                    <div className=' w-[500px]  h-[300px] relative'>
                        <Image src={blog.img} alt='ds' fill={true} />
                    </div>
                </div>

                <div className=' flex flex-col gap-6 py-10'>
                    <p> { blog.content} </p>
                  
                </div>
            </div>
        </div>
    )
}

export default page