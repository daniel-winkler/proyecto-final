import { useEffect, useState } from 'react';
import React from 'react';
import Collapsible from 'react-collapsible'; // https://www.npmjs.com/package/react-collapsible
import { LANGUAGES_URL } from "../../../config";

export default function LanguageFilter({setLanguage}) {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch(LANGUAGES_URL)
        .then(r => r.json())
        .then(data => setLanguages(data))
    }, [])

    // function handleChange(e){
    //     if(e.target.checked && !checked.includes(e.target.id)){
    //         setChecked([...checked, e.target.id])
    //     } else {
    //         setChecked(checked.filter(check => check !== e.target.id))
    //     }
    // }

    function selectLanguage(e){
    
        setLanguage(`?lang=${e.target.id}`)
       
    }

    return (
        <Collapsible trigger="Language" triggerTagName="ul">
            {languages.map(language => {
                return ( 
                    <li key={language.id} className="checkboxblock">
                        <input type="radio" onClick={(e)=>selectLanguage(e)} name="language" id={language.countrycode} /><label htmlFor={language.countrycode}>{language.name}</label>
                    </li>
                )
            })}
        </Collapsible>
    )
}
