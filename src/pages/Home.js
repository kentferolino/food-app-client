import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../components/ItemCard';
import { categoryItems } from '../utils/index';

const Home = () => {
  return (
    <div>
      <h3>Find from different course:</h3>
      <Grid container spacing={2}>
        {
          categoryItems.map(item => (
            <Grid item md={4} sm={6} key={item.path}>
              <Link to={item.path}><ItemCard imageUrl={item.imageUrl} title={item.title} /></Link>
            </Grid>
          ))
        }
      </Grid>

    </div>
  );
};

export default Home;
