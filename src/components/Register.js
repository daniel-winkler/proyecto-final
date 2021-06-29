import React from 'react'
import { useForm } from '../hooks/useForm'
import { REGISTER_URL } from '../config'

export default function Register() {

    const formInitialState = {newUsername: "", newEmail: "", newPassword: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    async function handleSubmit(e){
        e.preventDefault();

        console.log(form);

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(REGISTER_URL, options);
        const data = await response.json();
        console.log(data);
    }


    return (
        <div className="registercomponent">
            <form onSubmit={handleSubmit} className="registerform diveform">

                <h4>Register for a new account</h4>

                <label htmlFor="newUsername">Username:</label>
                <input onChange={handleInputChange} value={form.newUsername} type="text" name="newUsername" id="newUsername" required/>

                <label htmlFor="newEmail">Email:</label>
                <input onChange={handleInputChange} value={form.newEmail} type="email" name="newEmail" id="newEmail" required/>

                <label htmlFor="newPassword">Password:</label>
                <input onChange={handleInputChange} value={form.newPassword} type="password" name="newPassword" id="newPassword" required/>

                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
