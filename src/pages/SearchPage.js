import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { SEARCH_URL } from "../config";

export default function SearchPage() {

    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(SEARCH_URL)
        .then(r => r.json())
        .then(data => setSearch(data.results))
    }, [])

    return (
        <div>
            {search.map(shop => {
                return (
                    <Card shop={shop} />
                )
            })}
        </div>
    )
}
