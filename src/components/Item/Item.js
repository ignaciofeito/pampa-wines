import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { AddToCart } from '../AddToCart/AddToCart';

const useStyles = makeStyles({
    root: {
        minHeight: 430,
        maxWidth: 280,
    },
    media: {
        maxWidth: "50%",
        margin: "auto",
        height: 250,
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    }
});

export const Item = ({ id, name, productImg, price, stock }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Link className={classes.link} to={`/pampa-wines/item/${id}`}>
                    <CardMedia
                        className={classes.media}
                        image={productImg}
                    />
                    <CardContent>
                        <Typography gutterBottom>
                            {name}
                        </Typography>
                        <Typography gutterBottom>
                            $ {price}
                        </Typography>
                    </CardContent></Link>
            </CardActionArea>
            <AddToCart />
        </Card>
    );
}