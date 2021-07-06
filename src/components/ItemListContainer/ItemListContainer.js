import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { ItemListContainerStyle } from './ItemListContainerStyle'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../Firebase/firebase'

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme))

export const ItemListContainer = () => {

    const { categoryId } = useParams();

    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("productos");
        
        // En caso de que la ruta no tenga ningún categoryId, se renderizan todos los productos de itemCollection
        if (categoryId !== undefined) {
            var dataFiltrada = itemCollection.where('categoryId', '==', categoryId)

            dataFiltrada.get().then((response) => {
                if (response.size === 0) {
                    console.log("no results");
                }

                const aux = response.docs.map(element => {
                    return { ...element.data(), id: element.id };
                })
                setDataToShow(aux)
            })
        } else {
            itemCollection.get().then((response) => {
                if (response.size === 0) {
                    console.log("no results");
                }

                const aux = response.docs.map(element => {
                    return { ...element.data(), id: element.id };
                })
                setDataToShow(aux)
            })
        }
    }, [categoryId]);

    const classes = useStyles()

    return <Container className={classes.row}>
        <ItemList dataToShow={dataToShow} />
    </Container>
}