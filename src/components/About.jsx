import React from 'react';
import './Hero.css';
import StepCard from './StepCard';
import CountriesCard from './CountriesCard';
const data = [
    {
        id: 1,
        no: '1',
        title: "Application",
        content: "Search for school of your chioce, apply online via email, phone, call or in person at our office"
    },
    {
        id: 1,
        no: '2',
        title: "Documentation",
        content: "Provide all necessary documents required"
    },
    {
        id: 1,
        no: '3',
        title: "Visa Application",
        content: "Once granted admission, we will guide you through out the visa application process, our success rate is highly impressive"
    },
    {
        id: 1,
        no: '4',
        title: "Enrollment",
        content: "Search for school of your chioce, apply online via email, phone, call or in person at our office"
    }
];
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
        <div className='w-full flex flex-col p-6 gap-8'>

            <span className="flex flex-col gap-2 items-center">
                <h2 className="text-center font-bold text-xl lg:text-3xl">About Us</h2>
                <div className="w-36 h-2 bg-black rounded-full"></div>
            </span>
            <div className='text-center lg:text-lg font-semibold text-base'>
                <p>We are a team of hignly experienced professionals 
                that makes the whole process seamless and achievable
                Whether is study abroad or any of our other services,
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