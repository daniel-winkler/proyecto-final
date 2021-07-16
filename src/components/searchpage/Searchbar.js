import React from 'react'
import { useParamsContext } from '../../contexts/ParamsContext'

export default function Searchbar() {

    const { setInput, setPage } = useParamsContext();

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
