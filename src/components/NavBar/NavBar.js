import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { CartWidget } from '../CartWidget/CartWidget'
import logo from './logo2.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
  },
  button: {
    color: 'black',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '600',
    letterSpacing: '-0.5px',
    margin: '50%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Grid container className={classes.container}>
            <Grid xs={12} sm={10}>
              <Link to={'/'}><img src={logo} alt="PAMPA WINES" className={classes.logo} /></Link>
            </Grid>
            <Grid xs={12} sm={2}>
              <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  <span className={classes.button}>VINOS</span>
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}><NavLink to={`/category/malbec`}>MALBEC</NavLink></MenuItem>
                  <MenuItem onClick={handleClose}><NavLink to={`/category/cabernet`}>CABERNET SAUVIGNON</NavLink></MenuItem>
                  <MenuItem onClick={handleClose}><NavLink to={`/category/syrah`}>SYRAH</NavLink></MenuItem>
                </Menu>
                <CartWidget />
              </div>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
