import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { countryCodeEmoji } from 'country-code-emoji'; // https://www.npmjs.com/package/country-code-emoji
import Map from './Map';
import Contactform from './Contactform';
import { DETAILS_URL } from "../../config";


export default function Shop() {

    const { id } = useParams();

    const [shop, setShop] = useState({})

    useEffect(() => {
        fetch(DETAILS_URL + id)
        .then(r => r.json())
        .then(data => setShop(data))
    }, [id])

    return (
        <>
            <div className="shop">
                <h2>{shop.name}</h2>
                <h3>{shop.location}</h3>
            </div>
            <div className="shop">
                <h4>Languages:</h4>
                <p>{shop.languages?.map(language => {
                    return ( <span key={language.id} className="flags">{countryCodeEmoji(language.countrycode)}</span> )
                })}</p>
            </div>
            <div className="shop">
                <h4>Location</h4>
                <Map latitude={shop.coords?.lat} longitude={shop.coords?.lng} />
            </div>
            <Contactform id={id} />
        </>
    )
}
