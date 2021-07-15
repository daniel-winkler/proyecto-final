import { useEffect, useState } from 'react';
import Card from '../components/searchpage/Card';
import { SHOPS_URL } from "../config";
import Filter from "../components/searchpage/Filter";
import Searchbar from '../components/searchpage/Searchbar';
import NothingFound from '../components/searchpage/NothingFound';
import Pagination from '../components/searchpage/Pagination';
import GoUp from '../components/searchpage/GoUp';

export default function SearchPage() {

    const [search, setSearch] = useState([])
    const [input, setInput] = useState("")
    const [page, setPage] = useState("")
    const [destination, setDestination] = useState("")

    useEffect(() => {
        fetch(SHOPS_URL + destination + input + page)
        .then(r => r.json())
        .then(data => setSearch(data))
    }, [destination, input, page])
    

    return (
        <div className="searchpage">
            <Filter setDestination={setDestination}/>
            <div className="searchmain">
                <Searchbar setInput={setInput} setPage={setPage}/>
                {search.results?.length === 0 && <NothingFound/>}
                {search.results?.length !== 0 && <Pagination totalPages={search.total_pages} input={input} setPage={setPage}/>}
                <div className="cardgrid">
                    {search.results?.map(shop => {
                        return ( <Card key={shop.id} shop={shop} /> )
                    })}
                </div>
                <GoUp />
            </div>
        </div>
    )
}
