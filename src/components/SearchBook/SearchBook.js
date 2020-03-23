import React, { useContext, useRef } from 'react';
import { BookListContext } from '../../contexts/BookListContext';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function SearchBook() {

    const { findBooks } = useContext(BookListContext);
    const inputElementRef = useRef(null);
    let book = "";

    let changeInputHandler = (e) => {
        book = e.target.value;
    }

    let searchBook = () => {
        let histories = JSON.parse(localStorage.getItem("history")) || [];
        if(isNaN(book)){
            findBooks(book);
            histories.push({search: book, date: new Date().toLocaleDateString()});
            localStorage.setItem("history", JSON.stringify(histories));
            inputElementRef.current.value = "";
            book = "";
        }
        else{
            alert("Enter a book!!!");
        }
    }

    return <InputGroup className="mb-3 container">
        <InputGroup.Prepend>
            <Button variant="dark" onClick={searchBook}>Search</Button>
        </InputGroup.Prepend>
        <FormControl
            onChange={changeInputHandler}
            placeholder="Book"
            ref={inputElementRef}
        />
    </InputGroup>
}

export default SearchBook;