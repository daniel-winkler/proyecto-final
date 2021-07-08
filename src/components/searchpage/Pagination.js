import React from 'react';
import ReactPaginate from 'react-paginate'; // https://github.com/AdeleD/react-paginate

export default function Pagination({totalPages, input, setPage}) {

    function handlePageClick(e){
        let currentPage = e.selected + 1;
        if (input === ""){
            setPage(`?page=${currentPage}`)
        } else {
            setPage(`&page=${currentPage}`)
        }
    }

    return (
        <>
            <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={(e)=>handlePageClick(e)}
            containerClassName={'pagination'}
            activeClassName={'active'}
            />
      </>
    )
}
