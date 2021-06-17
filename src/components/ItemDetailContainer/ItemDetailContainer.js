import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { ItemDetail } from '../ItemDetail/ItemDetail';

const promiseData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            [{ "id": '10', "name": 'Telecaster', "price": 2550, "description": 'Fender Telecaster 78. Maple.', "destacado": true, "stock": 5, "initial": 0, "productImg": "https://bairesrocks.vteximg.com.br/arquivos/ids/205176/901818-MLA40608594961_012020-F.jpg?v=637313070689700000" },
            ]), 2000);
    })
}

export const ItemDetailContainer = () => {

    const [dataToShow, setDataToShow] = useState([]);

    const ejecutar = () => {
        promiseData().then(data => {
            setDataToShow(data)
        });
    }

    useEffect(() => {
        ejecutar();
    }, [])

    return <Container>
        <ItemDetail item={dataToShow} />
    </Container>
}