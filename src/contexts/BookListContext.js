import React, { createContext, useState } from 'react';
import axios from 'axios';

export const BookListContext = createContext();

function BookListContextProvider(props) {

    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
    const [isLoading, setLoad] = useState(false);
    const [books, setBooks] = useState([]);
    const error = "Not found";

    let findBooks = (book) => {
        setLoad(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+${book}`).then(res => {
            if(res.status === 200){
                setBooks(res.data.items);
                setLoad(false);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    let addFavorit = (id) => {
        let bookIndex = books.findIndex(book => {
            return book.id === id;
        });

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];             
        if(favorites){
            favorites.push(books[bookIndex]);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
        else{
            favorites.push(books[bookIndex]);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
        setFavorites(favorites);
    }

    let removeFavorite = (id) => {        
        let newFavorites = favorites.filter(favorite => {
            return favorite.id !== id;
        });            
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setFavorites(newFavorites);
    }

    return <BookListContext.Provider value={{
            books,
            error,
            isLoading,
            favorites,
            findBooks,
            addFavorit,
            removeFavorite
        }}>
        {props.children}
    </BookListContext.Provider>
}

export default BookListContextProvider;