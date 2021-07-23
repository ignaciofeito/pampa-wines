import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ItemStyle } from "./ItemStyle";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ItemStyle(theme));

export const Item = ({ id, name, productImg, price, stock }) => {
  const classes = useStyles();

  return (
    <Link className={classes.link} to={`/item/${id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={productImg} />
          <CardContent>
            <Typography className={classes.cardText} gutterBottom>
              {name}
            </Typography>
            <Typography className={classes.cardPrice} gutterBottom>
              $ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
