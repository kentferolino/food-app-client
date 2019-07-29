import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const FoodItems = ({ items }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {JSON.stringify(items)}
    </div>
  );
}

FoodItems.propTypes = {
};

export default FoodItems;
