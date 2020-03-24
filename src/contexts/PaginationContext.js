import React, { useState, createContext } from 'react';

export const PaginationContext = createContext();

function PaginationContextProvider(props) {

    const [booksPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentFavePage, setCurrentFavePage] = useState(1);
    const indexOfLastBooks = currentPage * booksPerPage;
    const indexOfFirstBooks = indexOfLastBooks - booksPerPage;
    const indexOfLastFaveBooks = currentFavePage * booksPerPage;
    const indexOfFirstFaveBooks = indexOfLastFaveBooks - booksPerPage;
    
    let setFavePagesNumber = (page) => {
        setCurrentFavePage(page);
    }
        
    let paginate = (page, pageLength) => {
        if(page === "Prev"){
            if(currentPage > 1){
                setCurrentPage(currentPage - 1);
            }
        }
        else if(page === "Next"){
            if(currentPage < pageLength){
                setCurrentPage(currentPage + 1);
            }
        }
        else{
            setCurrentPage(page);
        }
    }

    let paginateFaveList = (page, pageLength) => {
        if(page === "Prev"){
            if(currentFavePage > 1){
                setCurrentFavePage(currentFavePage - 1);
            }
        }
        else if(page === "Next"){
            if(currentFavePage < pageLength){
                setCurrentFavePage(currentFavePage + 1);
            }
        }
        else{
            setCurrentFavePage(page);
        }
    }

    return <PaginationContext.Provider value={{
            indexOfFirstFaveBooks,
            indexOfFirstBooks,
            indexOfLastFaveBooks,
            indexOfLastBooks,
            booksPerPage,
            currentFavePage,
            currentPage,
            paginateFaveList,
            paginate,
            setFavePagesNumber
        }}>
        {props.children}
    </PaginationContext.Provider>
}

export default PaginationContextProvider;