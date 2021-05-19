import React from 'react'

export default function Login() {
    return (
        <>
            <div>
                <p>Registered customers</p>
                <form action="#" method="GET">
                    <label htmlFor="userEmail">Email:</label>
                    <input type="email" name="userEmail" id="userEmail" required/>
                    <label htmlFor="userPassword">Password:</label>
                    <input type="password" name="userPassword" id="userPassword" required/>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div>
                <p>New customers</p>
                <button>Create an account</button>
            </div>
        </>
    )
}
