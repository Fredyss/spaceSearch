import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import classes from '../Navigation.module.css';
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';

const liStyle = {
  textDecoration: 'none',
  padding: '0px 5px'
};

const linkStyle = {
  textDecoration: 'None',
  color: 'white'
};

const linkStyleMobile = {
  textDecoration: 'None',
  color: 'black'
};

export const NavigationItems = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event: any) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <div className={classes.mobileNavigation}>
        <Button
          style={{ color: 'whitesmoke' }}
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to='/home' style={linkStyleMobile}>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to='/favourites' style={linkStyleMobile}>
              Favourites
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to='/watch-later' style={linkStyleMobile}>
              Watch later
            </Link>
          </MenuItem>
        </Menu>
      </div>

      <ul className={classes.primaryNav}>
        <li style={liStyle}>
          <Link to='/home' style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/favourites' style={linkStyle}>
            Favourites
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/watch-later' style={linkStyle}>
            Watch later
          </Link>
        </li>
      </ul>
    </div>
  );
};
