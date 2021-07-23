import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../components/Home/Home'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { Login } from '../Firebase/Login'
import { Register } from '../Firebase/Register'
import NavBar from '../components/NavBar/NavBar'
import { CartProvider } from '../context/CartContext'
import { AuthProvider } from '../context/AuthContext'
import { Cart } from '../components/Cart/Cart'
import { Footer } from '../components/Footer/Footer'

export const Ruteo = () => {
    return <AuthProvider>
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route path='/category/:categoryId/:subcategoryId'>
                        <ItemListContainer />
                    </Route>
                    <Route exact path='/category/:categoryId'>
                        <ItemListContainer />
                    </Route>
                    <Route path='/item/:ID'>
                        <ItemDetailContainer />
                    </Route>
                    <Route path='/cart'>
                        <Cart />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    </AuthProvider>
}