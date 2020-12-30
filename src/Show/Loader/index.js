import { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { getHymn } from './hymn';
import { getPath } from './parser';
import context from '../../context';

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
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3, 2)
  },
  title: {
    fontSize: '3rem'
  },
  action: {
    marginTop: theme.spacing(5)
  },
  progress: {
    display: 'block',
    margin: 'auto'
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

  //  copy of this on Player
  const onFinished = () => {
    dispatch({
      type: 'UPDATE',
      update: {
        hymnURI: '',
        finished: true
      }
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <CssBaseline />
        <Container component='main' className={classes.main} maxWidth='xs'>
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
            <CardActions className={classes.action}>
              <Button size='small' onClick={onFinished}>
                Voltar
              </Button>
            </CardActions>
          </Card>
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth='xs'>
            <Copyright />
          </Container>
        </footer>
      </div>
    </div>
  );
};

export default App;
