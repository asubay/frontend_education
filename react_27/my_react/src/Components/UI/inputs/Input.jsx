import React from 'react';
import classes from './Input.module.css'

const Input = ({onClick}) => {
    return (
        <input className={classes.myInput} onClick={onClick}/>
    );
};

export default Input;