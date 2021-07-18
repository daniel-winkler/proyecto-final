import React from 'react'
import { useState } from 'react';
import { useForm } from '../../hooks/useForm'
import { POST_URL, IMAGE_UPLOAD_URL } from '../../config';
import Badges from './Badges';
import Destinations from './Destinations';
// import Images from "./Images"
import MapInput from "./MapInput"
import { useAuthContext } from '../../contexts/AuthContext';

export default function Post() {

    const { getToken, signOut, getAuthHeaders } = useAuthContext();

    const [badges, setBadges] = useState([])

    const [destination, setDestination] = useState({})

    const initialCoords = {lat: 36.72043887896444, lng: -4.372293729292253};
    const [coords, setCoords] = useState(initialCoords)

    const formInitialState = {shopname: "", shoplocation: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    const [image, setImage] = useState("");
    const handleImageUpload = e => setImage(e.target.files[0]);

    async function handleSubmit(e){
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
            body: JSON.stringify({...form, badges, destination, coords})
        }

        const response = await fetch(POST_URL, options);
        // eslint-disable-next-line
        const data = await response.json();

        if (response.status === 201){
            alert("Shop has been posted successfully!")
        } else if (response.status === 403){
            alert("Error: you already posted a shop! Go to your dashboard to edit it")
        } else if(response.status === 401) {
            alert("Error: Couldn't post shop, your session has expired. Please log in again!")
            signOut()
        }

        const formImage = new FormData();
        formImage.append("File", image);
        
        const optionsImage = {
            method: "POST",
            headers: getAuthHeaders(),
            body: formImage
        }

        const responseImage = await fetch(IMAGE_UPLOAD_URL + data.id, optionsImage);
        // eslint-disable-next-line
        const dataImage = await responseImage;
    }
        
    //SOLUCIONES
    //https://www.npmjs.com/package/react-images-uploading
    // https://medium.com/swlh/integrating-an-image-upload-system-into-a-react-app-with-node-js-express-js-and-multer-d5ab5c4d1da8

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST" className="postform divebox">
                <h4>Post you shop here!</h4>
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

                <button type="submit">Submit your shop!</button>

            </form>
        </div>
    )
}
