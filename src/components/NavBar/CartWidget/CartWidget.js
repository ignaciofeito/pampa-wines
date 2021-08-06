import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Badge, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartWidgetStyle } from "./CartWidgetStyle";
import { Link } from "react-router-dom";
import { CartContext } from "../../../screens/Cart/CartContext";
import "./CartWidgetStyle.css";

const useStyles = makeStyles((theme) => CartWidgetStyle(theme));

export const CartWidget = () => {
  const classes = useStyles();

  const { totalItemCount } = useContext(CartContext);

  return (
    <Link className={classes.cartIcon} to="/cart">
      <IconButton className="scale-in-center" color="inherit">
        <Badge badgeContent={totalItemCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};
