import React from 'react'
import './Hero.css';
import MediaCard from './MediaCard';
import mediaData from './mediaData';


const Services = () => {
    
const mediaCard = mediaData.map(media =>{
  return(
    <MediaCard
    key = {media.id}
    media = {media}
    />
  )
})

  return (
    <div className='p-10 pb-20 rounded-lg m-10'>
      <div>
        <h2 className='text-center font-bold text-5xl pt-8 pb-12'>Other Services</h2>
      </div>
      <div className='px-9'>
        <h3 className='text-3xl font-semibold'>Immigration Services</h3>
        <div className='w-12 h-1 bg-[#C2956D] rounded-lg'></div>
        <p className='text-xl py-8 leading-normal'>We offer advisory and processing services for those seeking travel to The UK and European countries.
          Our immigration consultants thus have to adhere to very strict professional rules. These rules ensure that we are fit, competent and up to date with all the UK immigration rules and regulations.
          <span className='block py-3'>Our team of consultants has exceptional qualifications and many years of experience in Immigration law. 
          When we submit a visa application to the UK Home Office or any visa application/submission Center, it carries the highest possible chance of success.</span>
          We are available for online consultation, through major social media platforms. Personal consultations are available at any of our offices to individuals and businesses worldwide.
          <span className='block py-3'>Our consultation fees are deductible from your final fee, should you instruct us within three months of your consultation.
Our prices are very competitive. We make sure that you get expert advice at affordable prices.
          We operate a “no-win, no-fee” policy. </span>This means we guarantee our work.
          If your application is not successful, due to an error on our side, we will refund you all the fees you have paid for our professional services.
        </p>
      </div>
      <div>
      <div>  
        <h3 className='text-center text-2xl font-semibold pb-4'>UK/European Visa Categories</h3>  
        <table className='table'>
          <thead className='bg-black'>
            <th>Visa Type</th>
            <th>Purpose</th>
          </thead>
          <tbody>
            <td>Adult Dependant Visa</td>
            <td>Foreign nationals requiring care from a relative who is a UK citizen</td>
          </tbody>
          <tbody>
            <td>Adult Student Visa</td>
            <td>Persons 18 and above Studying in the UK</td>
          </tbody>
          <tbody>
            <td>Ancestry Visa</td>
            <td>Citizens of commonwealth countries with a British grandparent</td>
          </tbody>
          <tbody>
            <td>Business Visitor Visa</td>
            <td>Travel to the UK for up to 6 months for business activities</td>
          </tbody>
          <tbody>
            <td>Child Dependant Visa</td>
            <td>Child of a British citizen/settled person not living an independent life</td>
          </tbody>
          <tbody>
            <td>Child Student Visa</td>
            <td>Children age 4-17 to study in the UK</td>
          </tbody>
          <tbody>
            <td>Fiancés Visa</td>
            <td>Fiancés of British Citizens/settled Persons citizen</td>
          </tbody>
          <tbody>
            <td>Innovator Visa</td>
            <td>Fiancés of British Citizens/settled Persons</td>
          </tbody>
          <tbody>
            <td>Intra-Comapany Transfer Visa</td>
            <td>Employees from multi-national companies transferring to work in a UK branch</td>
          </tbody>
          <tbody>
            <td>Investor Visa</td>
            <td>International investors with at least £2 million to invest in UK businesses</td>
          </tbody>
          <tbody>
            <td>Ministry of Religion Visa</td>
            <td>Work permit for religious workers</td>
          </tbody>
          <tbody>
            <td>Paid Permitted Engagement visa</td>
            <td>Short-term entry for individuals invited to the UK as experts in their field</td>
          </tbody>
          <tbody>
            <td>Schengen Visa</td>
            <td>Skilled Worker Visa</td>
          </tbody>
          <tbody>
            <td>Skilled Worker Visa</td>
            <td>Skilled Worker Visa</td>
          </tbody>
          <tbody>
            <td>Sportsperson Visa</td>
            <td>Work permit for elite sportspersons or qualified coaches</td>
          </tbody>
        <tbody>
            <td>Spouse Visa</td>
            <td>Work permit for elite sportspersons or qualified coaches</td>
          </tbody>
        <tbody>
            <td>Startup Visa</td>
            <td>Applicants with approved sponsors to start their first business in the UK</td>
          </tbody>
        <tbody>
            <td>Student Visitor Visa</td>
            <td>Studying in the UK on a temporary basis</td>
          </tbody>
        <tbody>
            <td>Temporary Worker Visa</td>
            <td>Temporary work, work experience and research in the UK for less than 12 months</td>
          </tbody>
        <tbody>
            <td>Tourist Visa</td>
            <td>Travel to the UK for up to 6 months for leisure or other purposes</td>
          </tbody>
        <tbody>
            <td>Two year post-study work Visa</td>
            <td>Work permit for international students who have studied a bachelor’s or master’s course in the UK</td>
          </tbody>
        <tbody>
            <td>Unmarried Partner Visa</td>
            <td>Long-term partner of British Citizens/settled persons</td>
          </tbody>
        <tbody>
            <td>Youth MobilityVisa</td>
            <td>2 year work permit for young people aged 18-20 from participating territories</td>
          </tbody>
        
        </table>
      </div>       
  </div>
      <div className='py-14'>
        <h3 className='text-3xl font-semibold pl-4'>Multimedia Training and Services </h3>
        <div className='w-12 h-1 bg-[#C2956D] rounded-lg ml-4'></div>
        <div className='flex flex-wrap px-8 py-2 m-auto my-2 text-white'>
         {mediaCard}
        </div>
      </div>

</div>
    
  )
}

export default Services