import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { POPULAR_URL } from '../../config'
import Destinationcard from './Destinationcard'

export default function Index() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch(POPULAR_URL)
        .then(r => r.json())
        .then(data => setPopular(data))
    }, [])

    const history = useHistory();

    function handleClick(e){
        history.push("/search")
    }

    return (
        <div className="indexpage d-flex">
            <h2 className="divebox">Top destinations</h2>
            <div className="popular d-flex">
                {popular.map(destination => {
                    return(
                        <Destinationcard key={destination.id} destination={destination} />
                    )
                })}
            </div>
            <button onClick={(e)=>handleClick(e)}>Go explore!</button>
        </div>
    )
}
