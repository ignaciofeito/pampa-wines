import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ItemCountStyle } from './ItemCountStyle'

const useStyles = makeStyles((theme) => ItemCountStyle(theme))

export function ItemCount(props) {

    const classes = useStyles();
    const [count, setCount] = useState(parseInt(props.initial));

    const add = () => {
        setCount(count + 1);
    }

    const subtract = () => {
        setCount(count - 1);
    }

    return <div className={classes.contenedor}>
        <Button disabled={count === 0} onClick={e => subtract()} className={classes.button}>-</Button>
        <h3>{count}</h3>
        <Button disabled={count === props.stock} onClick={e => add()} className={classes.button}>+</Button>
    </div>
}