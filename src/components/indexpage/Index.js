import React from 'react'
import { useState, useEffect } from 'react'
import { POPULAR_URL } from '../../config'
import Destinationcard from './Destinationcard'

export default function Index() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch(POPULAR_URL)
        .then(r => r.json())
        .then(data => setPopular(data))
    }, [])

    return (
        <div className="popular">
            {popular.map(destination => {
                return(
                    <Destinationcard key={destination.id} destination={destination} />
                )
            })}
        </div>
    )
}
