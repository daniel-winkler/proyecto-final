import React from 'react'
import { useState, useEffect } from 'react';
import { LANGUAGES_URL } from '../../config';
import { countryCodeEmoji } from 'country-code-emoji';

export default function Badges({badges, setBadges}) {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch(LANGUAGES_URL)
        .then(r => r.json())
        .then(data => setLanguages(data))
    }, [])

    function addBadge (e){
        const language = languages.filter(lang => e.target.value === lang.countrycode)[0]
        if(!badges.includes(language)){
            setBadges([...badges, language])
        }
    }
  
    function removeBadge(e){
        console.log(e.target);
      setBadges(
        badges.filter(badge => badge.name !== e.target.innerText.split(' ')[0])
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
            <div className="badges d-flex">
                {badges.map(badge => {
                    return(<span key={badge.id} onClick={(e)=>removeBadge(e)}>{badge.name} {countryCodeEmoji(badge.countrycode)}</span>)
                })}
            </div>
        </div>
    )
}
