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
    applicationRequirements
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
      <div className='flex flex-col p-12'>
          <h1>{title}</h1>
          <p>{content}</p>
            <p><span>Location:</span>{Location}</p>
            <p><span>Currency:</span>{Currency}</p>
            <p><span>Language:</span>{Language}</p>
            <p><span>English Proficiency:</span>{EnglishProficiency}</p>
            <p><span>Work Permit:</span>{WorkPermit}</p>
            <p><span>Working Hours:</span>{WorkingHours}</p>
            <p><span>Average Income:</span>{averageIncome}</p>
            <p><span>Cost of Living:</span>{costOfLiving}</p>
            <p><span>Post Study Visa</span>{postStudyVisa}</p>
            <p><span>Dependency Visa</span>{englishProficiencyReq}</p>
            <p><span>Average Tuitions</span>{passport}</p>
            <div>
            <h1>Applicationn Requirements </h1>
              <div>
                  <span>Under Graduate Study:</span>
                  <p>{photo}</p>
                  <p>{transcripts}</p>
                  <p>{proofOfEnglishProficiency}</p>
                  <span>Post Graduate Study:</span>
                  <p>{addition}</p>
                  <p>{postTranscript}</p>
                  <p>{postCv}</p>
                  <p>{sop}</p>
   
            </div>
            </div>
            <div>
                <h1>Visa Requirements:</h1>
            <div>
  {pic}
        {id}
        {cert}
        {financeproof}
        {health}
        {letter}
        {cv}
        {travelIns}
        {birthCert}
        {langProf}
        {motLetter}
        {delivery}          
    </div>
    </div>
    </div>
  )
}

export default Country;