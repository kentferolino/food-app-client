import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemCard from './ItemCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const FoodItems = ({ items }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {
          items.map(item => (
            <Grid item md={4} sm={6} key={item.path}>
              <ItemCard imageUrl={item.imageUrl} title={item.title} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}

FoodItems.propTypes = {
};

export default FoodItems;
