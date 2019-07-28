import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIceCream,
  faMugHot,
  faCheese,
  faCarrot,
  faFish,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import Home from '../pages/Home';
import ChangePW from '../pages/ChangePW';
import UserProfile from '../pages/UserProfile';


export const navRoutes = [
  {
    path: '/',
    main: () => <h2>Home</h2>,
    label: 'Home',
    icon: () => <FontAwesomeIcon icon={faHome} size="2x" />
  },
  {
    path: '/soup',
    main: () => <h2>Soup</h2>,
    label: 'Soup',
    icon: () => <FontAwesomeIcon icon={faMugHot} size="2x" />
  },
  {
    path: '/appetizer',
    main: () => <h2>Appetizer</h2>,
    label: 'Appetizer',
    icon: () => <FontAwesomeIcon icon={faCheese} size="2x" />
  },
  {
    path: '/sidedish',
    main: () => <h2>Side dish</h2>,
    label: 'Side dish',
    icon: () => <FontAwesomeIcon icon={faCarrot} size="2x" />
  },
  {
    path: '/maincourse',
    main: () => <h2>Main Course</h2>,
    label: 'Main course',
    icon: () => <FontAwesomeIcon icon={faFish} size="2x" />
  },
  {
    path: '/dessert',
    main: () => <h2>Dessert</h2>,
    label: 'Dessert',
    icon: () => <FontAwesomeIcon icon={faIceCream} size="2x" />
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
