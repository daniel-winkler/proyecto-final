import { useEffect, useState } from 'react';
import Card from './Card';
import { SHOPS_URL } from "../../config";
import Filter from "./Filter";
import Searchbar from './Searchbar';
import NothingFound from './NothingFound';
import Pagination from './Pagination';
import GoUp from './GoUp';
import { useParamsContext } from '../../contexts/ParamsContext';

export default function Search() {

    const { input,
        setInput,
        page,
        setPage,
        destination,
        setDestination,
        language,
        setLanguage } = useParamsContext();

    const [search, setSearch] = useState([])
    
    useEffect(() => {
        fetch(SHOPS_URL + destination + language + input + page)
        .then(r => r.json())
        .then(data => setSearch(data))
    }, [destination, language, input, page])
    

    return (
        <div className="searchpage">
            <Filter setDestination={setDestination} setLanguage={setLanguage}/>
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
