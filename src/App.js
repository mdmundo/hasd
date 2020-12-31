import { useReducer } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import Show from './Show';
import Chooser from './Chooser';
import Context from './context';
import reducer from './reducer';

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Created by '}
      <Link color='inherit' href='https://github.com/mdmundo'>
        Edmundo Paulino
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3, 2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}));

const App = () => {
  const defaultState = {
    hymn: { sung: true, number: 1 },
    timer: '0:00',
    finished: true,
    progress: 0,
    hymnURI: ''
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const classes = useStyles();

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className={classes.root}>
        <CssBaseline />
        <Container component='main' className={classes.main} maxWidth='xs'>
          {state.finished ? <Chooser /> : <Show />}
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth='xs'>
            <Copyright />
          </Container>
        </footer>
      </div>
    </Context.Provider>
  );
};

export default App;
