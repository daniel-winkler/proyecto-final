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
            <form onSubmit={handleSubmit} className="registerform">

                <h4>Register for a new account</h4>
                
                {/* <label htmlFor="newFirstName">First Name:</label>
                <input type="text" name="newFirstName" id="newFirstName" required/>

                <label htmlFor="newLastName">Last Name:</label>
                <input type="text" name="newLastName" id="newLastName" required/> */}

                <label htmlFor="newUsername">Username:</label>
                <input onChange={handleInputChange} value={form.newUsername} type="text" name="newUsername" id="newUsername" required/>

                <label htmlFor="newEmail">Email:</label>
                <input onChange={handleInputChange} value={form.newEmail} type="email" name="newEmail" id="newEmail" required/>

                {/* <label htmlFor="newBirthday">Date of birth:</label>
                <input type="date" name="newBirthday" id="newBirthday" required/> */}

                <label htmlFor="newPassword">Password:</label>
                <input onChange={handleInputChange} value={form.newPassword} type="password" name="newPassword" id="newPassword" required/>

                {/* <label htmlFor="newAccountType">Account Type:</label>
                <select name="newAccountType" id="newAccountType" required>
                    <option value="" hidden></option>
                    <option value="user" name="newUser">User</option>
                    <option value="shop" name="newShop">Shop</option>
                </select> */}

                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
