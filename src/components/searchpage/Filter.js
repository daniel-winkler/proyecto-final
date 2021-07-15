import React from 'react';
import LanguageFilter from './filters/LanguageFilter';
import DestinationFilter from './filters/DestinationFilter';

export default function Filter({setDestination}) {

    return (
        <aside className="filterbox">
            <h3>Filter By:</h3>
            <LanguageFilter/>
            <DestinationFilter setDestination={setDestination}/>
            <button>Clear all</button>
        </aside>
    )
}
