import React from "react";
import { Item } from "../../../components/Item/Item";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ItemListStyle } from "./ItemListStyle";

const useStyles = makeStyles((theme) => ItemListStyle(theme));

export const ItemList = ({ dataToShow }) => {
  const classes = useStyles();

  return (
    <>
      {dataToShow.length === 0 ? (
        <h1 className={classes.title}>Cargando...</h1>
      ) : (
        <div className={classes.root}>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={6} md={10}>
                <h4 className={classes.title}>
                  Mostrando {dataToShow.length} productos
                </h4>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              {dataToShow.map((element) => (
                <Grid key={element.id} item xs={6} sm={6} md={4} lg={3}>
                  <Item
                    id={element.id}
                    name={element.name}
                    price={element.price}
                    stock={element.stock}
                    productImg={element.productImg}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};
