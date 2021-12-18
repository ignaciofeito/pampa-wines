import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import { CartStyle } from "./CartStyle";
import { getFirestore } from "../../services/Firebase/firebase";
import firebase from "firebase/compat/app";

const useStyles = makeStyles((theme) => CartStyle(theme));

const dataBase = getFirestore();

export const Cart = () => {
  const classes = useStyles();

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const cartContext = useCartContext();

  const [orderId, setOrderId] = useState("");

  const remove = (removeId) => {
    cartContext.productsRemove(removeId);
  };

  const addInCart = (addId) => {
    cartContext.addInCart(addId);
  };

  const submitOrder = (e) => {
    e.preventDefault();

    const orders = dataBase.collection("orders");
    const newOrder = {
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      products: cartContext.list,
    };
    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
        cartContext.resetCart();
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (orderId === "") {
    return (
      <>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} m={12} sm={12}>
              <h1 className={classes.title}>Carrito</h1>
              {cartContext.list.length === 0 ? (
                <div className={classes.emptyCart}>
                  <h2 className={classes.title}>El carrito está vacío</h2>
                  <Link to={"/"}>
                    <h3 className={classes.title}>Volver al inicio</h3>
                  </Link>
                </div>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={8}>
                    <div className={classes.tableContainer}>
                      <table className={classes.table}>
                        <tbody>
                          <tr className={classes.title}>
                            <th>Producto</th>
                            <th>Detalle</th>
                            <th className={classes.tableCount}>Cantidad</th>
                            <th className={classes.tablePrice}>Precio</th>
                          </tr>

                          {cartContext.list.map((element, i) => (
                            <tr key={i}>
                              <td>
                                <img
                                  className={classes.img}
                                  src={element.productImg}
                                  alt="imagen de producto"
                                ></img>
                              </td>
                              <td>{element.name}</td>
                              <td>
                                <Button
                                  className={classes.btnCount}
                                  onClick={() => remove(element.id)}
                                >
                                  -
                                </Button>
                                {element.count}
                                <Button
                                  className={classes.btnCount}
                                  onClick={() => addInCart(element.id)}
                                >
                                  +
                                </Button>
                              </td>
                              <td>$ {element.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <h2>Total: $ {cartContext.totalItemPrice}</h2>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} className={classes.form}>
                    <h1 className={classes.title}>Finalizar compra</h1>
                    <form
                      className={classes.root}
                      noValidate
                      onSubmit={submitOrder}
                      autoComplete="off"
                    >
                      <h4>
                        El total de su compra es de ${" "}
                        {cartContext.totalItemPrice}
                      </h4>
                      <div>
                        <TextField
                          required
                          value={inputName}
                          onChange={(e) => setInputName(e.target.value)}
                          id="inputName"
                          label="Nombre"
                          variant="outlined"
                        />
                        <TextField
                          required
                          value={inputEmail}
                          onChange={(e) => setInputEmail(e.target.value)}
                          id="inputEmail"
                          label="Email"
                          variant="outlined"
                        />
                        <TextField
                          required
                          value={inputPhone}
                          onChange={(e) => setInputPhone(e.target.value)}
                          id="inputPhone"
                          label="Teléfono"
                          variant="outlined"
                        />
                      </div>
                      <div>
                        <Button
                          className={classes.btnBuy}
                          type="submit"
                          disabled={!inputName || !inputEmail || !inputPhone}
                        >
                          Comprar
                        </Button>
                      </div>
                    </form>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Container>
      </>
    );
  } else {
    return (
      <div className={classes.emptyCart}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} m={12} sm={12}>
              <h1>¡Su compra ha sido realizada con éxito!</h1>
              <h3>Su código de orden es {orderId}</h3>
              <Link to={"/"}>
                <h3 className={classes.title}>Volver al inicio</h3>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
};
