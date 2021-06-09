import React from 'react'
import placeholder from "../images/placeholder.jpg";
import { countryCodeEmoji } from 'country-code-emoji'; // https://www.npmjs.com/package/country-code-emoji


export default function Card({shop}) {
    return (
        <div className="card">
            <img src={placeholder} width={200} alt={"Shop"}/>
            <h3>{shop.name}</h3>
            <h4>{shop.location}</h4>
            <p>{shop.languages?.map(lang => {
                return( <span>{countryCodeEmoji(lang)}</span> )
            })}</p>
        </div>
    )
}
