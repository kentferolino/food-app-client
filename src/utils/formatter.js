import moment from 'moment';

const formatDate = value => {
  return moment(new Date(value)).format('YYYY-MM-DD');
}

export default formatDate;
