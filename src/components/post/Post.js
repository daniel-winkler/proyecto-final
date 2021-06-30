import React from 'react'
import { useState } from 'react';
import { useForm } from '../../hooks/useForm'
import { POST_URL } from '../../config';
import Badges from './Badges';
import Destinations from './Destinations';

export default function Post() {

    let [badges, setBadges] = useState([])

    const [destination, setDestination] = useState({})

    const formInitialState = {shopname: "", shoplocation: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    async function handleSubmit(e){
        e.preventDefault();
        console.log({...form, badges, destination});

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({...form, badges, destination})
        }

        const response = await fetch(POST_URL, options);
        const data = await response.json();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST" className="postform diveform">
                <h4>Post you shop here!</h4>
                <label htmlFor="shopname">Name:</label>
                <input onChange={handleInputChange} value={form.shopname} type="text" name="shopname" id="shopname" required/>
                <label htmlFor="shoplocation">Location:</label>
                <input onChange={handleInputChange} value={form.shoplocation} type="text" name="shoplocation" id="shoplocation" required/>
                
                <Destinations setDestination={setDestination} />
                <Badges badges={badges} setBadges={setBadges} />

                {/* TODO: Google Maps clickable que recoja coordenadas */}
                {/* https://stackoverflow.com/questions/58869132/react-select-multi-select-custom-way-to-display-multiple-options */}

                <button type="submit">Submit your shop!</button>

            </form>
        </div>
    )
}
