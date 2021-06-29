import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CartWidgetStyle } from './CartWidgetStyle'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => CartWidgetStyle(theme))

export const CartWidget = () => {

    const classes = useStyles()

    return <>
        <Link className={classes.cartIcon} to="/cart"><i className={classes.cartIcon} class="fas fa-shopping-cart"></i></Link>
    </>
}