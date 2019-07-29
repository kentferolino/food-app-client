import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSubcategories } from '../actions/subcategoryActions';
import FilterHeader from '../components/FilterHeader';

const Soup = ({ getSubcategoriesAction, subcategories }) => {

  const [filters, setFilters] = useState(subcategories);

  useEffect(() => {
    getSubcategoriesAction('soup');
  }, []);

  useEffect(() => {
    const initialFilters = subcategories.map((subcategory) => {
      return { ...subcategory, selected: true }
    })
    setFilters(initialFilters);
  }, [subcategories])

  const handleSetFilters = (filter, operation) => {
    let newFilters = [];
    newFilters = filters.map(x => {
      if (x.value === filter.value) {
        return { ...x, selected: operation === 'add' }
      }
      return x;
    });
    setFilters(newFilters);
  }

  return (
    <div>
      <div>Here in Soup</div>
      <FilterHeader options={filters} setFilters={handleSetFilters} />
    </div>
  )
};

const mapStateToProps = state => ({
  subcategories: state.subcategories.subcategories
});

export default connect(
  mapStateToProps,
  { getSubcategoriesAction: getSubcategories },
)(Soup);
