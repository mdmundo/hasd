import { useReducer } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import Show from './Show';
import Main from './Main';
import Toast from './Toast';
import Context from './context';

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Criado por '}
      <Link color='inherit' href='https://github.com/mdmundo'>
        Edmundo Paulino
      </Link>
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
  const reducer = (state, update) => update;

  const [hymnState, hymnDispatch] = useReducer(reducer, 1);
  const [modeState, modeDispatch] = useReducer(reducer, 'sung');
  const [errorState, errorDispatch] = useReducer(reducer, false);
  const [progressState, progressDispatch] = useReducer(reducer, 0);
  const [URIState, URIDispatch] = useReducer(reducer, '');
  const [finishedState, finishedDispatch] = useReducer(reducer, true);

  const classes = useStyles();

  return (
    <Context.Provider
      value={{
        hymnState,
        hymnDispatch,
        modeState,
        modeDispatch,
        errorState,
        errorDispatch,
        progressState,
        progressDispatch,
        URIState,
        URIDispatch,
        finishedState,
        finishedDispatch
      }}>
      <div className={classes.root}>
        <CssBaseline />
        <Container component='main' className={classes.main} maxWidth='xs'>
          {finishedState ? <Main /> : <Show />}
        </Container>
        <Toast />
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
