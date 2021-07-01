import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { LOGIN_URL } from '../config';


export default function Login() {

    const history = useHistory();

    function handleRegister() {
        history.push("/register")
    }

    const formInitialState = {username: "", password: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    async function handleSubmit(e) {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(LOGIN_URL, options);
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="logincomponent">
            <div className="loginform divebox">
                <h3>Registered customers</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="userUsername">Username:</label>
                        <input onChange={handleInputChange} value={form.username} type="text" name="username" id="userUsername" required/>
                    </div>
                    <div>
                        <label htmlFor="userPassword">Password:</label>
                        <input onChange={handleInputChange} value={form.password} type="password" name="password" id="userPassword" required/>
                    </div>
                    <div>
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            </div>
            <div className="newaccount divebox">
                <h3>New customers</h3>
                <button onClick={handleRegister}>Create an account</button>
            </div>
        </div>
    )
}
