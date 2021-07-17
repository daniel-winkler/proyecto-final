import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { LOGIN_URL } from '../config';
import { useAuthContext } from '../contexts/AuthContext';


export default function Login() {

    const { signIn } = useAuthContext();

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

        if(response.status === 200){
            signIn(data.token) // TODO: data solo recibe info de token, segundo argumento de la funcion sigIn eliminada
            alert("You are logged in!")
        } else {
            alert("Invalid credentials")
        }
    }

    return (
        <div className="logincomponent d-flex">
            <div className="loginform divebox">
                <h3>Registered users</h3>
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
                <h3>New users</h3>
                <button onClick={handleRegister}>Create an account</button>
            </div>
        </div>
    )
}
