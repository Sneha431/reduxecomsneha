import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { PiSunLight } from "react-icons/pi";
import Link from 'next/link';
import Darkmodeswitch from './Darkmodeswitch';
const Header = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex gap-4 items-center'>
        <Darkmodeswitch />
        <Link href={"/"} className='flex gap-1 items-center'>

          <span className='text-2xl font-bold bg-amber-500 px-2 py-1 text-inherit rounded-lg'>IMDb</span>
          <span className='text-xl hidden sm:inline'>Clone</span>

        </Link>
      </div >
    </div >
  )
}

export default Header
