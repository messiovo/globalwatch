import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import  downarrow from '../icons/downarrow.svg';
import { FaBars } from "react-icons/fa";
import {AiFillCaretDown} from "react-icons/ai"

const Navbar = () => {
  
  return (
    <div className='nav align-middle'>
          <Link to="/"><span className='flex flex-col font-black text-2xl leading-6 uppercase text-left  cursor-pointer'>Global <span>Watch</span><span className='text-xs'>Catalogue</span></span></Link>
      <ul className='gap-12 lg:flex hidden float-right mr-[5rem] ml-auto my-auto'>
        <li>
          <Link to="/"><span className='hover:text-slate-300 transition-all duration-300 cursor-pointer'>Home</span></Link>
        </li>
        <li>
          <Link to="/"><span className='hover:text-slate-300 transition-all duration-300 cursor-pointer'>About</span></Link>
        </li>
        <li>
          <span className='hover:text-slate-300 transition-all duration-300 group'> 
          <span className='flex cursor-pointer'>Services <AiFillCaretDown className='mt-1.5 ml-1 group-hover:rotate-180'/></span> 
          <ul className='hidden group-hover:flex absolute flex-col top-24  bg-slate-600 p-6 '>
            <li>
              <Link to="/"><span>Immigration Services</span></Link>
            </li> <li>
              <Link to="/"><span>Immigration Services</span></Link>
            </li>
          </ul>
          </span>
        </li>
        <li>
          <Link to="/"><span className='hover:text-slate-300 transition-all duration-300 cursor-pointer'>Contact</span></Link>
        </li>
      </ul>
      <div className='my-auto ml-auto float-right lg:hidden '>
        <div className="w-8 h-1 bg-white rounded-full 
        after:w-8 after:h-1 after:content-[''] after:bg-white after:absolute after:-mt-2
        before:w-8 before:h-1 before:content-[''] before:bg-white before:absolute before:mt-2
        "></div>
      </div>
      <div>

      </div>
    </div>
    )
}

export default Navbar