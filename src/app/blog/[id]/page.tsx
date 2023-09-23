import BlogDetails from '@/components/BlogDetails'
import Image from 'next/image'
import React from 'react'

type BlogDetailsParams = {
    params: {
        id: string
    }
}



const page = async ({ params }: BlogDetailsParams) => {

    const id = params.id


    const res = await fetch(`http://localhost:3000/api/posts?id=${id}`)
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
                                <Image alt='avathar' src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t39.30808-1/354047224_828712908701565_5033751066804410074_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=754033&_nc_ohc=VEDql0v9DG0AX_4eFa-&_nc_ht=scontent.fmaa1-1.fna&oh=00_AfA5S3l5_IFtmJJCtQwnGEUyngSKqYKlmzSRZU-_igcx2g&oe=650E6B68" fill={true} />
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