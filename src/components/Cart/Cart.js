import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CartContext } from '../../context/CartContext/CartContext'
import { CartStyle } from './CartStyle'

const useStyles = makeStyles((theme) => CartStyle(theme))

export const Cart = () => {

    const classes = useStyles()

    const [cart, setCart] = useContext(CartContext);

    return <>

        <Grid>
            <h1>Carrito</h1>
            {cart=="" ? <h2>El carrito está vacío</h2> : 
            <table className={classes.table}>
                
                    <tr>
                        <th>Producto</th>
                        <th>Detalle</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        
                    </tr>
                
                {cart.map((element, i) => <tr key={i}><td><img className={classes.img} src={element.productImg}></img></td><td>{element.name}</td><td>1</td><td>$ {element.price}</td></tr>)}

            </table>}
        </Grid>

    </>
}