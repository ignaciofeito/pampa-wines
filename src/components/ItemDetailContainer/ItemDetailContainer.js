import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { products } from '../../products'

const promiseData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            products), 1000);
    })
}


export const ItemDetailContainer = () => {

    const { ID } = useParams();
    const [dataToShow, setDataToShow] = useState([]);

    const ejecutar = () => {
        promiseData().then(data => {
            const dataFiltrada = data.filter(element => element.id == ID)
            setDataToShow(dataFiltrada)
        })
    }

    useEffect(() => {
        ejecutar();
    }, [])

    return <>
        <Container>
            <ItemDetail dataToShow={dataToShow} />
        </Container>
    </>
}