import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RegisterModal from '../auth/RegisterModal';
import UserMenu from './UserMenu';


const Navbar = ({ classes, open, doDrawerOpen, isAuthenticated = false, user = null }) => {

  const authLinks = (
    <Fragment>
      <span>
        <UserMenu name={user ? user.name : ''} />
      </span>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <RegisterModal />
    </Fragment>
  );

  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        {isAuthenticated && (
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={doDrawerOpen}
            className={classNames(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" color="inherit" className={classes.grow}>
          <>
            <RestaurantIcon />
            Food!!!
          </>
        </Typography>
        {isAuthenticated ? authLinks : guestLinks}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  doDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.instanceOf(Object),
};

Navbar.defaultProps = {
  isAuthenticated: null,
  user: null,
};

export default Navbar;
