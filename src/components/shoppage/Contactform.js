import React from 'react'
import { useForm } from '../../hooks/useForm';
import { MAILER_URL } from '../../config';

export default function Contactform({id}) {

    const formInitialState = {name: "", email: "", message: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    async function handleSubmit(e){
        e.preventDefault();
        
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...form, shopID: id})
        }

        const response = await fetch(MAILER_URL, options);
        // eslint-disable-next-line
        const data = await response.json();

        if (response.status === 202){
            alert("Message has been sent successfully!")
        } else if (response.status === 500){
            alert("Something wrong happened.. please try again later")
        }
    }

    return (
        <div className="shop">
                <h4>Contact the shop</h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="contactName">Name:</label>
                    <input onChange={handleInputChange} value={form.name} type="text" name="name" id="contactName" required/>
                    <label htmlFor="contactEmail">Email:</label>
                    <input onChange={handleInputChange} value={form.email} type="email" name="email" id="contactEmail" required/>
                    <label htmlFor="contactMessage">Message:</label>
                    <textarea onChange={handleInputChange} value={form.message} name="message" id="contactMessage"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
    )
}
