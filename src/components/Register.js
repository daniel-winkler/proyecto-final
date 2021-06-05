import React from 'react'

export default function Register() {
    return (
        <div className="registercomponent">
            <form action="#" method="POST" className="registerform">

                <h4>Register for a new account</h4>
                
                <label htmlFor="newFirstName">First Name:</label>
                <input type="text" name="newFirstName" id="newFirstName" required/>

                <label htmlFor="newLastName">Last Name:</label>
                <input type="text" name="newLastName" id="newLastName" required/>

                <label htmlFor="newUsername">Username:</label>
                <input type="text" name="newUsername" id="newUsername" required/>

                <label htmlFor="newEmail">Email:</label>
                <input type="email" name="newEmail" id="newEmail" required/>

                <label htmlFor="newBirthday">Date of birth:</label>
                <input type="date" name="newBirthday" id="newBirthday" required/>

                <label htmlFor="newPassword">Password:</label>
                <input type="password" name="newPassword" id="newPassword" required/>

                <label htmlFor="newAccountType">Account Type:</label>
                <select name="newAccountType" id="newAccountType" required>
                    <option value="" hidden></option>
                    <option value="user" name="newUser">User</option>
                    <option value="shop" name="newShop">Shop</option>
                </select>

                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}