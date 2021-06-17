import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export const ItemDetail = ({ item }) => {

    const classes = useStyles();

    return <>
        {item.length === 0 ? (<h1>Cargando...</h1>) : (<div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <img alt={item.name} src={item.productImg}></img>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div><h1>{item.name}</h1></div>
                    <div><h2>{item.price}</h2></div>
                    <div><p>{item.description}</p></div>
                </Grid>
            </Grid>
        </div>)}
    </>
}