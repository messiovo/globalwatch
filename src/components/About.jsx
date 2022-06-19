import React from 'react';
import './Hero.css';
import StepCard from './StepCard';
import data from './data';

const About = () => {
    const stepCard = data.map(item => {
        return(
        <StepCard 
        key={item.id}
        item={item}
        />
        )
    })
  return (
    <div className='p-10 '>
        <div className='p-10 '>

            <div >
                <h2 className="text-center font-bold text-5xl pb-8">About Us</h2>
            </div>
            <div className='text-center text-2xl'>
                <p>We are a team of hignly experienced professionals <br/>
                that makes the whole process seamless and achievable<br/>
                Whether is study abroad or any of our other services,<br/>
                we make sure you get value for your money.</p>
            </div>
        </div>
        <div className='bg-[#e2e2e2] p-10 pb-20 rounded-lg'>
            <h2 className='text-center font-bold text-5xl pt-8 pb-12'>Our Four Step Process</h2>
        <div className='flex about-card'>
        {stepCard}
        </div>
        </div>
    </div>
  )
}

export default About