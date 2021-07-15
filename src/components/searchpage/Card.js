import React from 'react'
import { countryCodeEmoji } from 'country-code-emoji'; // https://www.npmjs.com/package/country-code-emoji
import { useHistory } from "react-router-dom";
import { CLICKCOUNTER_URL } from '../../config';


export default function Card({shop}) {

    const history = useHistory();

    async function moreInfo(id) {
        history.push(`/shop/${id}`)

        const destinationID = shop.destination.id

        const options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: destinationID
        }

        const response = await fetch(CLICKCOUNTER_URL, options);
        // eslint-disable-next-line
        const data = await response.json();
    }

    return (
        <div className="card">
            <div className="cardimg"></div>
            <h3>{shop.name}</h3>
            <h4>{shop.location}</h4>
            <p>{shop.languages?.map(language => {
                return( <span key={language.id}>{countryCodeEmoji(language.countrycode)}</span> )
            })}</p>
            <div>
                <button onClick={()=>moreInfo(shop.id)}>More Info</button>
            </div>
        </div>
    )
}
