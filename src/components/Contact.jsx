import React from 'react';
import {BsFillHouseFill, BsFillTelephoneFill} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='p-10 mb-20 bg-[#e2e2e2]'>
      <span className="flex flex-col gap-2 items-center">
          <h2 className="text-center font-bold text-2xl lg:text-4xl uppercase" >Contact</h2>
          <div className="w-40 h-2 bg-black rounded-full lg:w-44" data-aos="fade-up"></div>
      </span>
      <div className='flex px-10'>
        <div>
          <h3>Lagos</h3>
          <span>
            <BsFillHouseFill size={20}/>
            <p>Agos Building. 54B Adeniyi Jones, Ikeja, Lagos, Nigeria</p>
          </span>
          <span>
            <BsFillTelephoneFill size={20}/>
            <p>0913 543 6633, 0916 664 0754</p>
          </span>
          <span>
            <AiTwotoneMail size={20}/>
            <p>globalwatchcatalogue@gmail.com</p>
          </span>
        </div>

        <div>
          <h3>Abuja</h3>
          <span>
            <BsFillHouseFill size={20}/>
            <p>Sf 23 Anafara Plaza, First Avenue, Gwarinpa, F.C.T Abuja, Nigeria</p>
          </span>
          <span>
            <BsFillTelephoneFill size={20}/>
            <p>0913 543 6633, 0906 825 9997</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contact