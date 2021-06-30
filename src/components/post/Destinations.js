import React from 'react'
import { useState, useEffect } from 'react';
import { DESTINATIONS_URL } from '../../config'

export default function Destinations({setDestination}) {

    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch(DESTINATIONS_URL)
        .then(r => r.json())
        .then(data => setDestinations(data))
    }, [])

    function handleDestination(e){
        const selectedDestination = destinations.filter(destination => e.target.value === destination.name)[0]
        setDestination(selectedDestination)
    }

    return (
        <select onChange={(e)=>handleDestination(e)} name="shopdestination" id="shopdestination">
            <option value="Destination" hidden></option>
            {destinations.map(destination => {
                return(
                    <option key={destination.id} value={destination.name}>{destination.name}</option>
                )
            })}
        </select>
    )
}
