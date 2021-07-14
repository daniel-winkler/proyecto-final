import React from 'react'
import { countryCodeEmoji } from 'country-code-emoji'; // https://www.npmjs.com/package/country-code-emoji
import { useHistory } from "react-router-dom";


export default function Card({shop}) {

    const history = useHistory();

    function moreInfo(id) {
        history.push(`/shop/${id}`)
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
