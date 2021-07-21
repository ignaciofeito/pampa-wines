import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CartWidget } from '../CartWidget/CartWidget'
import logo from '../../img/logo2.png'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavBarStyle } from './NavBarStyle'
import { CartContext } from '../../context/CartContext'

const useStyles = makeStyles((theme) => NavBarStyle(theme))

export default function NavBar() {

  const classes = useStyles();

  const { list } = useContext(CartContext);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Grid container className={classes.container}>
          <Grid xs={12} sm={8}>
            <Link to={'/'}><img src={logo} alt="PAMPA WINES" /></Link>
          </Grid>
          <Grid xs={12} sm={3}>
            <div>
              <ul className={classes.navbar}>
                <li className={classes.button}><NavLink className={classes.link} to={`/category/vinos`}>VINOS</NavLink></li>
                <li className={classes.button}><NavLink className={classes.link} to={`/category/espumantes`}>ESPUMANTES</NavLink></li>
                {list == '' ? <li className={classes.button}></li> : <li><CartWidget /></li>}
              </ul>
            </div>
          </Grid>

          <Grid xs={12} sm={1}>
            <NavLink className={classes.link} to={`/profile`}><AccountCircle className={classes.avatar} src="/broken-image.jpg" /></NavLink>
          </Grid>

        </Grid>
      </AppBar>
    </div>
  );
}
