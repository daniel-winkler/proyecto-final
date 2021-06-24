import { useEffect, useState } from 'react';
import React from 'react';
import Collapsible from 'react-collapsible'; // https://www.npmjs.com/package/react-collapsible
import { ROOT_URL } from "../../../config";

export default function DestinationFilter() {

    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch(ROOT_URL + "/destinations")
        .then(r => r.json())
        .then(data => setDestinations(data))
    }, [])

    return (
        <Collapsible trigger="Destination">
            {destinations.map(destination => {
                return(
                    <div key={destination.id} className="checkboxblock">
                        <input type="checkbox" name="" id={destination.id} /><label htmlFor={destination.id}>{destination.name}</label>
                    </div>
                )
            })}
        </Collapsible>
    )
}
