import React from 'react';
import {BsFillHouseFill, BsFillTelephoneFill} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='p-10 pb-20 bg-[#e2e2e2]' id='contact'>
      <span className="flex flex-col gap-2 items-center">
          <h2 className="text-center font-bold text-2xl lg:text-3xl uppercase" >Contact</h2>
          <div className="w-40 h-2 bg-black rounded-full lg:w-44 mb-10" data-aos="fade-up"></div>
      </span>
      <div className='flex flex-col gap-8  lg:flex-row lg:px-14'>
        <div className='lg:p-10 '>
          <h3 className='text-center font-bold pb-6 text-lg lg:text-xl '>Lagos</h3>
          <span className='flex gap-4 pb-6 lg:text-lg'>
            <BsFillHouseFill/>
            <p>Agos Building. 54B Adeniyi Jones, Ikeja, Lagos, Nigeria</p>
          </span>
          <span className='flex gap-4 pb-6 text-lg '>
            <BsFillTelephoneFill/>
            <p>0913 543 6633, 0916 664 0754</p>
          </span>
          <span className='flex gap-4 lg:text-lg'>
            <AiTwotoneMail/>
            <p>globalwatchcatalogue@gmail.com</p>
          </span>
        </div>

        <div className='lg:p-10'>
          <h3 className='text-center font-bold text-lg pb-6 lg:text-xl '>Abuja</h3>
          <span className='flex gap-4 pb-6 lg:text-lg'>
            <BsFillHouseFill size={20}/>
            <p>Sf 23 Anafara Plaza, First Avenue, Gwarinpa, F.C.T Abuja, Nigeria</p>
          </span>
          <span className='flex gap-4 pb-6 lg:text-lg'>
            <BsFillTelephoneFill size={20}/>
            <p>0913 543 6633, 0906 825 9997</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contact