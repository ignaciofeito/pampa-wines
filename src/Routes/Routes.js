import React from "react";
import { Routes, Route } from "react-router-dom";
import { ItemListContainer } from "../screens/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../screens/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "../screens/Cart/Cart";
import Footer from "../components/Footer/Footer";

export const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route
        exact
        path="/category/:categoryId"
        element={<ItemListContainer />}
      />
        <Route
        path="category/:categoryId/:subcategoryId"
        element={<ItemListContainer />}
      />
      <Route path="/item/:ID" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
  );
};
