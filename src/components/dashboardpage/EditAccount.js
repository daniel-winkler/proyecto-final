import React from 'react'
import { useForm } from '../../hooks/useForm'
import { ACCOUNT_URL } from '../../config'
import { useAuthContext } from '../../contexts/AuthContext';

export default function EditAccount({user}) {

    // TODO: recoger info del usuario para ponerlos como initial state

    const { getToken, signOut } = useAuthContext();

    const formInitialState = {username: "", email: "", password: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    async function handleSubmit(e){
        e.preventDefault();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`
                },
            body: JSON.stringify(form)
        }

        const response = await fetch(ACCOUNT_URL, options);
        // eslint-disable-next-line
        const data = await response.json();

        if(response.status === 202){
            alert("Account updated successfully! Please log in again with your new credentials.")
            signOut()
        } else {
            alert("Whoops, something wrong happened. Try again later.")
        }
    }


    return (
        <div className="registercomponent">
            <form onSubmit={handleSubmit} className="registerform divebox">

                <label htmlFor="username">Username:</label>
                <input onChange={handleInputChange} value={form.username} type="text" name="username" id="username" required/>

                <label htmlFor="email">Email:</label>
                <input onChange={handleInputChange} value={form.email} type="email" name="email" id="email" required/>

                <label htmlFor="password">Password:</label>
                <input onChange={handleInputChange} value={form.password} type="password" name="password" id="password" required/>

                <button type="submit">Update your account!</button>
            </form>
            
        </div>
    )
}
