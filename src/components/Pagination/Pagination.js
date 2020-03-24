import { PaginationContext } from '../../contexts/PaginationContext';
import { Pagination } from 'react-bootstrap';
import React, { useContext, useEffect } from 'react';

function Paginations({ booksPerPage, totalBooks, from }) {

    const { paginate, paginateFaveList, currentPage, currentFavePage, setFavePagesNumber } = useContext(PaginationContext);
    const pageNumber = [];
        
    for (let idx = 1; idx <= Math.ceil(totalBooks / booksPerPage); idx++) {
        pageNumber.push(idx);
    }

    let paginationElement;
    if(from === "BOOK_LIST"){
        paginationElement = <Pagination>
            <Pagination.Prev onClick={() => paginate("Prev", pageNumber.length)} />
            {pageNumber.map(number => {
                return currentPage === number ? 
                <Pagination.Item active key={number} onClick={() => paginate(number)}>{number}</Pagination.Item> :
                <Pagination.Item key={number} onClick={() => paginate(number)}>{number}</Pagination.Item>
            })}
            <Pagination.Next onClick={() => paginate("Next", pageNumber.length)} />
        </Pagination>
    }
    else if(from === "FAVORITE_LIST"){
        paginationElement = <Pagination>
            <Pagination.Prev onClick={() => paginateFaveList("Prev", pageNumber.length)} />
            {pageNumber.map(number => {
                return currentFavePage === number ? 
                <Pagination.Item active key={number} onClick={() => paginateFaveList(number)}>{number}</Pagination.Item> :
                <Pagination.Item key={number} onClick={() => paginateFaveList(number)}>{number}</Pagination.Item>
            })}
            <Pagination.Next onClick={() => paginateFaveList("Next", pageNumber.length)} />
        </Pagination>
    }

    useEffect(() => {      
        let page = Math.ceil(totalBooks / booksPerPage);
        if(currentFavePage > 1){
            setFavePagesNumber(page);
        }
        // eslint-disable-next-line
    }, [totalBooks]);

    return paginationElement;
}

export default Paginations;