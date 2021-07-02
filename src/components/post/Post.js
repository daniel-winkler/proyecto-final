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

                {/* TODO: Google Maps clickable que recoja coordenadas */}

                <button type="submit">Submit your shop!</button>

            </form>
        </div>
    )
}
