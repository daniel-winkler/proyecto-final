import React from 'react';
import ReactPaginate from 'react-paginate'; // https://github.com/AdeleD/react-paginate
import { useParamsContext } from '../../contexts/ParamsContext';

export default function Pagination({totalPages}) {

    const { setPage, input, destination, language } = useParamsContext();

    function handlePageClick(e){
        let currentPage = e.selected + 1;
        if (input === "" && destination === "" && language === ""){
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
            key={input} //añadiendo el estado input como key, nos actualiza el componente reseteando el numero de pagina activa igual a 1.
            />
      </>
    )
}
