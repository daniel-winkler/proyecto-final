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
            body: JSON.stringify({...form, shopID: id}) // añadimos el id para que el endpoint encuentre el usuario correspondiente
        }

        const response = await fetch(MAILER_URL, options);
        // eslint-disable-next-line
        const data = await response.json();

        if (response.status === 202){
            alert("Message has been sent successfully!")
        } else if (response.status === 404){
            alert("User or user email not found.")
        }
    }

    return (
        <div className="shop">
                <h4>Contact the shop</h4>
                <form onSubmit={handleSubmit}>
                    <div className="inputblock">
                        <label htmlFor="contactName">Name:</label>
                        <input onChange={handleInputChange} value={form.name} type="text" name="name" id="contactName" required/>
                    </div>
                    <div className="inputblock">
                        <label htmlFor="contactEmail">Email:</label>
                        <input onChange={handleInputChange} value={form.email} type="email" name="email" id="contactEmail" required/>
                    </div>
                    <div className="inputblock">
                        <label htmlFor="contactMessage">Message:</label>
                        <textarea onChange={handleInputChange} value={form.message} name="message" id="contactMessage" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
    )
}
