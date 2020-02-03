import * as React from 'react';
import { BuildingComponent } from '../components/building';
import { makeStyles, Typography, TextField } from '@material-ui/core';
import './home.css';

const useStyles = makeStyles({
  title: {
    fontSize: 40
  }
});

export const HomePage = () => {
  const [filterValue, setFilterValue] = React.useState('');
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} color='textPrimary'>
        Rent Buildings
      </Typography>
      <div className='container'>
        <TextField
          id='standard-basic'
          label='City'
          onChange={e => setFilterValue(e.target.value)}
        />
        <BuildingComponent filterValue={filterValue}></BuildingComponent>
      </div>
    </>
  );
};
