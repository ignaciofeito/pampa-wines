import React from "react";
import { Switch, Route } from "react-router-dom";
import { ItemListContainer } from "../screens/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../screens/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "../screens/Cart/Cart";
import { Footer } from "../components/Footer/Footer";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ItemListContainer />
      </Route>
      <Route path="/category/:categoryId/:subcategoryId">
        <ItemListContainer />
      </Route>
      <Route exact path="/category/:categoryId">
        <ItemListContainer />
      </Route>
      <Route path="/item/:ID">
        <ItemDetailContainer />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Footer />
    </Switch>
  );
};
