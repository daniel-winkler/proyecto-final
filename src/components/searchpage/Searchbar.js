import React from 'react'
import { useParamsContext } from '../../contexts/ParamsContext'

export default function Searchbar() {

    const { setInput, setPage, setDestination, setLanguage } = useParamsContext();

    function handleSearch(e){
        setPage("")
        setDestination("")
        setLanguage("")
        if (e.target.value !== ""){
            setInput(`?term=${e.target.value}`)
        } else {
            setInput("")
        }
    }

    return (
        <div className="searchbar divebox d-flex">
            <label htmlFor="searchbar">What are you looking for?</label>
            <input onChange={(e)=>handleSearch(e)} type="text" id="searchbar" placeholder="Type away!" />
        </div>
    )
}
