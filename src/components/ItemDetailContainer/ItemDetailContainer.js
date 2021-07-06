import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../Firebase/firebase'

export const ItemDetailContainer = () => {

    const { ID } = useParams();
    const [dataToShow, setDataToShow] = useState();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("productos");
        const item = itemCollection.doc(ID)

        item.get().then((doc) => {
            if (!doc.exists) {
                console.log("no results");
            }
            setDataToShow({ id: doc.id, ...doc.data() })
        })
    }, [ID]);

    return <>
        <Container>
            <ItemDetail dataToShow={dataToShow} />
        </Container>
    </>
}