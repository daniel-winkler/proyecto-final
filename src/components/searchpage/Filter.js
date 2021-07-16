import React from 'react';
import LanguageFilter from './filters/LanguageFilter';
import DestinationFilter from './filters/DestinationFilter';

export default function Filter({setDestination, setLanguage}) {

    return (
        <aside className="filterbox">
            <h3>Filter By:</h3>
            <LanguageFilter setLanguage={setLanguage}/>
            <DestinationFilter setDestination={setDestination}/>
            <button>Clear all</button>
        </aside>
    )
}
