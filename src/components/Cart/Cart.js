import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartStyle } from './CartStyle'
import { getFirestore } from '../../Firebase/firebase';
import firebase from 'firebase/app'

const useStyles = makeStyles((theme) => CartStyle(theme))

export const Cart = () => {

    const classes = useStyles()

    const { list, setList } = useContext(CartContext);
    const { productsRemove } = useContext(CartContext);
    const { totalItemPrice } = useContext(CartContext);
    const { resetCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState("")

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputPhone, setInputPhone] = useState("")

    const remove = (removeId) => {
        productsRemove(removeId);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const dataBase = getFirestore();
        const orders = dataBase.collection('orders');

        const newOrder = {
            fecha: firebase.firestore.Timestamp.fromDate(new Date()),
            nombre: inputName,
            mail: inputEmail,
            telefono: inputPhone,
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
                    <Grid xs={12} m={12} sm={12}>
                        <h1>Carrito</h1>
                        {list == '' ? <div>
                            <h2>El carrito está vacío</h2>
                            <Link to={'/'}><h3>Volver al inicio</h3></Link>
                        </div> :
                            <Grid container spacing={3}>
                                <Grid xs={12} m={12} sm={6}>
                                    <div className={classes.tableContainer}>
                                        <table className={classes.table}>

                                            <tr>
                                                <th>Producto</th>
                                                <th>Detalle</th>
                                                <th>Cantidad</th>
                                                <th>Precio</th>
                                            </tr>

                                            {list.map((element, i) => <tr key={i}><td><img className={classes.img} src={element.productImg}></img></td><td>{element.name}</td><td>{element.count}</td><td>$ {element.price}</td><td><Button onClick={() => remove(element.id)}>Eliminar</Button></td></tr>)}

                                        </table>
                                        <h2>Total: $ {totalItemPrice}</h2>
                                    </div>
                                </Grid>
                                <Grid xs={12} m={5} sm={6}>
                                    <h1>Finalizar compra</h1>
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <div><TextField
                                            required
                                            value={inputName}
                                            onChange={e => setInputName(e.target.value)}
                                            id="inputName"
                                            label="Nombre"
                                            variant="outlined"
                                        />
                                            <TextField
                                                required
                                                value={inputEmail}
                                                onChange={e => setInputEmail(e.target.value)}
                                                id="inputEmail"
                                                label="Email"
                                                variant="outlined"
                                            />
                                            <TextField
                                                required
                                                value={inputPhone}
                                                onChange={e => setInputPhone(e.target.value)}
                                                id="inputPhone"
                                                label="Teléfono"
                                                variant="outlined"
                                            /></div>
                                        <div>
                                            <Button onClick={handleSubmit} type="submit" className={classes.btnBuy}>Comprar</Button>
                                        </div>
                                    </form>
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