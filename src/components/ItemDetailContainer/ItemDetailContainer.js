import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemDetailStyle } from '../ItemDetail/ItemDetailStyle';
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../Firebase/firebase'

const useStyles = makeStyles((theme) => ItemDetailStyle(theme))

export const ItemDetailContainer = () => {

    const classes = useStyles();

    const { ID } = useParams();
    const [dataToShow, setDataToShow] = useState();

    const db = getFirestore();
    const itemCollection = db.collection("productos");

    /*
    // Este state almacena los items de la misma subcategoría.

    const [relatedItems, setRelatedItems] = useState([]); */

    /* 
    // Esta es la función que busca en la base de datos los elementos relacionados.

    const searchItems = (category) => {
        var dataFiltrada = itemCollection.where('subcategoryId', '==', category)

        dataFiltrada.get().then((response) => {
            if (response.size === 0) {
                console.log("no results");
            }

            const aux = response.docs.map(element => {
                return { ...element.data(), id: element.id };
            })
            setRelatedItems(aux)
        })

    } */

    useEffect(() => {

        const item = itemCollection.doc(ID)

        item.get().then((doc) => {
            if (!doc.exists) {
                console.log("no results");
            }
            setDataToShow({ id: doc.id, ...doc.data() });
            // searchItems(doc.data().subcategoryId); Ejecuta la función de búsqueda de items relacionados pasando como parámetro la subcategoría.

        })

    }, [ID]);

    return <>
        <Container>
            <ItemDetail dataToShow={dataToShow} />
            {/* <h2 className={classes.title}>Productos relacionados</h2> */}
            {/* <ItemList dataToShow={relatedItems} /> Este componente despliega la lista de elementos de la misma subcategoría*/} 
        </Container>
    </>
}