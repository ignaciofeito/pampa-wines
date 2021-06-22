import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AddToCartStyle } from './AddToCartStyle'

const useStyles = makeStyles((theme) => AddToCartStyle(theme))

export const AddToCart = (data) => {

    const classes = useStyles();

    return <div className={classes.contenedor}><Button className={classes.button}>
        <h4>Añadir al carrito</h4>
    </Button></div>
}