import React from 'react'

export default function Searchbar({setInput, setPage}) {

    function handleSearch(e){
        setPage("")
        if (e.target.value !== ""){
            setInput(`?term=${e.target.value}`)
        } else {
            setInput("")
        }
    }

    return (
        <div className="searchbar divebox">
            <label htmlFor="searchbar">What are you looking for?</label>
            <input onChange={(e)=>handleSearch(e)} type="text" id="searchbar" placeholder="Type away!" />
        </div>
    )
}
