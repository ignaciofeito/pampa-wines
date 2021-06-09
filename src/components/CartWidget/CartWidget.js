import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CartWidgetStyle } from './CartWidgetStyle'

const useStyles = makeStyles((theme) => CartWidgetStyle(theme))

export const CartWidget = () => {

    const classes = useStyles()

    return <div>
        <a className={classes.cartIcon} href=""><i class="fas fa-shopping-cart"></i></a>
    </div>
}