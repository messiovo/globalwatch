import React from 'react';
import './Hero.css';
import StepCard from './StepCard';
import data from './data';
import CountriesCard from './CountriesCard';
const Countries = [
    {
        id:1,
        img: require("./img/uk.jpeg"),
        title: "United Kingdom"
    },  
    {
        id:2,
        img: require("./img/germany.jpeg"),
        title: "Germany"
    },
    {
        id:3,
        img: require("./img/cyprus.jpeg"),
        title: "Cyprus"
    },
    {
        id:4,
        img: require("./img/russia.jpeg"),
        title: "Russia"
    },
    {
        id:5,
        img: require("./img/poland.jpeg"),
        title: "Poland"
    }    
]
const About = () => {
    const countryCard = Countries.map(country =>{

        return(
            <CountriesCard
            key={country.id}
            country= {country}
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
        <div className='flex flex-col about-card lg:flex-row'>
        { data.map(item =>(
        <StepCard 
        key={item.id}
        item={item}
        />
        )
    )}
        </div>
        </div>
        <div>
            <div>
            <h2 className='text-center font-bold text-5xl pt-8 pb-12'> Countries</h2>
            </div>
            <div className='flex flex-wrap p-10 items-center'>
                {countryCard}
            </div>
        </div>

    </div>
  )
}

export default About