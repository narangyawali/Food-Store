import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { MdOutlineShareLocation } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const BottomNavbar = () => {
  return (
    <div className='container max-w-full fixed bottom-0 md:hidden'>
        <Link className='text-2xl text-white w-8 h-8 flex items-center justify-center border-white border-2 rounded-[100%] absolute -top-4 left-2 bg-red-700'>
            <button className='cursor-pointer'><AiFillHome /></button>
        </Link>
        <div className='bg-red-700 py-2 flex items-center justify-evenly text-2xl text-white'>
            <Link><GiKnifeFork /></Link>
            <Link><MdOutlineShareLocation /></Link>
            <Link><MdFavoriteBorder /></Link>
        </div>
    </div>
  )
}

export default BottomNavbar;