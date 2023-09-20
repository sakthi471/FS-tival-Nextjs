import React from 'react'
import Mlogo from "@/assets/logo/Mlogo.svg"
import Image from 'next/image'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { ImYoutube } from 'react-icons/im'



const Footer = () => {

    const socialLinks = [
        {
            id: 1,
            Src: BiLogoFacebookSquare,
        },
        {
            id: 2,
            Src: BsInstagram,
        },
        {
            id: 3,
            Src: FiTwitter,
        },
        {
            id: 4,
            Src: ImYoutube,
        },

    ]

    const links = [
        {
            id: 1,
            title: "about marvel"
        },
        {
            id: 2,
            title: "help/faq"
        },
        {
            id: 3,
            title: "careers"
        },
        {
            id: 4,
            title: "internships"
        },
    ]

    const others = [
        {
            id: 1,
            title: "advertising"
        },
        {
            id: 2,
            title: "disney+"
        },
        {
            id: 3,
            title: "marvelhq.com"
        },
        {
            id: 4,
            title: "redeem digital comics"
        },

    ]

    const tearms = [
        {
            id: 1,
            title: "Tearms of use"
        },
        {
            id: 2,
            title: "Privacy Polociy"
        },
        {
            id: 3,
            title: "Addendum to the Global Privacy Policy"
        },
        {
            id: 4,
            title: "Interest-Based Ads"
        },
        {
            id: 5,
            title: "License Agreement"
        },

        {
            id: 6,
            title: "©2023 MARVEL"
        },
    ]   

    return (
        <div className=' w-full bg-[#141514]  text-white flex flex-col items-center  gap-7 py-10'>

            <div className='flex justify-center items-center p-10 gap-16  '>
                <div>
                    <Image src={Mlogo} alt='marvel-logo' height={150} />
                </div>
                <div >
                    {
                        links.map(({ id, title }) => (
                            <li className=' font-semibold first-letter: list-none uppercase text-sm py-2 border-red-500 hover:border-b-2' key={id}> {title} </li>
                        ))
                    }
                </div>
                <div>
                    {
                        others.map(({ id, title }) => (
                            <li className=' list-none uppercase text-sm py-2 border-red-500 hover:border-b-2' key={id} > {title} </li>
                        ))
                    }
                </div>
                 <div className=' flex flex-col gap-5'>
                        <p className=' uppercase text-base font-semibold'>Follow marvel</p>
                          <div className=' flex gap-4'>
                            {
                               socialLinks.map( ({id,Src})=>(
                                 <Src className=" text-xl text-gray-400 hover:text-white" key={id} /> 
                               ))
                            }
                          </div>

                 </div>
                 <div>

                 </div>
            </div>
            <div className=' flex list-none gap-4 '>
                {
                    tearms.map(({ id, title }) => (
                        <li className=' text-sm text-gray-400 hover:text-white' key={id} >{title} </li>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer