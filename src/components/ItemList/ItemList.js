import React from 'react';
import { Item } from '../Item/Item';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


export const ItemList = ({ dataToShow }) => {

    const classes = useStyles();

    return <>
        {dataToShow.length === 0 ? (<h1>Cargando...</h1>) : (<div className={classes.root}>
            <h4>Mostrando {dataToShow.length} productos</h4>
            <Grid container spacing={3}>

                {dataToShow.map((element) => <Grid key={element.id} item xs={12} sm={4}><Item name={element.name} price={element.price} stock={element.stock} productImg={element.productImg} /></Grid>)}

            </Grid>
        </div>)}
    </>
}