import { useEffect, useState } from 'react';
import Card from '../components/searchpage/Card';
import { SHOPS_URL } from "../config";
import Filter from "../components/searchpage/Filter";
import Searchbar from '../components/searchpage/Searchbar';

export default function SearchPage() {

    const [search, setSearch] = useState([])
    const [input, setInput] = useState("")

    useEffect(() => {
        fetch(SHOPS_URL + input)
        .then(r => r.json())
        .then(data => setSearch(data))
    }, [input])

    return (
        <div className="searchpage backgroundimg">
            <Filter />
            <div className="searchmain">
                <Searchbar setInput={setInput} />
                <div className="cardgrid">
                    {search.map(shop => {
                        return ( <Card key={shop.id} shop={shop} /> )
                    })}
                </div>
            </div>
        </div>
    )
}
