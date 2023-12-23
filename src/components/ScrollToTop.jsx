import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { HashLink as Link } from "react-router-hash-link";

export const ScrollToTop = () => {
  return (
    <div className='mt-16 px-16 fixed bottom-16 -right-14'>
        <Link smooth to='#top' className='flex justify-end'>
            <BsFillArrowUpCircleFill className='text-red-700 text-2xl md:text-4xl animate-bounce'/>
        </Link>
    </div>
  )
}
