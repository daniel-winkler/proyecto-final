import { useEffect, useState } from 'react';
import React from 'react';
import Collapsible from 'react-collapsible'; // https://www.npmjs.com/package/react-collapsible
import { LANGUAGES_URL } from "../../../config";

export default function LanguageFilter() {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch(LANGUAGES_URL)
        .then(r => r.json())
        .then(data => setLanguages(data))
    }, [])

    function handleChange(e){
        console.log(e.target.name);
    }

    return (
        <Collapsible trigger="Language">
            {languages.map(language => {
                return ( 
                    <div key={language.id} className="checkboxblock">
                        <input onChange={(e)=>handleChange(e)} type="checkbox" name={language.countrycode} id={language.countrycode} /><label htmlFor={language.countrycode}>{language.name}</label>
                    </div>
                )
            })}
        </Collapsible>
    )
}
