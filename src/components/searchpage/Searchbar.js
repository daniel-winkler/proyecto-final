import React from 'react'

export default function Searchbar({setInput}) {

    function handleSearch(e){
        setInput(e.target.value)
    }

    return (
        <div className="searchbar divebox">
            <label htmlFor="searchbar">What are you looking for?</label>
            <input onChange={(e)=>handleSearch(e)} type="text" id="searchbar" />
        </div>
    )
}
