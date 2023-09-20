import BlogDetails from '@/components/BlogDetails'
import React from 'react'

type BlogDetailsParams={
     params:{
        id:string
     }
}



const page = ({params}:BlogDetailsParams) => {
   console.log(params);
    
     
    return (
        <div className='w-full min-h-screen flex justify-center items-center '>
            <BlogDetails />
        </div>
    )
}

export default page