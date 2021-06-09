import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { CartWidget } from '../CartWidget/CartWidget'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  button: {
    color: 'white',
    marginRight: '20px',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '500',
    letterSpacing: '0.2px'
  }
}));

export default function SearchAppBar() {
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
          <Typography className={classes.title} variant="h6" noWrap>
            Boutique de guitarras
          </Typography>
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <span className={classes.button}>Categorías</span>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Guitarras</MenuItem>
              <MenuItem onClick={handleClose}>Teclados</MenuItem>
              <MenuItem onClick={handleClose}>Bajos</MenuItem>
              <MenuItem onClick={handleClose}>Batería</MenuItem>
              <MenuItem onClick={handleClose}>Amplificadores</MenuItem>
            </Menu>

          </div>
          <div><CartWidget /></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
