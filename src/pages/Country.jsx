import React from 'react'
import { useParams } from 'react-router-dom/index';
import { country } from '../services';
const Country = () => {
    const {countryId } = useParams();
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
    } = country[countryId];
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
      <div>
          {}
    </div>
  )
}

export default Country;