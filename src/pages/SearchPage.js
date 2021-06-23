import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { ROOT_URL } from "../config";

export default function SearchPage() {

    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(ROOT_URL + "/shops")
        .then(r => r.json())
        .then(data => setSearch(data))
    }, [])

    return (
        <div>
            {search.map(shop => {
                return ( <Card shop={shop} /> )
            })}
        </div>
    )
}
