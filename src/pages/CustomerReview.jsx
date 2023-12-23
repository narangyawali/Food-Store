import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import customerPic from "../assets/customerPic.jpg"


const CustomerReview = () => {
    const customerImage = 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhcHB5JTIwY3VzdG9tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'

  return (
    <div id='faq' className='container mx-auto mt-16 lg:mt-24'>
        <div className='text-center space-y-2'>
            <p className='text-2xl font-bold'>Our <span className='text-red-700'>Customer</span> says</p>
            <p className='text-lg font-semibold text-gray-900 tracking-wide'>What our lovely customer said for our products</p>
        </div>
        <div className='flex justify-center flex-col lg:flex-row items-center mt-20 lg:mt-24'>
            <img src={customerImage} alt="customer's image" className='h-72 md:h-[60vh]'/>
            <div className='relative flex flex-col justify-center bg-gray-200 opacity-[90%] pl-10 w-[90%] md:w-full lg:full  lg:pr-72 py-10 rounded-lg lg:rounded-r-lg'>
                <FaQuoteRight className='text-red-400 text-[40px] lg:text-[65px] absolute -top-3 md:-top-5 left-[90%] lg:left-[80%]'/>
                <p className='text-lg font-bold'>Random Name</p>
                <p className='font-semibold text-gray-800'>Address of customer</p>
                <p className='text-red-700 font-semibold tracking-wide mt-3 md:mt-5'>I'd say that, this is one of the best food ordering app that I have ever used. Their customer service is so great.</p>
            </div>
        </div>
    </div>
  )
}

export default CustomerReview;
