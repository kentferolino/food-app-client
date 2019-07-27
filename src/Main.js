import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Home from './pages/Home';
import Front from './pages/Front';
import AppNavbar from './components/navs/AppNavbar';
import PrivateRoute from './utils/PrivateRoute';
import { mainRoutes as routes } from './utils/route'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

const Main = ({ auth, classes }) => {
  return (
    <Fragment>
      {auth.isLoading !== true && (
        <div className={classes.root}>
          <AppNavbar auth={auth} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              {
                routes.map((route) => (
                  <PrivateRoute
                    path={route.path}
                    component={route.component}
                    auth={auth}
                    key={route.path}
                  />
                ))
              }
              <Route
                exact
                path="/"
                render={() => {
                  return auth.isAuthenticated ? <Home auth={auth} /> : <Front />;
                }}
              />
              <Route
                path="*"
                render={() => {
                  return "404 Route Not Found.";
                }}
              />
            </Switch>
          </main>
        </div>
      )}
    </Fragment>
  );
};

Main.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  auth: PropTypes.shape({
    token: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    isLoading: PropTypes.bool,
    user: PropTypes.instanceOf(Object),
  }),
};

Main.defaultProps = {
  auth: {
    token: null,
    isAuthenticated: null,
    isLoading: null,
    user: null,
  },
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {},
)(withStyles(styles, { withTheme: true })(Main));
