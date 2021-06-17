import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { ItemDetail } from '../ItemDetail/ItemDetail';

const promiseData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            [{
                "id": '10', "name": 'Telecaster', "price": 2550, "description": 'Los guitarristas profesionales de todos los géneros musicales han confiado en la guitarra Fender Telecaster desde su introducción a principios de la década de 1950 por su tono potente y su capacidad de interpretación suave.Ahora disponible en un acabado en negro satinado de edición especial con tapa para la cabeza a juego y un golpeador negro único con capa central roja en contraste, el Telecaster estándar combina lo mejor de lo antiguo y lo nuevo. Otras características incluyen pastillas de bobina simple de alto rendimiento, cavidades corporales blindadas, trastes jumbo medianos, un puente de seis cuerdas a través del cuerpo, sintonizadores fundidos / sellados, protector de cuello y pergamino teñido y perillas de control, junto con un cabezal estilo años 70 logo', "destacado": true, "stock": 5, "initial": 0, "productImg": "https://bairesrocks.vteximg.com.br/arquivos/ids/205176/901818-MLA40608594961_012020-F.jpg?v=637313070689700000"
            },
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

    return <>
        <Container>
            <ItemDetail dataToShow={dataToShow} />
        </Container>
    </>
}