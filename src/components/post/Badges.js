import React from 'react'
import { useState, useEffect } from 'react';
import { LANGUAGES_URL } from '../../config';

export default function Badges({setLanguageArray}) {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch(LANGUAGES_URL)
        .then(r => r.json())
        .then(data => setLanguages(data))
    }, [])

    let [badges, setBadges] = useState([])

    function addBadge (e){
        const language = languages.filter(lang => e.target.value === lang.countrycode)[0]
        if(!badges.includes(language)){
            setBadges([...badges, language])
        }
        console.log(badges);
    }
  
    function removeBadge(e){
        console.log(e.target);
      setBadges(
        badges.filter(badge => badge.name !== e.target.textContent)
      )
    }

    return (
        <div>
            <label htmlFor="shoplanguage">Spoken languages:</label>
            <select onChange={(e)=>addBadge(e)} name="shoplanguages" id="shoplanguage">
                    <option value="" hidden></option>
                    {languages.map(language => {
                        return(
                            <option key={language.id} value={language.countrycode}>{language.name}</option>
                        )
                    })}
            </select>
            <div className="badges">
                {badges.map(badge => {
                    return(<span key={badge.id} onClick={(e)=>removeBadge(e)}>{badge.name}</span>)
                })}
            </div>
        </div>
    )
}
