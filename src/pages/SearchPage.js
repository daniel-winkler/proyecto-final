import { useEffect, useState } from 'react';
import Card from '../components/searchpage/Card';
import { SHOPS_URL } from "../config";
import Filter from "../components/searchpage/Filter";
import Searchbar from '../components/searchpage/Searchbar';

export default function SearchPage() {

    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(SHOPS_URL)
        .then(r => r.json())
        .then(data => setSearch(data))
    }, [])

    return (
        <div className="searchpage backgroundimg">
            <Filter />
            <div className="searchmain">
                <Searchbar />
                <div className="cardgrid">
                    {search.map(shop => {
                        return ( <Card key={shop.id} shop={shop} /> )
                    })}
                </div>
            </div>
        </div>
    )
}
