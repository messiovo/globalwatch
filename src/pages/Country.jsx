import React, { useState } from 'react'
import { useParams } from 'react-router-dom/index';
import { country } from '../services';
const Country = () => {
    const { countryId } = useParams();
    const [data, setData] = useState(country[countryId])
    const {
    title,
    content,
    Location,
    Currency,
    Language,
    EnglishProficiency,
    WorkPermit,
    WorkingHours,
    averageIncome,
    costOfLiving,
    postStudyVisa,
    englishProficiencyReq,
    visaRequirements,
    applicationRequirements,
    AverageTuition
    } = data;
    const {
        undergraduateStudy,
        postGraduateStudy
    } = applicationRequirements;
    const {
        passport,
        photo,
        transcripts,
        proofOfEnglishProficiency
    } = undergraduateStudy;
    const {
        addition,
        transcripts : postTranscript,
        cv : postCv,
        sop
    } = postGraduateStudy;
    const {
        pic,
        id,
        cert,
        financeproof,
        health,
        letter,
        cv,
        travelIns,
        birthCert,
        langProf,
        motLetter,
        delivery
    } = visaRequirements;
  return (
      <div className='flex flex-col p-24 gap-8'>
          <h1 className='font-bold text-xl text-center'>{title}</h1>
          <p className='font-semibold'>{content}</p>
            <div className="flex gap-6"><span className='text-lg font-semibold'>Location:</span><span>{Location}</span></div>
            <div className="flex gap-6"><span className='text-lg font-semibold'>Currency:</span><span>{Currency}</span></div>
            <div className="flex gap-6"><span className='text-lg font-semibold'>Language:</span><span>{Language}</span></div>
            <div className="flex gap-6"><span className='text-lg font-semibold'>English Proficiency:</span><span>{EnglishProficiency}</span></div>
            <div className="flex gap-6"><span className='text-lg font-semibold'>Work Permit:</span><span>{WorkPermit}</span></div>
            <div className="flex gap-6"><span className='text-lg font-semibold'>Working Hours:</span><span>{WorkingHours}</span></div>
            <div className="flex gap-6"><span className='text-lg font-semibold'>Average Income:</span><span>{averageIncome}</span></div>
            <div className="flex gap-6"><span className='text-lg font-semibold'>Cost of Living:</span><span>{costOfLiving}</span></div>
            <div className="flex gap-6"><span className='text-lg font-semibold'>Post Study Visa:</span><span className='w-3/4'>{postStudyVisa}</span></div>
            <div className="flex gap-6"><span className='text-lg font-semibold'>Dependency Visa:</span><span>{englishProficiencyReq}</span></div>
          <div className="flex gap-6"><span className='text-lg font-semibold'>Average Tuitions:</span><span>{AverageTuition}</span></div>
          <div className='flex w-full gap-10'>
            <div className='font-semibold'>Applicationn Requirements:</div>
              <div className='w-1/2'>
                  <span className='font-semibold'>Under Graduate Study:</span>
                  <p>{passport}</p>
                  <p>{photo}</p>
                  <p>{transcripts}</p>
                  <p>{proofOfEnglishProficiency}</p>
                  <span className='font-semibold'>Post Graduate Study:</span>
                  <p>{addition}</p>
                  <p>{postTranscript}</p>
                  <p>{postCv}</p>
                  <p>{sop}</p>
   
            </div>
            </div>
          <div className='flex w-full gap-10'>
              <h1 className='font-semibold'>Visa Requirements:</h1>
              <div className='w-1/2'>
        <p>{pic}</p>
        <p>{id}</p>
        <p>{cert}</p>
        <p>{financeproof}</p>
        <p>{health}</p>
        <p>{letter}</p>
        <p>{cv}</p>
        <p>{travelIns}</p>
        <p>{birthCert}</p>
        <p>{langProf}</p>
        <p>{motLetter}</p>
        <p>{delivery}</p>
    </div>
    </div>
    </div>
  )
}

export default Country;