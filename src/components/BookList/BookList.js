import { PaginationContext } from '../../contexts/PaginationContext';
import { BookListContext } from '../../contexts/BookListContext';
import BookDetails from '../BookDetails/BookDetails';
import React, { useContext, useState } from 'react';
import Paginations from '../Pagination/Pagination';
import classes from './BookList.module.css';
import Loading from '../Loading/Loading';
import { Redirect } from 'react-router';

function BookList() {

    const [description, setDescription] = useState("");
    const { indexOfFirstBooks, indexOfLastBooks, booksPerPage } = useContext(PaginationContext);
    const { books, error, isLoading } = useContext(BookListContext);
    let currentBooks;
    let booksElemnt;

    if(description.length){
        return <Redirect to={{
            pathname: `/description`,
            description: description
        }}/>
    }

    if(books){
        currentBooks = books.slice(indexOfFirstBooks, indexOfLastBooks);
    }

    if(!isLoading){
        if(currentBooks){
            booksElemnt = currentBooks.map(book => {                
                return <BookDetails key={book.id} book={book} bookId={book.id} setDescription={setDescription} />
            });
        }
        else{        
            booksElemnt= <h1 className={classes.error}>{error}</h1>;
        }
    }
    else{
        return <Loading />
    }

    return <div>
        {books && books.length ? <div className={classes.pagination}>
            <Paginations booksPerPage={booksPerPage} totalBooks={books.length} from="BOOK_LIST" />
        </div> : null}
        <div className={classes.BookList}>
            {booksElemnt}
        </div>
    </div>
}

export default BookList;