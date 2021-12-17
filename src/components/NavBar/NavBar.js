import React, { useContext } from "react";
import { AppBar, Grid, makeStyles, IconButton, Menu, MenuItem } from "@material-ui/core";
import { CartWidget } from "./CartWidget/CartWidget";
import logo from "../../img/logo2.png";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink, Link } from "react-router-dom";
import { NavBarStyle } from "./NavBarStyle";
import { CartContext } from "../../screens/Cart/CartContext";

const useStyles = makeStyles((theme) => NavBarStyle(theme));

export default function NavBar() {
  const classes = useStyles();

  const { list } = useContext(CartContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <div className={classes.listFullScreen}>
          <Grid container className={classes.container}>
            <Grid item xs={12} sm={8}>
              <Link to={"/"}>
                <img className={classes.logo} src={logo} alt="logo pampa wines" />
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <ul className={classes.navbar}>
                  <li className={classes.button}>
                    <NavLink className={classes.link} to={`/category/vinos`}>
                      VINOS
                    </NavLink>
                  </li>
                  <li className={classes.button}>
                    <NavLink
                      className={classes.link}
                      to={`/category/espumantes`}
                    >
                      ESPUMANTES
                    </NavLink>
                  </li>
                  {list.lenght !== 0 && <li><CartWidget className="scale-in-center" /></li>}
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.listSmallScreen}>
          <Grid container className={classes.container}>
            <Grid item xs={4} sm={4}>
              <IconButton
                edge="start"
                className={classes.button}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link to={`/category/vinos/malbec`} className={classes.link}>
                    Malbec
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={`/category/vinos/cabernet`}
                    className={classes.link}
                  >
                    Cabernet Sauvignon
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to={`/category/vinos/syrah`} className={classes.link}>
                    Syrah
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={`/category/vinos/chardonnay`}
                    className={classes.link}
                  >
                    Chardonnay
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={`/category/vinos/sauvignon-blanc`}
                    className={classes.link}
                  >
                    Sauvignon Blanc
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={`/category/vinos/torrontes`}
                    className={classes.link}
                  >
                    Torrontes
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={`/category/espumantes/champagne`}
                    className={classes.link}
                  >
                    Champagne
                  </Link>
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Link to={"/"}>
                <img className={classes.logo} src={logo} alt="logo pampa wines" />
              </Link>
            </Grid>
            <Grid className={classes.container} item xs={4} sm={4}>
              <div>
                {list.lenght === 0? null : <CartWidget />}
              </div>
            </Grid>
          </Grid>
        </div>
      </AppBar>
    </nav>
  );
}
