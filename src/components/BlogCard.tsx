import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Blog } from '@/types/blog'; // Import the type

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog._id}`}>
      <div className='flex justify-between rounded-md shadow-2xl hover:border-2 bg-gray-200 border-red-500 duration-100'>
        <div className='w-[500px] h-[300px] relative'>
          <Image src={blog.img} alt={blog.title} fill={true} />
        </div>
        <div className='w-[70%] p-10 flex flex-col justify-center gap-5'>
          <p className='font-bold text-4xl'>{blog.title}</p>
          <p className='font-medium text-lg text-gray-500'>{blog.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
