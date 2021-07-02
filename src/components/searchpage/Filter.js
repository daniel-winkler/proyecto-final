import React from 'react';
import LanguageFilter from './filters/LanguageFilter';
import DestinationFilter from './filters/DestinationFilter';

export default function Filter() {

    return (
        <aside className="filterbox">
            <h3>Filter By:</h3>
            <LanguageFilter />
            <DestinationFilter />
            <button>Clear all</button>
        </aside>
    )
}
