import React from 'react'
import { DESTINATION_IMAGES_URL } from '../../config'

export default function Destinationcard({destination}) {

    return (
        <div className="destinationcard divebox">
            <img src={DESTINATION_IMAGES_URL + destination.image} className="destinationimg" alt={destination.name}/>
            <h4>{destination.name}</h4>
            <p>{destination.description}</p>
        </div>
    )
}
