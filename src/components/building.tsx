import * as React from 'react';
import './building.css';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Typography } from '@material-ui/core';
import { BuildingEntity } from '../model/building';
import { getBuildingsCollection } from '../api/buildingApi';

interface Props {
  filterValue: string;
}

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const useBuildingCollection = () => {
  const [buildingCollection, setBuildingCollection] = React.useState<
    BuildingEntity[]
  >([]);

  const loadBuildingCollection = () => {
    getBuildingsCollection().then(buildingCollection =>
      setBuildingCollection(buildingCollection)
    );
  };

  return { buildingCollection, loadBuildingCollection };
};

export const BuildingComponent = (props: Props) => {
  const filterValue = props.filterValue;
  const classes = useStyles();
  const {
    buildingCollection,
    loadBuildingCollection
  } = useBuildingCollection();
  const [
    filteredBuildingCollection,
    setFilteredBuildingCollection
  ] = React.useState(buildingCollection);

  React.useEffect(() => {
    loadBuildingCollection();
  }, []);

  React.useEffect(() => {
    const result = buildingCollection.filter(building =>
      building.city.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredBuildingCollection(result);
  }, [buildingCollection, filterValue]);

  return (
    <>
      <div className='container'>
        {filteredBuildingCollection.map(building => (
          <Card className={classes.card} key={building.id}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                {building.title}
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                {building.city}
              </Typography>
              <Typography className={classes.pos} component='p'>
                {building.price} €
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
