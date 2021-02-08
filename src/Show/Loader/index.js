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
    marginBottom: theme.spacing(2)
  },
  progress: {
    display: 'block',
    margin: 'auto'
  }
}));

const App = () => {
  const {
    hymnState,
    modeState,
    progressState,
    progressDispatch,
    finishedDispatch,
    errorDispatch,
    URIDispatch
  } = useContext(context);
  const path = getPath({ mode: modeState, hymn: hymnState });

  useEffect(() => {
    getHymn(path, progressDispatch).then((hymnURI) => {
      if (hymnURI) {
        URIDispatch(hymnURI);
      } else {
        errorDispatch(true);
        finishedDispatch(true);
      }
    });
  }, [path, progressDispatch, finishedDispatch, errorDispatch, URIDispatch]);

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.title}
          variant='subtitle2'
          display='block'
          align='center'
          gutterBottom>
          Carregando
        </Typography>
        <CircularProgress
          className={classes.progress}
          variant={
            progressState === 0 || progressState === 100
              ? 'indeterminate'
              : 'determinate'
          }
          size='3.5rem'
          value={progressState}
        />
      </CardContent>
    </Card>
  );
};

export default App;
