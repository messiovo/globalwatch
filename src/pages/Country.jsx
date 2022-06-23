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
      <div>
          {title}
          {content}
    {Location}
    {Currency}
    {Language}
    {EnglishProficiency}
    {WorkPermit}
    {WorkingHours}
    {averageIncome}
    {costOfLiving}
    {postStudyVisa}
    {englishProficiencyReq}
{passport}
        {photo}
        {transcripts}
        {proofOfEnglishProficiency}
{addition}
        {postTranscript}
         {postCv}
        {sop}
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
  )
}

export default Country;