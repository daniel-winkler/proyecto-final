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

    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch(ROOT_URL + "/destinations")
        .then(r => r.json())
        .then(data => setDestinations(data))
    }, [])

    return (
        <aside className="filterbox">
            <h3>Filter By:</h3>
            <Collapsible trigger="Destination">
                {destinations.map(destination => {
                    return(
                        <div key={destination.id} className="checkboxblock">
                            <input type="checkbox" name="" id={destination.id} /><label htmlFor={destination.id}>{destination.name}</label>
                        </div>
                    )
                })}
                <div className="checkboxblock">
                    <input type="checkbox" name="" id="destination1" /><label htmlFor="destination1">South East Asia</label>
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
