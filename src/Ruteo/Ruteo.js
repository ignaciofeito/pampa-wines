import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import NavBar from '../components/NavBar/NavBar'

export const Ruteo = () => {
    return <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <ItemListContainer />
            </Route>
            <Route path='/category/:categoryId'>
                <ItemListContainer />
            </Route>
            <Route path='/item/:ID'>
                <ItemDetailContainer />
            </Route>
        </Switch>
    </BrowserRouter>
}