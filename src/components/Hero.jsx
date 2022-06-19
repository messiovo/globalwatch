import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import heropic from './img/pic2.jpeg';
import {AiOutlineArrowRight} from 'react-icons/ai';

 const Hero =() =>{
   return(
     <div className='flex flex-col bg-[#252F46] w-full justify-between lg:flex-row items-center'>
       <div className=' text-white   px-20 pt-20 leading-normal pb-10 hero-content'>
         <h2 className='text-5xl font-bold'>Study <br/> Abroad <br/> Simplified!</h2>
         <p className='py-6'>There is a world out there full of possibilities.<br/>
         Our mission is to help you accomplish your dreams.</p>
         <Link to='/'>
          <button className='flex items-center justify-center text-2xl rounded-full bg-[#C2956D] py-2 px-10 text-bold btn-hero'>
           Learn more <span className='pl-2 mt-2 flow-root'><AiOutlineArrowRight size={20}/></span>
          </button>
         </Link>
       </div>
       <div className='hero-img'><img src={heropic} alt="" className='rounded 3xl img'/></div>
     </div>
   )
 }

export default Hero;