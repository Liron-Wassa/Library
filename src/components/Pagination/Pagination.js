import { PaginationContext } from '../../contexts/PaginationContext';
import { Pagination } from 'react-bootstrap';
import React, { useContext, useEffect } from 'react';

function Paginations({ booksPerPage, totalBooks }) {

    const { paginate, currentPage, setPagesNumber } = useContext(PaginationContext);
    const pageNumber = [];
    
    for (let idx = 1; idx <= Math.ceil(totalBooks / booksPerPage); idx++) {
        pageNumber.push(idx);
    }

    useEffect(() => {        
        if(currentPage === 2){
            setPagesNumber();
        }
        // eslint-disable-next-line
    }, [totalBooks]);

    return <Pagination>
        <Pagination.Prev onClick={() => paginate("Prev", pageNumber.length)} />
        {pageNumber.map((number, index) => {
            return currentPage === number ? 
            <Pagination.Item active key={number} onClick={() => paginate(number)}>{number}</Pagination.Item> :
            <Pagination.Item key={number} onClick={() => paginate(number)}>{number}</Pagination.Item>
        })}
        <Pagination.Next onClick={() => paginate("Next", pageNumber.length)} />
    </Pagination>
}

export default Paginations;