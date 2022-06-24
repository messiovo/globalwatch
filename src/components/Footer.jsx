import React from 'react'
import { Link } from 'react-router-dom';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter, AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  
  return (
    <div className='bg-[#252F46] text-white flex flex-col items-center p-6'>
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
<<<<<<< HEAD
          <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
               Fuga adipisci sequi fugit porro magni excepturi nobis ut conseofficia numquam <br/>
               repellat distinctio eos dignissimos aliquid fugit?
=======
          <p className='text-center p-10'>
              Making the process of studying abroad easy and smooth.
>>>>>>> c0c17f694108172ef4bae6969d2f90d0000d0fdb
          </p>
          </div>
        <div className='flex flex-col px-10 gap-8  lg:flex-row'>
            <Link to='./'><span>Contact Us</span></Link>
            <Link to='./'><span>Terms of Service</span></Link>
        </div>
<<<<<<< HEAD
        <div className='flex pt-4 gap-4'>
        {
        // try using svg's instaed of these components
        }
            <Link to='./'><span><FaFacebookF size={30}/></span></Link>
            <Link to='./'><span><AiFillInstagram size={30}/></span></Link>
            <Link to='./'><span><AiOutlineTwitter size={30}/></span></Link>
=======
        <div className='flex pt-4'>
            <Link to='./'><span><FaFacebookF size={30} className='m-6'/></span></Link>
            <Link to='./'><span><AiOutlineTwitter size={30} className='m-6'/></span></Link>
>>>>>>> c0c17f694108172ef4bae6969d2f90d0000d0fdb
        </div>
        <div className='flex text-sm pt-20 w-full'>
          <AiOutlineCopyrightCircle/>
          <p>Messiovo & Udoka</p>
        </div>
    </div>
  )
}

export default Footer