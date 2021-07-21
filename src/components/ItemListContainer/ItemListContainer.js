import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import { ItemListContainerStyle } from './ItemListContainerStyle'
import { ItemList } from '../ItemList/ItemList'
import { CategoryList } from '../CategoryList/CategoryList'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../Firebase/firebase'

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme))

export const ItemListContainer = () => {

    const { categoryId } = useParams();
    const { subcategoryId } = useParams();

    const [dataToShow, setDataToShow] = useState([]);

    const [searchInput, setSearchInput] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("productos");

        // En caso de que la barra de búsqueda se encuentre vacía, se renderizan todos los productos de itemCollection
        if (searchInput == '') {
            if (categoryId == undefined) {

                itemCollection.get().then((response) => {
                    if (response.size === 0) {
                        console.log("no results");
                    }

                    const aux = response.docs.map(element => {
                        return { ...element.data(), id: element.id };
                    })
                    setDataToShow(aux)
                })
            }  else if (categoryId !== undefined && subcategoryId == undefined) {
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
            } else if (subcategoryId !== undefined) {
                var dataFiltrada = itemCollection.where('subcategoryId', '==', subcategoryId)

                dataFiltrada.get().then((response) => {
                    if (response.size === 0) {
                        console.log("no results");
                    }

                    const aux = response.docs.map(element => {
                        return { ...element.data(), id: element.id };
                    })
                    setDataToShow(aux)
                })
            }
        } else {

            itemCollection.get().then((response) => {
                if (response.size === 0) {
                    console.log("no results");
                }

                const aux = response.docs.map(element => {
                    return { ...element.data(), id: element.id };
                })

                var dataFiltrada = aux.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
                setDataToShow(dataFiltrada)
            })
        }
    }, [categoryId, subcategoryId,searchInput]);


    const classes = useStyles()

    return <Container>
        <Grid container columns={16}>
            <Grid xs={12} m={12} sm={9}>
                <h4><Link className={classes.title} to={"/"}>PRODUCTOS</Link>{categoryId? <> / <Link className={classes.title} to={"/category/"+categoryId}>{categoryId.toUpperCase()}</Link></>:null}{subcategoryId?<> / <Link className={classes.title} to={"/category/"+categoryId+"/"+subcategoryId}>{subcategoryId.toUpperCase()}</Link></>:null}</h4>
            </Grid>
            <Grid xs={12} m={12} sm={3}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Buscar"
                        name="searchInput"
                        onChange={e => setSearchInput(e.target.value)}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                    />
                </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid xs={12} m={12} sm={2}>
                <CategoryList />
            </Grid>

            <Grid xs={12} m={12} sm={10}>
                <ItemList dataToShow={dataToShow} />
            </Grid>
        </Grid>
    </Container>

}