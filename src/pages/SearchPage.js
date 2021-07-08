import { useEffect, useState } from 'react';
import Card from '../components/searchpage/Card';
import { SHOPS_URL } from "../config";
import Filter from "../components/searchpage/Filter";
import Searchbar from '../components/searchpage/Searchbar';
import NothingFound from '../components/searchpage/NothingFound';
import Pagination from '../components/searchpage/Pagination';

export default function SearchPage() {

    const [search, setSearch] = useState([])
    const [input, setInput] = useState("")
    const [page, setPage] = useState("")

    useEffect(() => {
        fetch(SHOPS_URL + input + page)
        .then(r => r.json())
        .then(data => setSearch(data))
    }, [input, page])

    return (
        <div className="searchpage">
            <Filter />
            <div className="searchmain">
                <Searchbar setInput={setInput} setPage={setPage}/>
                {search.results?.length === 0 && <NothingFound/>}
                <Pagination totalPages={search.total_pages} input={input} setPage={setPage}/>
                <div className="cardgrid">
                    {search.results?.map(shop => {
                        return ( <Card key={shop.id} shop={shop} /> )
                    })}
                </div>
                <Pagination totalPages={search.total_pages} input={input} setPage={setPage}/>
            </div>
        </div>
    )
}
