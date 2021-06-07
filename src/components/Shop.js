import { useEffect, useState } from 'react'
import { countryCodeEmoji } from 'country-code-emoji'; // https://www.npmjs.com/package/country-code-emoji
import Map from './Map';
import Contactform from './Contactform';

export default function Shop() {

    const [shop, setShop] = useState([])

    const SHOP_URL = "https://run.mocky.io/v3/87d3cbad-cdb0-4a55-adba-17ed29dfce25";

    useEffect(() => {
        fetch(SHOP_URL)
        .then(r => r.json())
        .then(data => setShop(data))
    }, [])

    return (
        <>
            <div className="shop">
                <h2>{shop.name}</h2>
                <h3>{shop.location}</h3>
                <p>{shop.overview}</p>
            </div>
            <div className="shop">
                <h4>Certificate Agencies</h4>
                <p>{shop.cert_agencies?.map(agency => {
                    return (
                        <span>{agency}</span>
                    )
                })}</p>
                <h4>Languages:</h4>
                <p>{shop.languages?.map(language => {
                    return (
                        <span className="flags">{countryCodeEmoji(language)}</span>
                    )
                })}</p>
            </div>
            <div className="shop">
                <h4>Dive Types:</h4>
                <p>{shop.dive_types?.map(type => {
                    return (
                        <span>{type}</span>
                    )
                })}</p>
            </div>
            <div className="shop">
                <h4>Location</h4>
                <Map latitude={shop.coordinates?.lat} longitude={shop.coordinates?.long}/>
            </div>
            <Contactform />
        </>
    )
}
