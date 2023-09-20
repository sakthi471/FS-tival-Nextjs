import Image from 'next/image'
import React from 'react'

const BlogDetails = () => {
  return (
    <div className=' w-[80%]  shadow-2xl p-20'>
    <div className=' flex  justify-between'>
    <div className=' flex flex-col gap-10 w-[60%]' >
       <p className=' font-bold text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptas sequi? Tenetur facilis minus sunt cumque consequatur maiores nisi deserunt eos, nobis facere. Sequi alias maxime eius possimus excepturi nisi.</p>
        <div className=' flex  items-center gap-5'>
           <div className=' w-[50px] h-[50px] bg-gray-300 rounded-full relative  overflow-hidden'>
                <Image alt='avathar' src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t39.30808-1/354047224_828712908701565_5033751066804410074_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=754033&_nc_ohc=VEDql0v9DG0AX_4eFa-&_nc_ht=scontent.fmaa1-1.fna&oh=00_AfA5S3l5_IFtmJJCtQwnGEUyngSKqYKlmzSRZU-_igcx2g&oe=650E6B68"  fill={true} />
           </div>
           <p>Sakthi Test</p>

        </div>
    </div>
    <div className=' w-[500px]  h-[300px] relative'>
       <Image  src="https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png" alt='ds' fill={true} />
    </div>
    </div>

    <div className=' flex flex-col gap-6 py-10'>
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat commodi illum magni aut tempora alias error possimus. Itaque ut voluptate aliquam voluptatum nostrum, atque ipsam non consequuntur unde voluptatem sunt optio eligendi deserunt beatae sequi, mollitia dolorum suscipit deleniti tempore est reprehenderit. Nemo quia voluptate debitis assumenda eius provident autem optio cumque excepturi minima consequuntur, at velit laudantium? Dolore fuga facere cumque dolores dolorum beatae non. Voluptate vel obcaecati nihil consequatur itaque placeat in soluta omnis ipsam suscipit. Commodi reiciendis eius adipisci perspiciatis maxime cumque sapiente obcaecati numquam repellendus est, voluptatibus, asperiores voluptatem explicabo repellat similique distinctio. Nam, soluta?</p>
       <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil natus porro, dignissimos accusantium est ipsa ea libero quae corrupti repudiandae saepe vel exercitationem temporibus totam quidem omnis aut eos soluta at blanditiis amet architecto recusandae eius iure. Quod alias ipsum, maiores ipsam rerum modi omnis eligendi dicta hic quidem provident. Provident tempora voluptatum voluptates magni odit debitis fugiat quae ea, labore magnam dolor, architecto obcaecati laborum rem tempore quia delectus.
       </p>
       <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, aspernatur incidunt velit culpa ratione tempora nam illum ab, exercitationem eum vel qui beatae voluptates quia, dolorum dignissimos impedit. Quisquam, harum.</p>
    </div>
</div>
  )
}

export default BlogDetails