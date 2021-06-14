import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { ItemListContainerStyle } from './ItemListContainerStyle'
import { ItemList } from '../ItemList/ItemList'

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme))

export const ItemListContainer = () => {

    const classes = useStyles()

    return <Container className={classes.row}>
    <ItemList />
    </Container>
}