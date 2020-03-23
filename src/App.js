import BookListContextProvider from './contexts/BookListContext';
import PaginationContextProvider from './contexts/PaginationContext';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Description from './components/Description/Description';
import Favorites from './components/Favorites/Favorites';
import Library from './components/Library/Library';
import History from './components/History/History';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import './App.css';


function App() {

  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <BookListContextProvider>
            <NavBar />
            <PaginationContextProvider>
              <Route exact path="/" component={Library}/>
              <Route path="/favorites" component={Favorites}/>
            </PaginationContextProvider>
            <Route path="/history" component={History}/>
            <Route path="/description" component={Description}/>
          </BookListContextProvider>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;