import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
    fontSize: 15
  },
  column: {
    flexBasis: '50%',
  },
  filterLabel: {
    flexBasis: '25%',
  },
  filterColumn: {
    flexBasis: '75%',
  },
  chip: {
    marginRight: 10,
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const FilterHeader = ({ options, setFilters }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.filterLabel}>
            <Typography className={classes.heading}>Filters: </Typography>
          </div>
          <div className={classes.filterColumn}>
            {
              options
                .filter(x => x.selected !== false)
                .map((filter) => (
                  <Chip
                    className={classes.chip}
                    label={filter.label}
                    onDelete={() => setFilters(filter, 'remove')}
                    key={filter.value}
                  />
                ))
            }
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.filterLabel} />
          <div className={classes.filterColumn}>
            {
              options.map(option => (
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={option.selected}
                      onChange={
                        e =>
                          setFilters(option, e.target.checked === true ? 'add' : 'remove')
                      }

                    />
                  }
                  label={option.label}
                  key={option.value}
                />
              ))
            }
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

FilterHeader.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      name: PropTypes.string,
      selected: PropTypes.bool,
    }),
  ).isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default FilterHeader;
