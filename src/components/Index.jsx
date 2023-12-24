import React, { useState } from 'react';
import foodspace from '../assets/home2.png'
import googleLogo from '../assets/googleLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const Index = () => {
    let [form, setForm] = useState({})
    let [loading, setLoading] = useState(false)
    let [errors, setErrors] = useState({})
    let [messages, setMessages] = useState('')

    const navigate = useNavigate()

    let signUpSchema = yup.object().shape({
        email: yup.string().email('Must be a valid email address').required('Email is required'),
        password: yup.string().min(8, 'Password must be 8 characters').required('Password is required')
    })

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        
        setForm({...form, [name]: value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        try {
            await signUpSchema.validate(form, {abortEarly: false})
            setErrors({})
            
            setMessages('Form submitted successfully')
            setLoading(true)

            setTimeout(() => {
                navigate('./heroPage')
            }, 2000)
        } catch (error) {
            let newError = {}
            error.inner.forEach(e => {
                newError[e.path] = e.message
            });
            
            setErrors(newError)
        }
    }

  return (
      <div className='container mx-auto flex justify-center mt-20 md:mt-12 lg:mt-14 h-100'>
        <form onSubmit={handleSubmit} className='flex flex-col bg-white shadow-xl border px-10 lg:px-20 rounded-3xl'>
        {messages !== '' && <strong className='text-green-500 text-center'>{messages}</strong>}
            <div className='mt-10 flex justify-center'>
                <img className='w-72 h-28' src={foodspace} alt="foodspace logo" />
            </div>
            <div className='space-y-4 mt-5'>
                <div>
                    <input onInput={handleChange} name='email' type="text" placeholder='Email address' className='w-full h-11 lg:h-14 border rounded-full outline-none placeholder:pl-3 shadow-md'/>
                    <small className='text-red-500 font-medium tracking-wide'>{errors.email && errors.email}</small>
                </div>
                <div>
                    <input onInput={handleChange} name='password' type="password" placeholder='Password' className='w-full border rounded-full h-11 lg:h-14 outline-none  placeholder:pl-3 shadow-md'/>
                    <small className='text-red-500 font-medium tracking-wide'>{errors.password && errors.password}</small>
                </div>
            </div>
            <div className='flex flex-col items-center md:flex md:flex-row md:justify-between space-y-3 md:space-y-0 mt-5 sm:mt-5'>
                <div className='flex'>
                    <input type="checkbox" />
                    <p className='font-semibold ml-2'>Remember me</p>
                </div>
                <p>
                    <a href="#" className='text-red-700 font-semibold'>Forgot Password?</a>
                </p>
            </div>

            {loading && <AiOutlineLoading3Quarters className='animate-spin'/>}
            <button disabled={loading} type='submit' className='mt-6 md:px-40 py-1 md:py-2 lg:py-3 w-full bg-red-700 hover:bg-red-800 outline-none duration-300 rounded-full text-white uppercase tracking-wider lg:font-semibold'>Sign Up</button>
            
            <div className='flex justify-evenly items-center mt-6'>
                <div className='w-[60px] md:w-[140px] h-[1px] bg-gray-300'></div>
                <div className='uppercase text-sm sm:text-base font-semibold'>Or</div>
                <div className='w-[60px] md:w-[140px] h-[1px] bg-gray-300'></div>
            </div>
            <div className='flex justify-center items-center space-x-6 mt-2'>
                <Link>
                    <img src={googleLogo} alt="google-logo" className='h-[40px] md:h-[50px] lg:h-[35px] object-cover'/>
                </Link>
                <Link>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt="facebook-logo" className='h-[25.3px] md:h-[30px] lg:h-[22px] object-cover'/>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Index;