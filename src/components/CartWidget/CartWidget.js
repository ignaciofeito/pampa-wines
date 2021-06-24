import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CartWidgetStyle } from './CartWidgetStyle'

const useStyles = makeStyles((theme) => CartWidgetStyle(theme))

export const CartWidget = () => {

    const classes = useStyles()

    return <>
        <a className={classes.cartIcon} href="/pampa-wines/cart"><i className={classes.cartIcon} class="fas fa-shopping-cart"></i></a>
    </>
}