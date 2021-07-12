import React from 'react'
import { useState } from 'react';
import { useForm } from '../../hooks/useForm'
import { POST_URL } from '../../config';
import Badges from './Badges';
import Destinations from './Destinations';
import Images from "./Images"
import MapInput from "./MapInput"
import { useAuthContext } from '../../contexts/AuthContext';

export default function Post() {

    const { getToken } = useAuthContext();

    const [badges, setBadges] = useState([])
    const [images, setImages] = useState([]);

    const [destination, setDestination] = useState({})

    const initialCoords = {lat: 36.72043887896444, lng: -4.372293729292253};
    const [coords, setCoords] = useState(initialCoords)

    const formInitialState = {shopname: "", shoplocation: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    async function handleSubmit(e){
        e.preventDefault();
        console.log({...form, badges, destination, coords});

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
        } else if(response.status === 401) { // TODO: token nexpirado no me expulsa de la sesion
            alert("Error: Couldn't post shop, your session has expired. Please log in again!")
        }
    }

    // const getFiles = e => {
    //     setImages(e.target.files[0])
    //     console.log(images);
    // }
        
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
                {/* <div className="inputblock">
                    <input onChange={(e)=>getFiles(e)} type="file" name="pictures" accept="image/png, image/jpeg, image/jpg" />
                </div> */}

                <Images images={images} setImages={setImages} />
                <MapInput coords={coords} setCoords={setCoords} />

                <button type="submit">Submit your shop!</button>

            </form>
        </div>
    )
}
