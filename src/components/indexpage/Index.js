import React from 'react'
import { useState, useEffect } from 'react'
import { DESTINATION_IMAGES_URL, POPULAR_URL } from '../../config'

export default function Index() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch(POPULAR_URL)
        .then(r => r.json())
        .then(data => setPopular(data))
    }, [])

    return (
        <div>
            {popular.map(destination => {
                return(
                    <img key={destination.id} src={DESTINATION_IMAGES_URL + destination.image} height={300} width={500} alt={destination.name}/>
                )
            })}
        </div>
    )
}
