import React from 'react';
import ReactPaginate from 'react-paginate'; // https://github.com/AdeleD/react-paginate
// import { useState } from 'react';

export default function Pagination({totalPages, input, setPage}) {

    // const [activePage, setActivePage] = useState(1);

    function handlePageClick(e){
        let currentPage = e.selected + 1;
        if (input === ""){
            setPage(`?page=${currentPage}`)
        } else {
            setPage(`&page=${currentPage}`)
        }
    }

    // TODO: sincronizar ambos paginadores

    return (
        <>
            <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(e)=>handlePageClick(e)}
            containerClassName={'pagination'}
            activeClassName={'active'}
            />
      </>
    )
}
