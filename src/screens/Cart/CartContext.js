import React, { useState, useContext } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [list, setList] = useState([]);

  const productsAdd = (newItem) => {
    if (list.find((item) => item.id === newItem.id)) {
      const newCartItem = list.map((item) => {
        if (item.id === newItem.id) {
          return { ...item, count: newItem.count + item.count };
        }
        return item;
      });
      setList(newCartItem);
    } else {
      setList((state) => {
        return [...state, newItem];
      });
    }
  };

  const productsRemove = (removeId) => {
    let array = [...list];
    let index = array.indexOf(array.find((e) => e.id === removeId));
    if (array[index].count > 1) {
      array[index].count -= 1;
    } else {
      array.splice(index, 1);
    }
    setList(() => array);
  };

  const addInCart = (addId) => {
    let array = [...list];
    let index = array.indexOf(array.find((e) => e.id === addId));
    array[index].count += 1;
    setList(() => array);
  };

  const resumeItem = () => {
    return list.reduce((acumulador, item) => acumulador + item.count, 0);
  };
  const totalItemCount = resumeItem();

  const resumePrice = () => {
    return list.reduce(
      (acumulador, item) => acumulador + item.count * item.price,
      0
    );
  };
  const totalItemPrice = resumePrice();

  const resetCart = () => {
    return setList([]);
  };

  return (
    <CartContext.Provider
      value={{
        list,
        productsAdd,
        productsRemove,
        addInCart,
        totalItemCount,
        totalItemPrice,
        resetCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
