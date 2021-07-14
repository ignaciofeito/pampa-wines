import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CartWidget } from '../CartWidget/CartWidget'
import logo from './logo2.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavBarStyle } from './NavBarStyle'
import { CartContext } from '../../context/CartContext'

const useStyles = makeStyles((theme) => NavBarStyle(theme))

export default function NavBar() {

  const classes = useStyles();

  const { list, setList } = useContext(CartContext);
  
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Grid container className={classes.container}>
          <Grid xs={12} sm={8}>
            <Link to={'/'}><img src={logo} alt="PAMPA WINES" className={classes.logo} /></Link>
          </Grid>
          <Grid xs={12} sm={4}>
            <div>
              <ul className={classes.navbar}>
                <li className={classes.button}><NavLink className={classes.link} to={`/category/malbec`}>MALBEC</NavLink></li>
                <li className={classes.button}><NavLink className={classes.link} to={`/category/cabernet`}>CABERNET SAUVIGNON</NavLink></li>
                <li className={classes.button}><NavLink className={classes.link} to={`/category/syrah`}>SYRAH</NavLink></li>
                {list == '' ? null : <li className={classes.button}><CartWidget /></li>}
              </ul>
            </div>

          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
