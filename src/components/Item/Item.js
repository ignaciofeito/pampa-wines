import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ItemCount } from './ItemCount/ItemCount'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 400,
    },
});

export const Item = ({ name, productImg, price, stock }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={productImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        USD {price}
                    </Typography>
                </CardContent>
                <ItemCount stock={stock} initial={0}/>
            </CardActionArea>
        </Card>
    );
}