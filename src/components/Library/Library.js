import SearchBook from '../../components/SearchBook/SearchBook';
import BookList from '../../components/BookList/BookList';
import classes from './Library.module.css';
import React from 'react';

function Library() {
    return <div>
        <h1 className={classes.header}>Library</h1>
        <SearchBook />
        <BookList />
    </div>
}

export default Library;