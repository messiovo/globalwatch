import React from 'react'
import { Link } from 'react-router-dom';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter, AiFillInstagram, AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  
  return (
    <footer className='bg-[#252F46] text-white flex flex-col items-center p-10 min-h-screen justify-center'>
        <div>
          <span className='flex flex-col font-black text-2xl leading-6 uppercase text-left  cursor-pointer ml-10 items-center '>
              Global 
            <span>
                Watch
            </span>
            <span className='text-xs'>
              Catalogue
            </span>
          </span>
          <p className='text-center p-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
               Fuga adipisci sequi fugit porro magni excepturi nobis ut conseofficia numquam <br/>
               repellat distinctio eos dignissimos aliquid fugit?
          </p>
          </div>
        <div className='flex flex-col px-10 sm:flex-row'>
            <Link to='./'><span className='m-6 border-b-2 '>Contact Us</span></Link>
            <Link to='./'><span  className='m-6 border-b-2 sm:my-6'>Terms of Service</span></Link>
            <Link to='./'><span  className='m-6 border-b-2'>Privacy Policy</span></Link>
        </div>
        <div className='flex pt-4'>
            <Link to='./'><span><FaFacebookF size={30} className='m-6'/></span></Link>
            <Link to='./'><span><AiFillInstagram size={30} className='m-6'/></span></Link>
            <Link to='./'><span><AiOutlineTwitter size={30} className='m-6'/></span></Link>
        </div>
        <div className='flex text-sm justify-end pt-20 w-full'>
          <AiOutlineCopyrightCircle/>
          <p>Messiovo & Udoka</p>
        </div>
    </footer>
  )
}

export default Footer