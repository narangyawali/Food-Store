import React, { useContext, useState } from 'react'
import { items, specialItem } from '../data/items';
import { ShopContext } from '../context/ShopContext';

const Menu = () => {
    const [dataItems, setDataItems] = useState(items)
    const [itemSpecial, setItemSpecial] = useState(specialItem)

    const filterCategory = (categories) => {
        setDataItems(
            items.filter((item) => {
                return item.category === categories
            })
        )
    };

    const { addToCart } = useContext(ShopContext)

    return (
    <div id='menu' className='container md:px-3 lg:px-0 mx-auto -mt-6 md:pt-24'>
        <div className='flex justify-center md:justify-between items-end'>
            <div className='space-y-1 hidden md:block'>
                <p className='text-2xl font-semibold'>Our Menu</p>
                <p className='font-medium'>We provide the best food service for you</p>
            </div>
            <ul className='flex overflow-x-auto space-x-3 md:space-x-2 lg:space-x-4'>
                <button onClick={() => setDataItems(items)} className='bg-red-800 hover:bg-red-700 hover:text-white w-20 h-8 rounded-full shadow-sm flex justify-center items-center outline-none'>
                    <li className='font-semibold text-[15px] md:text-lg text-white'>All</li>
                </button>
                {/* <button onClick={() => filterCategory('meals')} className='bg-red-800 hover:bg-red-700 hover:text-white w-20 h-8 rounded-full shadow-sm flex justify-center items-center outline-none'>
                    <li className='font-semibold text-[15px] md:text-lg text-white'>Meals</li>
                </button>
                <button onClick={() => filterCategory('snacks')} className='bg-red-800 hover:bg-red-700 hover:text-white w-20 h-8 rounded-full shadow-sm flex justify-center items-center outline-none'>
                    <li className='font-semibold text-[15px] md:text-lg text-white'>Snacks</li>
                </button>
                <button onClick={() => filterCategory('drinks')} className='bg-red-800 hover:bg-red-700 hover:text-white w-20 h-8 rounded-full shadow-sm justify-center items-center outline-none'>
                    <li className='font-semibold text-[15px] md:text-lg text-white'>Drinks</li>
                </button> */}


                <button onClick={() => filterCategory('newari')} className='bg-red-800 hover:bg-red-700 hover:text-white w-20 h-8 rounded-full shadow-sm flex justify-center items-center outline-none'>
                    <li className='font-semibold text-[15px] md:text-lg text-white'>newari</li>
                </button>
                <button onClick={() => filterCategory('sherpa')} className='bg-red-800 hover:bg-red-700 hover:text-white w-20 h-8 rounded-full shadow-sm flex justify-center items-center outline-none'>
                    <li className='font-semibold text-[15px] md:text-lg text-white'>sherpa</li>
                </button>
                <button onClick={() => filterCategory('tharu')} className='bg-red-800 hover:bg-red-700 hover:text-white w-20 h-8 rounded-full shadow-sm flex justify-center items-center outline-none'>
                    <li className='font-semibold text-[15px] md:text-lg text-white'>tharu</li>
                </button>
            </ul>
        </div>

        <div className='md:hidden mt-9 space-y-3'>
            <div className='ml-10 text-[17px] font-bold'>Today's Special Offer</div>
            <div className='overflow-hidden px-10'>
                {itemSpecial.map((item, index) => (
                    <div key={index} className='border flex bg-gray-100 shadow-lg rounded-lg'>
                        <img src={item.image} alt={item.name} className='w-full rounded-l-lg h-[200px] object-cover'/>
                        <div className='flex flex-col justify-around items-center text-center'>
                            <p className='font-semibold'>{item.name}</p>
                            <p className='font-bold'>{item.price}</p>
                            <button className='border-2 border-red-700 px-2 py-1 rounded-md outline-none'>
                                <p className='text-red-700 font-bold'>Add to cart</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

       <div className='mt-10 space-y-3'>
            <div className='md:hidden ml-10 text-[17px] font-bold'>Popular Now</div>
            <div className='grid px-10 md:px-0 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-6 md:gap-y-10 md:mt-10 overflow-hidden'>
                {dataItems.map((item, index) => (
                    <div key={index} className='border cursor-pointer bg-gray-100 pb-4 shadow-lg rounded-lg hover:scale-90 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] rounded-t-lg object-cover' />
                        <div className='flex flex-col items-center space-y-2 mt-1'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='font-bold tracking-wide'>Rs. {item.price}</p>
                            <button className='border-2 text-red-700 font-bold border-red-700 px-2 py-1 rounded-md hover:bg-red-100 outline-none' onClick={() => addToCart(item.id)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    </div>
  )
}

export default Menu;