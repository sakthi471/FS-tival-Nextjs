import BlogCard from '@/components/BlogCard';
import React from 'react';
import { Blog } from '@/types/blog';
export const dynamic = "force-dynamic"



const Page = async () => {
  const res = await fetch(`${process.env.ROOT_URL}/api/posts`, {
    cache:'no-store'
  });

  if (!res.ok) {
    // Handle error appropriately
    console.error("Failed to fetch blogs");
    return null;
  }

  const data: Blog[] = await res.json();
  

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-slate-900'>
      <div className='w-[80%] flex flex-col items-center gap-12 py-20'>
        {
          data && data.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        }
      </div>
    </div>
  );
};

export default Page;
