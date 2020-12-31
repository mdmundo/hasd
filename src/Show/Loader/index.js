import { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { getHymn } from './hymn';
import { getPath } from './parser';
import context from '../../context';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '3rem'
  },
  progress: {
    display: 'block',
    margin: 'auto'
  }
}));

const App = () => {
  const { state, dispatch } = useContext(context);
  const path = getPath(state.hymn);

  useEffect(() => {
    getHymn(path, dispatch).then((hymnURI) => {
      dispatch({
        type: 'UPDATE',
        update: {
          hymnURI
        }
      });
    });
  }, [path, dispatch]);

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.title}
          variant='h2'
          display='block'
          align='center'
          gutterBottom>
          Carregando
        </Typography>
        <CircularProgress
          className={classes.progress}
          variant='determinate'
          size='10rem'
          value={state.progress}
        />
      </CardContent>
    </Card>
  );
};

export default App;
