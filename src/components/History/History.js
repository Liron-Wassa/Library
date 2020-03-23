import classes from './History.module.css';
import { Table } from 'react-bootstrap';
import React from 'react';

function History() {

    let histories = JSON.parse(localStorage.getItem("history")) || [];

    let historiesElement = histories.map((history, index) => {
        return <tr key={index}>
            <td>{history.search}</td>
            <td>{history.date}</td>
        </tr>
    });

    return <div>
        <h1 className={classes.header}>Search History</h1>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Search</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {historiesElement}
            </tbody>
        </Table>
    </div>
}

export default History;