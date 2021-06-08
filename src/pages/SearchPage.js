import { useEffect, useState } from 'react'

export default function SearchPage() {

    const [search, setSearch] = useState([])

    const SEARCH_URL = "https://9f83c9ab-7ee6-4bbd-879d-36f5754b7816.mock.pstmn.io/"; // https://run.mocky.io/v3/366cee3e-c002-418f-8a6f-f6d9dbff9c89

    useEffect(() => {
        fetch(SEARCH_URL)
        .then(r => r.json())
        .then(data => setSearch(data.results))
    }, [])

    return (
        <div>
            <p>Search Page</p>
            <ul>{search.map(shop => {
                return (
                    <li>{shop.name}</li>
                )
            })}</ul>
        </div>
    )
}
