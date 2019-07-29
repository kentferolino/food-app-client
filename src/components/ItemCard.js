import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 250,
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.25)'
    }
  },
  name: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    backgroundColor: '#2196f3',
    borderRadius: 3,
    padding: 5,
    fontSize: '14px',
    fontWeight: 600,
    color: '#fff',
  }
});

const ItemCard = ({ imageUrl, title }) => {

  const { card, media, name } = useStyles();

  return (
    <Card className={card}>
      <CardActionArea>
        <CardMedia className={media} image={imageUrl} title={title} />
        <div className={name}>{title}</div>
      </CardActionArea>
    </Card>
  );
}

ItemCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ItemCard;
