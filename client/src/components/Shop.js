import { useEffect, useState } from 'react'
import Map from './Map';

export default function Shop() {

    const [shop, setShop] = useState([])

    const SHOP_URL = "https://run.mocky.io/v3/5cc0f585-70bb-4172-bfcf-763593f2d30c";

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
                        <span>{language}</span>
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
            <div className="shop">
                <h4>Contact the shop</h4>
                <form action="#" method="POST">
                    <label htmlFor="contactName">Name:</label>
                    <input type="text" name="contactName" id="contactName" required/>
                    <label htmlFor="contactEmail">Email:</label>
                    <input type="email" name="contactEmail" id="contactEmail" required/>
                    <label htmlFor="contactMessage">Message:</label>
                    <textarea name="contactEmail" id="contactMessage"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    )
}
