import React from 'react'
import foodspace from '../assets/home2.png'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id='contact' className='container mx-auto mt-20 lg:mt-28'>
        <div className='flex flex-wrap justify-around'>
            <div className='flex flex-col items-center space-y-3'>
                <img src={foodspace} alt='foodspace logo' className='h-8 md:h-11'/>
                <p className='flex space-x-3 md:space-x-5'>
                    <Link>
                        <BsFacebook className='text-lg md:text-xl text-gray-800'/>
                    </Link>
                    <Link>
                        <BsTwitter className='text-lg md:text-xl text-gray-800'/>
                    </Link>
                    <Link>
                        <BsInstagram className='text-lg md:text-xl text-gray-800'/>
                    </Link>
                </p>
            </div>
            <div className='flex flex-col items-center space-y-1.5'>
                <button>
                    <p className='md:text-xl font-bold'>Menu</p>
                </button>
                <button className='text-gray-600 font-semibold'>Home</button>
                <button className='text-gray-600 font-semibold'>Drinks</button>
                <button className='text-gray-600 font-semibold'>Snacks</button>
            </div>
            <div className='flex flex-col items-center space-y-1.5'>
                <button>
                    <p className='md:text-xl font-bold'>Service</p>
                </button>
                <button className='text-gray-600 font-semibold'>Meals Update</button>
                <button className='text-gray-600 font-semibold'>Track Order</button>
                <button className='text-gray-600 font-semibold'>Profiles</button>
                <button className='text-gray-600 font-semibold'>Guarantee</button>
            </div>
            <div className='flex flex-col items-center space-y-1.5'>
                <button>
                    <p className='md:text-xl font-bold'>Further Information</p>
                </button>
                <button className='text-gray-600 font-semibold'>Terms & Conditions</button>
                <button className='text-gray-600 font-semibold'>Privacy Policy</button>
            </div>
        </div>
        <p className='text-gray-600 text-sm font-semibold text-center mt-14 lg:mt-16 tracking-wide'>Copyright &copy; 2022 FoodSpace. All Rights Reserved.</p>
    </div>
  )
}

export default Footer