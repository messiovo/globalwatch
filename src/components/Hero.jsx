import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import heropic from './img/pic2.jpeg';
import {AiOutlineArrowRight} from 'react-icons/ai';

 const Hero =() =>{
   return(
     <div className='flex bg-[#252F46] w-full justify-between'>
       <div className='w-2/4 text-white   pl-20 pt-20 leading-normal'>
         <h2 className='text-5xl font-bold'>Study <br/> Abroad <br/> Simplified!</h2>
         <p className='py-6'>There is a world out there full of possibilities.<br/>
         Our mission is to help you accomplish your dreams.</p>
         <Link to='/'>
          <button className='flex items-center justify-center text-2xl rounded-full bg-[#C2956D] py-2 px-8'>
           Learn more <span className='pl-2 mt-2'><AiOutlineArrowRight size={20}/></span>
          </button>
         </Link>
       </div>
       <div className='w-2/4'><img src={heropic} alt="" className='rounded 3xl'/></div>
     </div>
   )
 }

export default Hero;