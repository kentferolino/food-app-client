import { Build, Home as HomeIcon } from '@material-ui/icons';
import React from 'react';
import Home from '../pages/Home';
import ChangePW from '../pages/ChangePW';
import UserProfile from '../pages/UserProfile';

export const navRoutes = [
  {
    path: '/',
    main: () => <h2>Home</h2>,
    label: 'Home',
    icon: () => <HomeIcon />
  },
  {
    path: '/soup',
    main: () => <h2>Soup</h2>,
    label: 'Soup',
    icon: () => <Build />
  },
  {
    path: '/shoelaces',
    main: () => <h2>Shoelaces</h2>,
    label: 'Shoelaces',
    icon: () => <Build />
  },
];

export const mainRoutes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/changepw',
    component: ChangePW
  },
  {
    path: '/updateProfile',
    component: UserProfile
  },
];
