import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import { items } from '../data/items';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateItemCartAmount, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <section>
      <Navbar />
      <div className='pt-[105px]'>
        <h1 className='text-center text-lg md:text-2xl font-bold'>Food Items</h1>
        <table className='container mx-auto table-fixed border-separate border-spacing-2 border-2 rounded-lg border-gray-200 shadow-md'>
          {items.map((item, index) => {
            if(cartItems[item.id] !== 0) {
              return (
                <tbody key={index}>
                    <tr>
                      <td>
                        <img src={item.image} alt={item.name} className='w-48 h-20 md:h-40 rounded-lg object-cover'/>
                      </td>
                      <td className='md:text-lg font-medium md:font-semibold'>{item.name}</td>
                      <td className='text-sm md:text-base font-semibold'>{item.category }</td>
                      <td className='text-sm font-medium md:font-semibold md:tracking-wide'>#{item.price}</td>
                      <td className=''>
                        <button onClick={() => removeFromCart(item.id)} className='bg-gray-400 px-[6px] w-[19px] rounded-sm font-semibold'>-</button>
                        <input onChange={e => updateItemCartAmount((e.target.value), item.id)} type="number" className='w-1/4 outline-none border rounded text-center' value={cartItems[item.id]}/>
                        <button onClick={() => addToCart(item.id)} className='bg-gray-400 px-[4px] text-center rounded-sm font-semibold'>+</button>
                      </td>
                    </tr>
                </tbody>
              )
            }
          })}
        </table>
        {totalAmount > 0 ? 
            <main className='container mx-auto w-[30%] mt-2'>
              <div className='border-t border-black w-[100%'></div>
              <div>
                <p className='font-medium md:font-semibold mb-1'>SubTotal: #{totalAmount}</p>
                <Link to={'/heroPage'} className='block text-center bg-gray-800 px-2 py-2 md:py-2 leading-none rounded text-white text-sm'>
                  <button>Continue Shopping</button>
                </Link>
              </div> 
            </main> 
        : <h1 className='text-center text-lg  md:text-2xl font-bold'>Food Items Cart is Empty</h1>}
      </div>
    </section>
  )
}

export default Cart;