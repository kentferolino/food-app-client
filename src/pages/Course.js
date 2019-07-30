import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getSubcategoriesByCourseName } from '../actions/subcategoryActions';
import { getFoodItems } from '../actions/foodItemActions';
import FilterHeader from '../components/FilterHeader';
import FoodItems from '../components/FoodItems';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  foodItems: {
    marginTop: 20,
  }
}));

const Course = ({ getSubcategoriesAction, subcategories, match, foodItems, getFoodItemsAction }) => {

  const [course, setCourse] = useState(match.params.course);

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setCourse(match.params.course);
  }, [match]);

  useEffect(() => {
    if (course && course !== '') {
      getSubcategoriesAction(course);
    }
  }, [course]);

  useEffect(() => {
    const initialFilters = subcategories.map((subcategory) => {
      return { ...subcategory, selected: true }
    })
    setFilters(initialFilters);
  }, [subcategories])

  useEffect(() => {
    getFoodItemsAction({ subcategories: filters.filter(x => x.selected) })
  }, [filters])

  const handleSetFilters = (filter, operation) => {
    let newFilters = [];
    newFilters = filters.map(x => {
      if (x._id === filter._id) {
        return { ...x, selected: operation === 'add' }
      }
      return x;
    });
    setFilters(newFilters);
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.heading}>{course.toUpperCase()}</Typography>
      </div>
      <FilterHeader options={filters} setFilters={handleSetFilters} />
      <div className={classes.foodItems}>
        <FoodItems items={foodItems} />
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  subcategories: state.subcategories.subcategories,
  foodItems: state.foodItems.foodItems
});

export default connect(
  mapStateToProps,
  {
    getSubcategoriesAction: getSubcategoriesByCourseName,
    getFoodItemsAction: getFoodItems
  },
)(Course);
