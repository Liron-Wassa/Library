import React, { useState, createContext } from 'react';

export const PaginationContext = createContext();

function PaginationContextProvider(props) {

    const [booksPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastBooks = currentPage * booksPerPage;
    const indexOfFirstBooks = indexOfLastBooks - booksPerPage;
    
    let setPagesNumber = () => {
        setCurrentPage(currentPage - 1);
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

    return <PaginationContext.Provider value={{
            indexOfFirstBooks,
            indexOfLastBooks,
            booksPerPage,
            currentPage,
            paginate,
            setPagesNumber
        }}>
        {props.children}
    </PaginationContext.Provider>
}

export default PaginationContextProvider;