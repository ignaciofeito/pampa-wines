import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { CartWidgetStyle } from './CartWidgetStyle'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const useStyles = makeStyles((theme) => CartWidgetStyle(theme))

export const CartWidget = () => {

    const classes = useStyles()

    const { items } = useContext(CartContext);
    
    return <>
        <Link className={classes.cartIcon} to="/cart">

            <IconButton color="inherit">
                <Badge badgeContent={items} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>

        </Link>
    </>
}