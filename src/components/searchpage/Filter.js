import React from 'react';
import LanguageFilter from './filters/LanguageFilter';
import DestinationFilter from './filters/DestinationFilter';
import { useParamsContext } from '../../contexts/ParamsContext';

export default function Filter() {

    const { setDestination, setInput, setLanguage, setPage } = useParamsContext();

    function handleClear(){
        setPage("")
        setLanguage("")
        setInput("")
        setDestination("")
    }

    return (
        <aside className="filterbox">
            <h3>Filter By:</h3>
            <LanguageFilter/>
            <DestinationFilter/>
            <button onClick={()=>handleClear()}>Clear all</button>
        </aside>
    )
}
