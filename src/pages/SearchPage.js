import { useEffect, useState } from 'react';
import Card from '../components/searchpage/Card';
import { SHOPS_URL } from "../config";
import Filter from "../components/searchpage/Filter";

export default function SearchPage() {

    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(SHOPS_URL)
        .then(r => r.json())
        .then(data => setSearch(data))
    }, [])

    return (
        <div className="searchpage">
            <Filter />
            <div className="cardgrid">
                {search.map(shop => {
                    return ( <Card key={shop.id} shop={shop} /> )
                })}
            </div>
        </div>
    )
}
