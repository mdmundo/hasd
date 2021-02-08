import { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Presenter from './Presenter';
import Player from './Player';
import Loader from './Loader';
import context from '../context';

const useStyles = makeStyles((theme) => ({
  player: {
    marginTop: theme.spacing(0.5),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  }
}));

const App = () => {
  const { modeState, URIState } = useContext(context);
  const classes = useStyles();

  return (
    <div>
      {modeState === 'lyrics' ? (
        <Presenter />
      ) : URIState ? (
        <>
          <Presenter />
          <Paper>
            <div className={classes.player}>
              <Player />
            </div>
          </Paper>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default App;
