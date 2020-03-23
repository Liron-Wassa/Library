import { PaginationContext } from '../../contexts/PaginationContext';
import { BookListContext } from '../../contexts/BookListContext';
import BookDetails from '../BookDetails/BookDetails';
import Paginations from '../Pagination/Pagination';
import classes from './Favorite.module.css';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';

function Favorites() {
    
    const [description, setDescription] = useState("");
    const { favorites } = useContext(BookListContext);
    const { indexOfFirstBooks, indexOfLastBooks, booksPerPage } = useContext(PaginationContext);
    const currentBooks = favorites.slice(indexOfFirstBooks, indexOfLastBooks);
        
    if(description.length){
        return <Redirect to={{
            pathname: `/description`,
            description: description
        }}/>
    }

    let favoriteElements = currentBooks.map(favorite => {
        return <BookDetails key={favorite.id} book={favorite} setDescription={setDescription} />
    });
    
    return <div>
        <h1 className={classes.header}>Favorites</h1>
        <div className={classes.pagination}>
            {favorites.length ? <Paginations booksPerPage={booksPerPage} totalBooks={favorites.length} /> : null}
        </div>

        <div className={classes.FavoriteList}>
            {favoriteElements}
        </div>
    </div>
    
}

export default Favorites;