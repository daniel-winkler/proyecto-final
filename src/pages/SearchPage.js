import { useEffect, useState } from 'react'

export default function SearchPage() {

    const [search, setSearch] = useState({})

    const SEARCH_URL = "https://run.mocky.io/v3/366cee3e-c002-418f-8a6f-f6d9dbff9c89";

    useEffect(() => {
        fetch(SEARCH_URL)
        .then(r => r.json())
        .then(data => setSearch(data.results))
    }, [])

    return (
        <div>
            <p>Search Page</p>
            <p>{console.log(search)}</p>
        </div>
    )
}
