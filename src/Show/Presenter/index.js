import { useContext, useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import context from '../../context';
import hymns from './hymns';

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
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    backgroundPosition: 'center'
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5)
  },
  author: {
    marginBottom: theme.spacing(1.5)
  },
  verse: {
    fontStyle: 'italic'
  },
  text: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5)
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

  const hymn = hymns[state.hymn.number - 1];

  const [nextUpdate, setNextUpdate] = useState(0);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    if (hymn.text[nextUpdate]?.attributes.show === state.timer) {
      setCurrent(nextUpdate);
      setNextUpdate(nextUpdate + 1);
    }
  }, [state.timer, nextUpdate, hymn.text]);

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
      <CssBaseline />
      <Container component='main' className={classes.main} maxWidth='xs'>
        <Card>
          {current < 0 ? (
            <CardContent>
              <Typography
                variant='caption'
                display='block'
                color='textSecondary'
                align='center'
                gutterBottom>
                {parseInt(hymn.attributes.number, 10)}
              </Typography>
              <Typography className={classes.title} variant='h3' align='center'>
                {hymn.attributes.title}
              </Typography>
              <Typography
                className={classes.author}
                variant='subtitle2'
                display='block'
                color='textSecondary'
                align='center'>
                {hymn.attributes.author}
              </Typography>
              <Typography
                className={classes.verse}
                variant='caption'
                display='block'
                color='textSecondary'
                align='center'>
                {hymn.attributes.verse}
              </Typography>
            </CardContent>
          ) : (
            <CardContent>
              <Typography
                variant='caption'
                display='block'
                color='textSecondary'
                align='right'
                gutterBottom>
                {`${parseInt(hymn.attributes.number, 10)} | ${
                  hymn.attributes.title
                }`}
              </Typography>
              <Typography className={classes.text} variant='h4' component='pre'>
                {hymn.text[current].text}
              </Typography>
            </CardContent>
          )}
          <CardActions>
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
  );
};

export default App;
