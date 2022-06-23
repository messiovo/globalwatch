import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom'
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
        img: require("./img/uk.jpg"),
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
        img: require("./img/russia.jpg"),
        title: "Russia"
    },
    {
        id:5,
        img: require("./img/poland.jpg"),
        title: "Poland"
    }, 
       {
        id:6,
        img: require("./img/ireland.jpg"),
        title: "Ireland"
    } 
       
]
const About = () => {
  return (
    <div className='p-10 bg-[#e2e2e2] w-full'>
        <div className='w-full flex flex-col p-6 gap-8'>

            <span className="flex flex-col gap-2 items-center">
                <h2 className="text-center font-bold text-2xl lg:text-4xl uppercase">About Us</h2>
                <div className="w-40 h-2 bg-black rounded-full lg:w-44 down"></div>
            </span>
            <div className='text-center lg:text-lg font-semibold text-base'>
                <p>We are a team of hignly experienced professionals 
                that makes the whole process seamless and achievable
                Whether is study abroad or any of our other services,
                we make sure you get value for your money.</p>
            </div>
        </div>
        <div className=' p-10 pb-20 rounded-lg'>
            <h2 className='text-center text-[#252F46] font-bold text-2xl lg:text-3xl mb-4'>Our Four Step Process</h2>
        <div className='flex flex-col lg:flex-row w-full'>
        { data.map(item => {
  const { no,title,content} = item;
  return (
    <div className=" w-80  px-8 m-4 py-8 rounded-xl text-center  card1">
        <span className='bg-[#e2e2e2] w-10 h-8 rounded-full block m-auto pt-1 mb-4 font-bold'>{no}</span>
        <h2 className=' font-bold pb-2 text-white'>{title}</h2>
        <p className='text-white '>{content}</p>
    </div>
  )
}
    )}
        </div>
        </div>
        <div className="w-full">
            <div>
                <h2 className='text-center text-[#252F46] font-bold text-2xl lg:text-3xl '>Our Countries</h2>
            </div>
            <div className='p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
                  {Countries.map((country) => {
                      const { img, title } = country;
                      return (
                          <div className='w-60 h-40 bg-[#252F46] rounded-lg card2 mx-auto'>
                              <Link to={`/country/${title}`}><img className='w-60 h-28 rounded-t-lg' src={img} alt="" />
                                  <h2 className='p-2 text-white text-center font-bold'>{title}</h2>
                              </Link>
                          </div>
                      )})};
            </div>
      <span className="flex flex-col gap-2 items-center pt-14">
      <h2 className='text-center text-[#252F46] font-bold text-2xl lg:text-3xl mb-4'>Testimonial</h2>
           
      </span>
        </div>

    </div>
  )
}

export default About