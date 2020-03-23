import React from 'react';
import { Spinner } from 'react-bootstrap';
import classes from './Loading.module.css';

function Loading() {
    return <Spinner animation="border" variant="secondary" className={classes.Loading} />
}

export default Loading;