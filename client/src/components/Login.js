import React from 'react'
import { useHistory } from "react-router-dom";


export default function Login() {

    const history = useHistory();

    function handleRegister() {
        history.push("/register")
    }

    return (
        <div className="logincomponent">
            <div className="loginform">
                <h3>Registered customers</h3>
                <form action="#" method="GET">
                    <div>
                        <label htmlFor="userEmail">Email:</label>
                        <input type="email" name="userEmail" id="userEmail" required/>
                    </div>
                    <div>
                        <label htmlFor="userPassword">Password:</label>
                        <input type="password" name="userPassword" id="userPassword" required/>
                    </div>
                    <div>
                        <button className="button" type="submit">Sign In</button>
                    </div>
                </form>
            </div>
            <div className="newaccount">
                <h3>New customers</h3>
                <button className="button" onClick={handleRegister}>Create an account</button>
            </div>
        </div>
    )
}
