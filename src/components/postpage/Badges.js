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
        const language = languages.filter(lang => e.target.value === lang.countrycode)[0] // busca el primer valor de la opcion seleccionada que coincida con el array de idiomas...
        if(!badges.includes(language)){
            setBadges([...badges, language]) // ...y en caso que no exista ya en el array de badges, lo incluye
        }
    }
  
    function removeBadge(e){
      setBadges(
        badges.filter(badge => badge.name !== e.target.innerText.split(' ')[0]) // split para excluir el emoji de la bandera al filtrar el nombre del idioma
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
