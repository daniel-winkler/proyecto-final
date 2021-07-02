import React from 'react';
import LanguageFilter from './filters/LanguageFilter';
import DestinationFilter from './filters/DestinationFilter';

export default function Filter() {

    // TODO: corregir que la filterbox se expanda hasta el footer
    return (
        <aside className="filterbox">
            <h3>Filter By:</h3>
            <LanguageFilter />
            <DestinationFilter />
        </aside>
    )
}
