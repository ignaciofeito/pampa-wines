import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ItemDetailStyle } from "./ItemDetailStyle";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CartContext } from "../../../screens/Cart/CartContext";

const useStyles = makeStyles((theme) => ItemDetailStyle(theme));

export const ItemDetail = ({ itemDetails }) => {
  const classes = useStyles();

  const [productAdded, setProductAdded] = useState(false);
  const [count, setCount] = useState(1);
  const { productsAdd } = useContext(CartContext);
  const { productsRemove } = useContext(CartContext);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  const addItem = () => {
    productsAdd({
      id: itemDetails.id,
      name: itemDetails.name,
      productImg: itemDetails.productImg,
      price: itemDetails.price,
      stock: itemDetails.stock,
      count,
    });
    setProductAdded(true);
  };

  const end = () => {
    setProductAdded(true);
  };

  const cancel = () => {
    productsRemove({ id: itemDetails.id });
    setProductAdded(false);
  };

  return (
    <>
      {itemDetails === undefined ? (
        <h1>Cargando...</h1>
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid className={classes.imgContainer} item xs={12} sm={6}>
              <img
                className={classes.image}
                alt={itemDetails.name}
                src={itemDetails.productImg}
              ></img>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.info}>
                <div>
                  <h1 className={classes.title}>{itemDetails.name}</h1>
                </div>
                <hr></hr>
                <div>
                  <h2>$ {itemDetails.price}</h2>
                </div>
                {productAdded ? null : (
                  <>
                    <div>
                      <div className={classes.contenedor}>
                        <Button
                          disabled={count === 0}
                          onClick={subtract}
                          className={classes.button}
                        >
                          -
                        </Button>
                        <h3>{count}</h3>
                        <Button
                          disabled={count === itemDetails.stock}
                          onClick={add}
                          className={classes.button}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div>
                      <div className={classes.contenedor}>
                        <Button
                          disabled={count === 0}
                          onClick={addItem}
                          className={classes.button}
                        >
                          <h4>Añadir al carrito</h4>
                        </Button>
                      </div>
                    </div>
                  </>
                )}
                {productAdded ? (
                  <div>
                    <div className={classes.contenedor}>
                      <Link className={classes.link} to={"/cart"}>
                        <Button onClick={end} className={classes.button}>
                          <h4>FINALIZAR COMPRA</h4>
                        </Button>
                      </Link>
                    </div>
                    <div className={classes.contenedor}>
                      <Button onClick={cancel} className={classes.button}>
                        <h4>Cancelar</h4>
                      </Button>
                    </div>
                    <div className={classes.contenedor}>
                      <Link className={classes.link} to={"/"}>
                        <h3>Seguir comprando</h3>
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};
