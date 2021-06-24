import { useEffect, useState } from 'react';
import React from 'react';
import Collapsible from 'react-collapsible'; // https://www.npmjs.com/package/react-collapsible
import { ROOT_URL } from "../../../config";

export default function LanguageFilter() {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch(ROOT_URL + "/languages")
        .then(r => r.json())
        .then(data => setLanguages(data))
    }, [])

    return (
        <Collapsible trigger="Language">
            {languages.map(language => {
                return ( 
                    <div key={language.id} className="checkboxblock">
                        <input type="checkbox" name="" id={language.countrycode} /><label htmlFor={language.countrycode}>{language.name}</label>
                    </div>
                )
            })}
        </Collapsible>
    )
}
