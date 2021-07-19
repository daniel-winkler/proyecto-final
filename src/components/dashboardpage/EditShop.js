import React from 'react'
import { useState } from 'react';
import { useForm } from '../../hooks/useForm'
import { UPDATE_URL, IMAGE_UPDATE_URL } from '../../config';
import Badges from '../postpage/Badges';
import Destinations from '../postpage/Destinations';
// import Images from "../postpage/Images"
import MapInput from "../postpage/MapInput"
import { useAuthContext } from '../../contexts/AuthContext';

export default function EditShop({shop}) {

    // TODO: recoger info del shop del usuario para ponerlos como initial state

    const { getToken, signOut, getAuthHeaders } = useAuthContext();

    const [badges, setBadges] = useState([])
    // const [images, setImages] = useState([]);

    const [destination, setDestination] = useState({})

    const initialCoords = {lat: 0, lng: 0};
    const [coords, setCoords] = useState(initialCoords)

    const formInitialState = {shopname: "", shoplocation: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    const [image, setImage] = useState("");
    const handleImageUpload = e => setImage(e.target.files[0]);

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

        if (response.status === 202){
            alert("Shop has been updated successfully!")
        } else if (response.status === 404) {
            alert("You can't update until you have posted your shop first!")
        } else if (response.status === 401){
            alert("Something happened. Please log in again.")
            signOut()
        }

        const formImage = new FormData();
        formImage.append("File", image);
        
        const optionsImage = {
            method: "POST",
            headers: getAuthHeaders(),
            body: formImage
        }

        const responseImage = await fetch(IMAGE_UPDATE_URL, optionsImage);
        // eslint-disable-next-line
        const dataImage = await responseImage;
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
                <div className="inputblock">
                    <input onChange={handleImageUpload} type="file" name="image" id="image" accept="image/png, image/jpeg, image/jpg" />
                </div>

                {/* <Images images={images} setImages={setImages} /> */}
                <MapInput coords={coords} setCoords={setCoords} />

                <button type="submit">Update your shop!</button>

            </form>
        </div>
    )
}
