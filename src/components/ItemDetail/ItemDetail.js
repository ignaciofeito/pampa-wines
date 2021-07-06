import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ItemDetailStyle } from './ItemDetailStyle';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { CartContext } from '../../context/CartContext'

const useStyles = makeStyles((theme) => ItemDetailStyle(theme))

export const ItemDetail = ({ dataToShow }) => {

    const classes = useStyles();

    const [clicked, setClicked] = useState(false);
    const [count, setCount] = useState(1);
    const { productsAdd } = useContext(CartContext);

    const add = () => {
        setCount(count + 1);
    }

    const subtract = () => {
        setCount(count - 1);
    }

    const addItem = () => {
        setClicked(true);
    }

    const end = () => {
        productsAdd({ id: dataToShow.id, name: dataToShow.name, productImg: dataToShow.productImg, price:dataToShow.price, stock: dataToShow.stock,count });
        setClicked(true);
    }

    function cancel() {
        setClicked(false);
    }

    return <>
        {dataToShow === undefined ? (<h1>Cargando...</h1>) : (<div className={classes.root}>
            <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                    <img className={classes.image} alt={dataToShow.name} src={dataToShow.productImg}></img>
                </Grid>
                <Grid xs={12} sm={6}>
                    <div className={classes.info}>
                        <div><h1>{dataToShow.name}</h1></div>
                        <hr></hr>
                        <div><h2>$ {dataToShow.price}</h2></div>
                        <div>{clicked ? null : <div className={classes.contenedor}><Button disabled={count === 0} onClick={subtract} className={classes.button}>-</Button><h3>{count}</h3><Button disabled={count === dataToShow.stock} onClick={add} className={classes.button}>+</Button></div>}</div>
                        <div>{clicked ? null : <div className={classes.contenedor}>
                            <Button onClick={addItem} className={classes.button}>
                                <h4>Añadir al carrito</h4>
                            </Button></div>}
                        </div>
                        <div>
                            <div className={classes.contenedor}>
                                {clicked ? <Link to="/cart" onClick={end} className={classes.button}>
                                    <h4>FINALIZAR COMPRA</h4>
                                </Link> : null}
                            </div>
                            <div className={classes.contenedor}>
                                {clicked ? <Button onClick={cancel} className={classes.button}>
                                    <h4>Cancelar</h4>
                                </Button> : null}
                            </div>
                        </div>

                        <div><h3>Descripción:</h3><p>{dataToShow.description}</p></div>
                    </div>
                </Grid>
            </Grid>
        </div>)}
    </>
}