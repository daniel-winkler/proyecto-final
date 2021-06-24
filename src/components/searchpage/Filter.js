import { useEffect, useState } from 'react';
import React from 'react';
import Collapsible from 'react-collapsible'; // https://www.npmjs.com/package/react-collapsible
import { ROOT_URL } from "../../config";

export default function Filter() {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch(ROOT_URL + "/languages")
        .then(r => r.json())
        .then(data => setLanguages(data))
    }, [])

    return (
        <aside className="filterbox">
            <h3>Filter By:</h3>
            <Collapsible trigger="Destination">
                <div className="checkboxblock">
                    <input type="checkbox" name="" id="destination1" /><label htmlFor="destination1">South East Asia</label>
                </div>
                <div className="checkboxblock">
                    <input type="checkbox" name="" id="destination2" /><label htmlFor="destination2">Caribbeans</label>
                </div>
                <div className="checkboxblock">
                    <input type="checkbox" name="" id="destination3" /><label htmlFor="destination3">Central America</label>
                </div>
                <div className="checkboxblock">
                    <input type="checkbox" name="" id="destination4" /><label htmlFor="destination4">Oceania</label>
                </div>
            </Collapsible>
            <Collapsible trigger="Language">
                    {languages.map(language => {
                        return ( 
                            <div key={language.id} className="checkboxblock">
                                <input type="checkbox" name="" id={language.countrycode} /><label htmlFor={language.countrycode}>{language.name}</label>
                            </div>
                        )
                    })}
            </Collapsible>
        </aside>
    )
}
