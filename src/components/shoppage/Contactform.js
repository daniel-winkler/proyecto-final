import React from 'react'

export default function Contactform() {
    return (
        <div className="shop">
                <h4>Contact the shop</h4>
                <form action="#" method="POST">
                    <label htmlFor="contactName">Name:</label>
                    <input type="text" name="contactName" id="contactName" required/>
                    <label htmlFor="contactEmail">Email:</label>
                    <input type="email" name="contactEmail" id="contactEmail" required/>
                    <label htmlFor="contactMessage">Message:</label>
                    <textarea name="contactEmail" id="contactMessage"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
    )
}
