import BlogCard from '@/components/BlogCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async() => {


    const blogs=[
        {
            id:1,
            username:"sakthi test",
            title:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img:"https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png",
            description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad natus nisi at necessitatibus. Iusto quae quaerat saepe, ex quas velit, nostrum eaque, reiciendis laborum amet sunt est aliquid alias harum!",
            content:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem esse quisquam quaerat cupiditate ullam obcaecati quasi qui, in labore quibusdam molestias expedita, reprehenderit et temporibus assumenda ea veritatis animi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat fugit fugiat incidunt maiores eos. Officia laboriosam, minus soluta dicta quaerat ipsa, odio molestiae aliquid, voluptatibus saepe assumenda eos voluptatem enim Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptas voluptatem? Deleniti ipsum eveniet impedit autem? Facilis deleniti vel qui dolor quod consequatur officiis voluptate saepe, hic ipsum minima veritatis.",
        },
        {
            id:2,
            username:"sanjay test",
            title:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img:"https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png",
            description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad natus nisi at necessitatibus. Iusto quae quaerat saepe, ex quas velit, nostrum eaque, reiciendis laborum amet sunt est aliquid alias harum!",
            content:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem esse quisquam quaerat cupiditate ullam obcaecati quasi qui, in labore quibusdam molestias expedita, reprehenderit et temporibus assumenda ea veritatis animi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat fugit fugiat incidunt maiores eos. Officia laboriosam, minus soluta dicta quaerat ipsa, odio molestiae aliquid, voluptatibus saepe assumenda eos voluptatem enim Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptas voluptatem? Deleniti ipsum eveniet impedit autem? Facilis deleniti vel qui dolor quod consequatur officiis voluptate saepe, hic ipsum minima veritatis",
        },
        {
            id:3,
            username:"karthik test",
            title:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img:"https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png",
            description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad natus nisi at necessitatibus. Iusto quae quaerat saepe, ex quas velit, nostrum eaque, reiciendis laborum amet sunt est aliquid alias harum!",
            content:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem esse quisquam quaerat cupiditate ullam obcaecati quasi qui, in labore quibusdam molestias expedita, reprehenderit et temporibus assumenda ea veritatis animi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat fugit fugiat incidunt maiores eos. Officia laboriosam, minus soluta dicta quaerat ipsa, odio molestiae aliquid, voluptatibus saepe assumenda eos voluptatem enim Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptas voluptatem? Deleniti ipsum eveniet impedit autem? Facilis deleniti vel qui dolor quod consequatur officiis voluptate saepe, hic ipsum minima veritatis.",
        },
        {
            id:4,
            username:"kalai test",
            title:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img:"https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png",
            description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad natus nisi at necessitatibus. Iusto quae quaerat saepe, ex quas velit, nostrum eaque, reiciendis laborum amet sunt est aliquid alias harum!",
            content:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem esse quisquam quaerat cupiditate ullam obcaecati quasi qui, in labore quibusdam molestias expedita, reprehenderit et temporibus assumenda ea veritatis animi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat fugit fugiat incidunt maiores eos. Officia laboriosam, minus soluta dicta quaerat ipsa, odio molestiae aliquid, voluptatibus saepe assumenda eos voluptatem enim Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptas voluptatem? Deleniti ipsum eveniet impedit autem? Facilis deleniti vel qui dolor quod consequatur officiis voluptate saepe, hic ipsum minima veritatis.",
        },
        {
            id:5,
            username:"ragul test",
            title:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img:"https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png",
            description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad natus nisi at necessitatibus. Iusto quae quaerat saepe, ex quas velit, nostrum eaque, reiciendis laborum amet sunt est aliquid alias harum!",
            content:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem esse quisquam quaerat cupiditate ullam obcaecati quasi qui, in labore quibusdam molestias expedita, reprehenderit et temporibus assumenda ea veritatis animi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat fugit fugiat incidunt maiores eos. Officia laboriosam, minus soluta dicta quaerat ipsa, odio molestiae aliquid, voluptatibus saepe assumenda eos voluptatem enim Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptas voluptatem? Deleniti ipsum eveniet impedit autem? Facilis deleniti vel qui dolor quod consequatur officiis voluptate saepe, hic ipsum minima veritatis.",
        },
    ]
   
     
     const res= await fetch ("http://localhost:3000/api/posts",{
        cache:'no-store'
     });
       
     const data= await res.json()
     console.log(data);
     

    return (
        <div  className=' w-full min-h-screen flex justify-center items-center' >
             <div className=' w-[80%] flex flex-col items-center gap-12 py-20'  >
                 {
                    data && data.map( (blog)=>(
                        <BlogCard key={blog._id} blog={blog} />
                    ))
                 }
             </div>
        </div>
    )
}

export default page