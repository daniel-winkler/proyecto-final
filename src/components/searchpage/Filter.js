import React from 'react';
import LanguageFilter from './filters/LanguageFilter';
import DestinationFilter from './filters/DestinationFilter';

export default function Filter({setFilter}) {

    return (
        <aside className="filterbox">
            <h3>Filter By:</h3>
            <LanguageFilter setFilter={setFilter}/>
            <DestinationFilter />
            <button>Clear all</button>
        </aside>
    )
}
