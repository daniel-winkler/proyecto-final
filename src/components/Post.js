import React from 'react'
import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm'
import { POST_URL, LANGUAGES_URL } from '../config';

export default function Post() {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch(LANGUAGES_URL)
        .then(r => r.json())
        .then(data => setLanguages(data))
    }, [])

    const formInitialState = {shopname: "", shoplocation: "", shoplanguages: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    async function handleSubmit(e){
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(POST_URL, options);
        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST" className="postform diveform">
                <h4>Post you shop here!</h4>
                <label htmlFor="shopname">Name:</label>
                <input onChange={handleInputChange} value={form.shopname} type="text" name="shopname" id="shopname" required/>
                <label htmlFor="shoplocation">Location:</label>
                <input onChange={handleInputChange} value={form.shoplocation} type="text" name="shoplocation" id="shoplocation" required/>
                <label htmlFor="shoplanguage">Spoken languages:</label>
                {/* <input onChange={handleInputChange} value={form.shoplanguage} type="text" name="shoplanguage" id="shoplanguage" required/> */}
                <select onChange={handleInputChange} name="shoplanguages" id="shoplanguage">
                    <option value="" hidden></option>
                    {languages.map(language => {
                        return(
                            <option key={language.id} value={language.countrycode}>{language.name}</option>
                        )
                    })}
                </select>

                <button type="submit">Submit your shop!</button>

            </form>
        </div>
    )
}
