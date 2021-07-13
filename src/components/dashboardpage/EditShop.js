import React from 'react'
import { useState } from 'react';
import { useForm } from '../../hooks/useForm'
import { UPDATE_URL } from '../../config';
import Badges from '../postpage/Badges';
import Destinations from '../postpage/Destinations';
import Images from "../postpage/Images"
import MapInput from "../postpage/MapInput"
import { useAuthContext } from '../../contexts/AuthContext';

export default function EditShop({shop}) {

    // TODO: recoger info del shop del usuario para ponerlos como initial state

    const { getToken } = useAuthContext();

    const [badges, setBadges] = useState([])
    const [images, setImages] = useState([]);

    const [destination, setDestination] = useState({})

    const initialCoords = {lat: 0, lng: 0};
    const [coords, setCoords] = useState(initialCoords)

    const formInitialState = {shopname: "", shoplocation: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    async function handleSubmit(e){
        e.preventDefault();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`
                },
            body: JSON.stringify({...form, badges, destination, coords})
        }

        const response = await fetch(UPDATE_URL, options);
        // eslint-disable-next-line
        const data = await response.json();

        if (response.status === 200){
            alert("Shop has been updated successfully!")
        } else if (response.status === 404) {
            alert("You can't update until you have posted your shop first!")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} method="PUT" className="postform divebox">
                <div className="inputblock">
                    <label htmlFor="shopname">Name:</label>
                    <input onChange={handleInputChange} value={form.shopname} type="text" name="shopname" id="shopname" required/>
                </div>
                <div className="inputblock">
                    <label htmlFor="shoplocation">Location:</label>
                    <input onChange={handleInputChange} value={form.shoplocation} type="text" name="shoplocation" id="shoplocation" required/>
                    <Destinations setDestination={setDestination} />
                </div>
                <div className="inputblock">
                    <Badges badges={badges} setBadges={setBadges} />
                </div>
                {/* <div className="inputblock">
                    <input onChange={(e)=>getFiles(e)} type="file" name="pictures" accept="image/png, image/jpeg, image/jpg" />
                </div> */}

                <Images images={images} setImages={setImages} />
                <MapInput coords={coords} setCoords={setCoords} />

                <button type="submit">Update your shop!</button>

            </form>
        </div>
    )
}
