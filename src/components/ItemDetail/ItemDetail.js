import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2%',
        flexGrow: 1,
        boxShadow: '20px 10px 30px gray',
        border: '1px solid lightgray',
        borderRadius: '15px',
    },
    image: {
        padding: '10%',
        width: "50%",
        marginTop: "30px",
        marginLeft: "20%",
    },
    info: {
        padding: "10%",
    }
}));

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
                        <div><h3>Descripción:</h3><p>{dataToShow[0].description}</p></div>
                    </div>
                </Grid>
            </Grid>
        </div>)}
    </>
}