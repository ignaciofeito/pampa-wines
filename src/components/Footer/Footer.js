import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FooterStyle } from "./FooterStyle";

const useStyles = makeStyles((theme) => FooterStyle(theme));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container spacing={3}>
        <Link to={"/"}>
          <img src={logo} alt="PAMPA WINES" className={classes.logo} />
        </Link>
        <h4 className={classes.title}>Copyright 2021 - Ignacio Feito</h4>
      </Grid>
    </footer>
  );
};

export default Footer;