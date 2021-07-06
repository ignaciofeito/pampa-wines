import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { CartContext } from '../../context/CartContext'
import { CartStyle } from './CartStyle'

const useStyles = makeStyles((theme) => CartStyle(theme))

export const Cart = () => {

    const classes = useStyles()

    const { list, setList } = useContext(CartContext);
    const { productsRemove } = useContext(CartContext);

    const remove = (removeId) => {
        productsRemove(removeId);
    }

    return <>

        <Grid>
            <h1>Carrito</h1>
            {list == '' ? <div>
                <h2>El carrito está vacío</h2>
            </div> :
                <>
                    <table className={classes.table}>

                        <tr>
                            <th>Producto</th>
                            <th>Detalle</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>

                        {list.map((element, i) => <tr key={i}><td><img className={classes.img} src={element.productImg}></img></td><td>{element.name}</td><td>{element.count}</td><td>$ {element.price * element.count}</td><td><Button onClick={() => remove(element.id)}>Eliminar</Button></td></tr>)}

                    </table>

                </>}
        </Grid>

    </>
}