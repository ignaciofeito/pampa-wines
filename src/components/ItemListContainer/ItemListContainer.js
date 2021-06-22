import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { ItemListContainerStyle } from './ItemListContainerStyle'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { products } from '../../products'

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme))

const promiseData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            products), 1000);
    })
}

export const ItemListContainer = () => {

    const { categoryId } = useParams();
    console.log(categoryId)
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        promiseData().then((data) => {
            if (categoryId !== undefined) {
                const dataFiltrada = data.filter(
                    (element) => element.categoryId === categoryId
                );
                setDataToShow(dataFiltrada);
            } else {
                setDataToShow(data);
            }
        });
    }, [categoryId]);

    const classes = useStyles()

    return <Container className={classes.row}>
        <ItemList dataToShow={dataToShow} />
    </Container>
}