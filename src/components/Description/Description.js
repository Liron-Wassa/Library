import classes from './Description.module.css';
import React from 'react';

function Description(props) {
    
    return <div className={classes.Description}>
        <p className={classes.text}>
            {props.location.description}
        </p>
    </div>
}

export default Description;