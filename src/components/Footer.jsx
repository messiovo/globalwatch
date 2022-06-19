import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-black text-white flex flex-col items-center p-10'>
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
          <p className='text-left p-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
               Fuga adipisci sequi fugit porro magni excepturi nobis ut conse.<br/>
               repellat distinctio eos dignissimos aliquid officia numquam fugit?
          </p>
          </div>
        <div>
            <Link to='./'><span>Contact Us</span></Link>
            <Link to='./'><span>Terms of Service</span></Link>
            <Link to='./'><span>Privacy Policy</span></Link>
            <Link to='./'><span>Contact Us</span></Link>
        </div>
        <div>
            social media links
        </div>

    </footer>
  )
}

export default Footer