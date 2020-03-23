import { BookListContext } from '../../contexts/BookListContext';
import { Navbar, Nav } from 'react-bootstrap';
import classes from './NavBar.module.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    const { favorites } = useContext(BookListContext);

    return <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <div className={classes.navBar}>
            <Link to="/" className={classes.navBar}>Home</Link>
            <Link to="/history" className={classes.navBar}>History</Link>
            <Link to="/favorites"  className={classes.navBar}>
              <span>Favorites</span>
              {favorites.length ?
                <span className={classes.icon}>
                  <span className="badge badge-danger">{favorites.length}</span>
                </span>
              : null}
            </Link>
          </div>
        </Nav>
  </Navbar>
}

export default NavBar;