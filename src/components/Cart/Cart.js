import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { AuthContext } from '../../context/AuthContext'
import { CartStyle } from './CartStyle'
import { getFirestore } from '../../Firebase/firebase';
import firebase from 'firebase/app'

const useStyles = makeStyles((theme) => CartStyle(theme))

export const Cart = () => {

    const classes = useStyles()

    const { logged } = useContext(AuthContext);
    const { usermail } = useContext(AuthContext);
    const { username } = useContext(AuthContext);
    const { userphone } = useContext(AuthContext);

    const { list } = useContext(CartContext);
    const { productsRemove } = useContext(CartContext);
    const { totalItemPrice } = useContext(CartContext);
    const { resetCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState("")

    const remove = (removeId) => {
        productsRemove(removeId);
    }

    const dataBase = getFirestore();

    const submitOrder = (evt) => {
        evt.preventDefault();

        const orders = dataBase.collection('orders');
        const newOrder = {
            fecha: firebase.firestore.Timestamp.fromDate(new Date()),
            nombre: username,
            mail: usermail,
            telefono: userphone,
            productos: list,
        };
        orders.add(newOrder).then(({ id }) => {
            setOrderId(id);
            resetCart();
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            console.log("end");
        }); 
    }

    if (orderId == '') {
        return <>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} m={12} sm={12}>
                        <h1 className={classes.title}>Carrito</h1>
                        {list == '' ? <div>
                            <h2 className={classes.title}>El carrito está vacío</h2>
                            <Link to={'/'}><h3 className={classes.title}>Volver al inicio</h3></Link>
                        </div> :
                            <Grid spacing={3}>
                                <Grid item xs={12} m={12} sm={8}>
                                    <div className={classes.tableContainer}>
                                        <table className={classes.table}>

                                            <tr className={classes.title}>
                                                <th>Producto</th>
                                                <th>Detalle</th>
                                                <th>Cantidad</th>
                                                <th>Precio</th>
                                            </tr>

                                            {list.map((element, i) => <tr key={i}><td><img className={classes.img} src={element.productImg}></img></td><td>{element.name}</td><td>{element.count}</td><td>$ {element.price}</td><td><Button className={classes.btnDel} onClick={() => remove(element.id)}>-</Button></td></tr>)}

                                        </table>
                                        <h2>Total: $ {totalItemPrice}</h2>
                                    </div>
                                </Grid>
                                <Grid item xs={12} m={5} sm={4} className={classes.form}>
                                    <h1 className={classes.title}>Finalizar compra</h1>
                                    {logged ? <Button onClick={submitOrder} type="submit">Comprar</Button> : <h4><Link to={"/login"}>Inicia sesión</Link> o <Link to={"/register"}>regístrate</Link></h4>}
                                </Grid>
                            </Grid>
                        }
                    </Grid>

                </Grid>
            </Container>
        </>
    } else {
        return <>
            <Container>
                <Grid container spacing={3}>
                    <Grid xs={12} m={12} sm={12}>
                        <h1>¡Su compra ha sido realizada con éxito!</h1>
                        <h3>Su número de orden es {orderId}</h3>
                    </Grid>
                </Grid>
            </Container>
        </>
    }

}