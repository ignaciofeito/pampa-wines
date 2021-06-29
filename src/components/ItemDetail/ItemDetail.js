import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ItemDetailStyle } from './ItemDetailStyle';
import { ItemCount } from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { CartContext } from '../../context/CartContext/CartContext'

const useStyles = makeStyles((theme) => ItemDetailStyle(theme))

export const ItemDetail = ({ dataToShow }) => {

    const classes = useStyles();

    const [clicked, setClicked] = useState(false);

    const [cart, setCart] = useContext(CartContext);

    const addItem = (element) =>{
        setCart([...cart, element]);
        setClicked(true);
    }

    function cancel() {
        setClicked(false);
    }

    return <>
        {dataToShow === undefined ? (<h1>Cargando...</h1>) : (<div className={classes.root}>
            <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                    <img className={classes.image} alt={dataToShow[0].name} src={dataToShow[0].productImg}></img>
                </Grid>
                <Grid xs={12} sm={6}>
                    <div className={classes.info}>
                        <div><h1>{dataToShow[0].name}</h1></div>
                        <hr></hr>
                        <div><h2>$ {dataToShow[0].price}</h2></div>
                        <div>{clicked ? null : <ItemCount stock={dataToShow[0].stock} initial={0} />}</div>
                        <div>{clicked ? null : <div className={classes.contenedor}>
                            <Button onClick={()=>addItem(dataToShow[0])} className={classes.button}>
                                <h4>Añadir al carrito</h4>
                            </Button></div>}
                        </div>
                        <div>
                            <div className={classes.contenedor}>
                                {clicked ? <Link to="/cart" className={classes.button}>
                                    <h4>FINALIZAR COMPRA</h4>
                                </Link> : null}
                            </div>
                            <div className={classes.contenedor}>
                                {clicked ? <Button onClick={cancel} className={classes.button}>
                                    <h4>Cancelar</h4>
                                </Button> : null}
                            </div>
                        </div>

                        <div><h3>Descripción:</h3><p>{dataToShow[0].description}</p></div>
                    </div>
                </Grid>
            </Grid>
        </div>)}
    </>
}