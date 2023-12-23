import React from 'react'
import { BsSliders } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineAppRegistration } from 'react-icons/md'
import { BiMedal } from 'react-icons/bi'
import { HiBadgeCheck } from 'react-icons/hi'
import { AiFillTag } from 'react-icons/ai'
import { RiCheckboxCircleLine } from 'react-icons/ri'
import Menu from './Menu';
import CustomerReview from './CustomerReview';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'
import BottomNavbar from '../components/BottomNavbar'

const Hero = () => {
    const deliveryManImage = 'https://cdni.iconscout.com/illustration/premium/thumb/male-delivery-executive-wearing-food-delivery-backpack-4743175-3951678.png'

    const yamEggSauceImage = 'https://i.pinimg.com/564x/ef/d2/a5/efd2a5292f1213682f12ccd9a2daab56.jpg'
    
    
  return (
    <div id='top'>
        <Navbar />
        <main className='bg-gray-50 w-full h-[100%] pt-24 md:pt-28'>
            <div>
                <div className='hidden md:flex justify-around items-start mt-4 lg:justify-between lg:mx-1 xl:justify-around'>
                    <div className='mt-2'>
                        <div className='text-red-700 text-xl tracking-wide font-bold'>The best choice for you!</div>
                        <div className='md:text-[32px] lg:text-[40px] text-gray-900 font-bold leading-snug pt-6'>The Fastest in <br /> Delivering your <span className='text-red-700'>Food</span></div>
                        <div className='text-lg font-medium pt-1'>We fill your tummy with our <br /> delicious and fast made food</div>
                        <button className='bg-red-700 rounded mt-6'>
                            <div className='text-white px-3 py-2'>Order Now</div>
                        </button>
                    </div>
                    <div className=''>
                        <img src={deliveryManImage} alt="delivery man" className='object-fill md:h-[37vh] lg:h-[50vh]'/>
                    </div>
                </div>
                <div className='md:hidden'>
                    <div>
                        <div className='px-4'>
                            <p className='text-lg font-semibold'>Hello &#x1F44B;,</p>
                            <p className='mt-1 text-xl tracking-wide font-bold'>What would you like to <span className='text-red-700'>eat?</span></p>
                        </div>
                        <div className='flex justify-around items-center mt-5'>
                            <label className='flex items-center bg-white border-gray-200 border-t-[2px] border-b-[2px] border-l border-r rounded-lg shadow-sm w-[85%]'>
                                <button className='px-2'>
                                    <CiSearch className='text-xl text-gray-300'/>
                                </button>
                                <input type="text" placeholder='Search for a dish name e.g fufu' className='w-full outline-none bg-transparent py-[6px]'/>
                            </label>
                            <button className='bg-red-700 w-9 h-9 flex items-center justify-center rounded-lg'>
                                <BsSliders className='text-white text-xl'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20 hidden md:block'>
                <div className='text-center'>
                    <p className='text-3xl font-semibold'>Best <span className='text-red-700'>Services</span> for you</p>
                    <p className='text-lg font-medium mt-2 tracking-wide'>Enjoy our best delivery service for your ordering satisfaction</p>
                </div>
            </div>

            <div className='container mx-auto hidden md:grid md:grid-cols-2 gap-6 lg:grid-cols-4 md:mt-10 lg:mt-14'>
                <div className='flex items-center'>
                    <div className='bg-gray-200 rounded-md w-[40px] h-12 flex items-center justify-center'>
                        <MdOutlineAppRegistration className='text-3xl text-red-700'/>
                    </div>
                    <div className='leading-7 ml-2'>
                        <p className='font-bold'>Free Registration</p>
                        <p className='text-sm'>For our regular customers</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='bg-gray-200 rounded-md w-[40px] h-12 flex items-center justify-center'>
                        <BiMedal className='text-3xl text-red-700'/>
                    </div>
                    <div className='leading-7 ml-2'>
                        <p className='font-bold'>Overall Guarantee</p>
                        <p className='text-sm'>For our well prepared meals</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='bg-gray-200 rounded-md w-[40px] h-12 flex items-center justify-center'>
                        <HiBadgeCheck className='text-3xl text-red-700'/>
                    </div>
                    <div className='leading-7 ml-2'>
                        <p className='font-bold'>Free Consulting <span className='text-gray-400 text-sm font-normal'>24/7</span></p>
                        <p className='text-sm'>For your feeding wants</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='bg-gray-200 rounded-md w-[40px] h-12 flex items-center justify-center'>
                        <AiFillTag className='text-3xl text-red-700'/>
                    </div>
                    <div className='leading-7 ml-2'>
                        <p className='font-bold'>Special Pride</p>
                        <p className='text-sm'>For undoubted best <br /> customer service</p>
                    </div>
                </div>
            </div>

            <div className='container mx-auto mt-20 lg:mt-32'>
                <div className='hidden md:flex lg:flex-row justify-around rounded-lg'>
                    <div className='relative flex md:items-center lg:items-start'>
                        <img src={yamEggSauceImage} alt="yam & egg sauce" className='rounded-xl h-[250px] lg:h-max'/>
                        <div className='bg-white opacity-[80%] w-[90%] h-[90px] flex justify-around absolute top-[10%] left-[5%] rounded-md'>
                            <div className='flex flex-col justify-center space-y-3'>
                                <p className='text-lg font-bold'>Yam and Egg Sauce</p>
                                <p className='font-semibold'>#1000</p>
                            </div>
                            <button className='bg-red-800 w-28 h-8 rounded flex justify-center items-center mt-10 outline-none'>
                                <p className='text-white'>See detail</p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-2xl lg:text-3xl'>Special <span className='text-red-700'>Offer</span></p>
                        <p className='font-medium lg:text-lg leading-tight mt-4'>Rich and incredibly tasty delicacy. Made with <br />yam and a well mixed egg sauce, which <br /> contains onions and seasoning</p>
                        <div className='space-y-6 mt-10'>
                            <div className='flex items-center space-x-2'>
                                <RiCheckboxCircleLine className='text-red-500 text-2xl'/>
                                <p className='lg:text-[17.2px] font-medium'>Affordable</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RiCheckboxCircleLine className='text-red-500 text-2xl'/>
                                <p className='lg:text-[17.2px] font-medium'>Well packaged</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RiCheckboxCircleLine className='text-red-500 text-2xl'/>
                                <p className='lg:text-[17.2px] font-medium'>Well prepared</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
            <CustomerReview />
            <ScrollToTop />
            <Footer />
            <BottomNavbar />
        </main>
    </div>
  )
}

export default Hero;