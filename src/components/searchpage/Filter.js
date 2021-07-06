import React from 'react';
import { useState } from 'react';
import LanguageFilter from './filters/LanguageFilter';
import DestinationFilter from './filters/DestinationFilter';

export default function Filter() {

    const [checked, setChecked] = useState([]);

    // TODO: hacer funcionar las checkbox y el boton clear all
    function clearAll() {
        console.log();
    }

    return (
        <aside className="filterbox">
            <h3>Filter By:</h3>
            <LanguageFilter checked={checked} setChecked={setChecked}/>
            <DestinationFilter />
            <button onClick={clearAll}>Clear all</button>
        </aside>
    )
}
