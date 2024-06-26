"use client"
import Image from 'next/image';
import React, { useState, KeyboardEvent } from 'react';
import marvelLogo from '@/assets/logo/marvel.svg';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const router = useRouter();
  const [searchToggle, setSearchToggle] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim() !== '') {
      router.push(`/search?query=${searchQuery}`);
      console.log("entered");
    }
  };

  const links = [
    { id: 1, title: "home", url: "/" },
    { id: 4, title: "comics", url: "/comics" },
    { id: 5, title: "Blog", url: "/blog" },
    { id: 6, title: "Dashboard", url: "/dashboard" },
    { id: 7, title: "characters", url: "/characters" },
  ];

  const session = useSession();

  return (
    <div className='w-full bg-[#212021] px-14 py-4 flex justify-between items-center border-b-[1px] border-gray-600'>
      <div className='relative w-[100px] h-[50px]'>
        <Image src={marvelLogo} alt='marvel logo' priority={true} fill={true} />
      </div>
      <div className='flex gap-7 items-center'>
        {links.map(({ id, title, url }) => (
          <Link className='capitalize py-2 font-medium text-gray-300 text-sm hover:border-b-2 border-red-500 hover:text-white hover:font-semibold' href={url} key={id}>
            {title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button
            onClick={() => signOut()}
            className='px-4 py-2 rounded-md text-white bg-red-600'
          >
            Logout
          </button>
        )}
        {searchToggle && (
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='px-4 py-1 rounded-md outline-none focus:border-2 focus:border-red-500'
            type="text"
            placeholder='search'
            onKeyDown={handleSearch}
          />
        )}
        <div onClick={() => setSearchToggle(!searchToggle)}>
          <AiOutlineSearch className={`text-xl ${searchToggle ? "text-red-500" : "text-white"}`} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
