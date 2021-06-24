import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ItemDetailStyle } from './ItemDetailStyle';
import { ItemCount } from '../ItemCount/ItemCount';
import { AddToCart } from '../AddToCart/AddToCart';

const useStyles = makeStyles((theme) => ItemDetailStyle(theme))

export const ItemDetail = ({ dataToShow }) => {

    const classes = useStyles();

    return <>
        {dataToShow.length === 0 ? (<h1>Cargando...</h1>) : (<div className={classes.root}>
            <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                    <img className={classes.image} alt={dataToShow[0].name} src={dataToShow[0].productImg}></img>
                </Grid>
                <Grid xs={12} sm={6}>
                    <div className={classes.info}>
                        <div><h1>{dataToShow[0].name}</h1></div>
                        <hr></hr>
                        <div><h2>$ {dataToShow[0].price}</h2></div>
                        <div><ItemCount stock={dataToShow[0].stock} initial={0} /></div>
                        <div><AddToCart /></div>

                        <div><h3>Descripción:</h3><p>{dataToShow[0].description}</p></div>
                    </div>
                </Grid>
            </Grid>
        </div>)}
    </>
}