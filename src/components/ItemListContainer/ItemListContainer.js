import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ItemListContainerStyle } from './ItemListContainerStyle'

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme))

export function ItemListContainer(props) {

    const classes = useStyles()

    return <Container maxwidth="sm">
        <Typography className={classes.text} variant="h3">
            {props.greeting}
        </Typography>
    </Container>
}