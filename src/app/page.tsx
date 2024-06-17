 "use client"
import { TypeAnimation } from "react-type-animation";



export default  function Home() {
  return (
    <div className=" w-full min-h-screen bg-image   z-20 text-white flex  items-center ">
       <div className="w-full h-screen bg-image-gray flex items-center px-20">
       <div className=" w-[60%] flex flex-col gap-6">
         <p className=" text-2xl">
         Step into a Universe of Heroes and Villains!

         </p>
        <p className=" font-bold text-5xl " > Discover Marvel  
          <span>

        <TypeAnimation className=' text-red-700  ml-4'
          sequence={[
            'Heros', 
            1000,   
            'Comics', 
            2000, 
            'Movies', 
            3000,
            'Series'
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
           
          style={{ fontSize: '3rem', display: 'inline-block'}}
        />
          </span>
         </p>

          <p className=" font-semibold text-gray-300 w-[70%]" >
          Welcome to the Marvel Universe, where epic stories, incredible adventures, and legendary characters come to life. Explore a world where ordinary people become extraordinary heroes, and where the battle between good and evil knows no bounds.
          </p>
          <button className=" px-4 py-3 bg-red-600 w-[200px]  rounded-tr-2xl  rounded-bl-2xl duration-300 hover:rounded-tl-2xl hover:rounded-br-2xl hover:rounded-tr-[0px]  hover:rounded-bl-[0px] hover:translate-y-[-5px] hover:shadow-lg  hover:shadow-gray-500 "> See More</button>

      
      </div>
       </div>
    </div>
  )
}
