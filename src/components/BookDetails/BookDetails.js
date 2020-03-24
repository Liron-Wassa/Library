import { BookListContext } from '../../contexts/BookListContext';
import { Card, Button } from 'react-bootstrap';
import classes from './BookDetails.module.css';
import React, { useContext } from 'react';

function BookDetails({ book, bookId, setDescription }) {
    
    const { addFavorit, removeFavorite, favorites } = useContext(BookListContext);

    let favoritesId = [];
    for (let idx = 0; idx < favorites.length; idx++) {
        favoritesId[idx] = favorites[idx].id;
    }

    return <Card className={favoritesId.includes(book.id) ? classes.unList : classes.List}>
        <Card.Img
            variant="top"
            src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 
            "https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418__340.jpg"}
            className={classes.image}
        />
        <Card.Body>
        <Card.Title>{book.volumeInfo.title}</Card.Title>
        <Card.Text>{book.volumeInfo.subtitle}</Card.Text>
        <Button
            variant="secondary"
            className="mr-1"
            onClick={favoritesId.includes(book.id) ? () => removeFavorite(book.id) : () => addFavorit(bookId)}
        >
            {favoritesId.includes(book.id) ? "Remove" : "Add to favorite"}
        </Button>
        {book.volumeInfo.description ?
            <Button variant="secondary" onClick={() => setDescription(book.volumeInfo.description)}>
                Description
            </Button>
        : null}
        </Card.Body>
    </Card>
}

export default BookDetails;