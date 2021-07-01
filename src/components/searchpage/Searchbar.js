import React from 'react'

export default function Searchbar() {
    return (
        <div className="searchbar divebox">
            <label htmlFor="searchbar">What are you looking for?</label>
            <input type="text" id="searchbar" />
        </div>
    )
}
