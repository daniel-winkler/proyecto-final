import { useEffect, useState } from 'react';
import React from 'react';
import Collapsible from 'react-collapsible'; // https://www.npmjs.com/package/react-collapsible
import { LANGUAGES_URL } from "../../../config";

export default function LanguageFilter({setChecked, checked}) {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch(LANGUAGES_URL)
        .then(r => r.json())
        .then(data => setLanguages(data))
    }, [])

    function handleChange(e){
        console.log(e.target);
        if(e.target.checked){
            const newChecked = {id: e.target.id}
            setChecked([...checked, newChecked])
            console.log(checked);
        }
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
