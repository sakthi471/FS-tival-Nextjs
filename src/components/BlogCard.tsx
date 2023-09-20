import Image from 'next/image';
import Link from 'next/link'
import React from 'react'


type BlogProps = {
    blog: {
        id: number
        title: string
        description: string
        img: string
    }
}


const BlogCard = ({ blog }: BlogProps) => {
    
    const {id,img,title,description}=blog
    
    return (

        <Link href={`/blog/${id}`} >
            <div className=' flex  justify-between rounded-md shadow-xl hover:border-2 border-red-500 duration-100'>
                <div className=' w-[500px] h-[300px] relative'>
                    <Image src={img} alt={title} fill={true} />
                </div>
                <div className=' w-[70%] p-10 flex flex-col justify-center gap-5 '>

                    <p className=' font-bold text-4xl '> {title} </p>
                    <p className=' font-medium text-lg text-gray-500'>{description} </p>
                </div>
            </div>
        </Link>

    )
}

export default BlogCard
