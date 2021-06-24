import React from 'react'

export default function Filter() {
    return (
        <aside className="filterbox">
            <h3>Filter By:</h3>
            <h4>Destination</h4>
            <div className="checkboxblock">
                <input type="checkbox" name="" id="destination1" /><label htmlFor="destination1">South East Asia</label>
            </div>
            <div className="checkboxblock">
                <input type="checkbox" name="" id="destination2" /><label htmlFor="destination2">Caribbeans</label>
            </div>
            <div className="checkboxblock">
                <input type="checkbox" name="" id="destination3" /><label htmlFor="destination3">Central America</label>
            </div>
            <div className="checkboxblock">
                <input type="checkbox" name="" id="destination4" /><label htmlFor="destination4">Oceania</label>
            </div>
        </aside>
    )
}
