import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../Firebase/firebase'

export const ItemDetailContainer = () => {

    const { ID } = useParams();
    const [dataToShow, setDataToShow] = useState();
    const [relatedItems, setRelatedItems] = useState([]);

    const db = getFirestore();
    const itemCollection = db.collection("productos");

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

    }

    useEffect(() => {

        const item = itemCollection.doc(ID)

        item.get().then((doc) => {
            if (!doc.exists) {
                console.log("no results");
            }
            setDataToShow({ id: doc.id, ...doc.data() });
            searchItems(doc.data().subcategoryId);

        })

    }, [ID]);

    return <>
        <Container>
            <ItemDetail dataToShow={dataToShow} />
            <h2>Productos relacionados</h2>
            <ItemList dataToShow={relatedItems} />
        </Container>
    </>
}