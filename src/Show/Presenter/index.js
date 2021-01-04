import { useContext, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import context from '../../context';
import hymns from './hymns';

const useStyles = makeStyles((theme) => ({
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
  action: {
    marginTop: theme.spacing(5)
  },
  text: {
    marginBottom: theme.spacing(0.5)
  },
  caption: {
    marginBottom: theme.spacing(2)
  }
}));

const App = () => {
  const { state, dispatch } = useContext(context);

  const hymn = hymns[state.hymn.number - 1];

  const [nextUpdate, setNextUpdate] = useState(0);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    if (hymn.text[nextUpdate].show === state.timer) {
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
    <Card>
      {current < 0 ? (
        <CardContent>
          <Typography
            variant='caption'
            display='block'
            color='textSecondary'
            align='center'
            gutterBottom>
            {state.hymn.number}
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
            className={classes.caption}
            variant='caption'
            display='block'
            color='textSecondary'
            align='right'
            gutterBottom>
            {`${state.hymn.number} | ${hymn.attributes.title}`}
          </Typography>
          {hymn.text[current].text.split('\n').map((str, index) => (
            <Typography className={classes.text} key={index} variant='h4'>
              {str}
            </Typography>
          ))}
        </CardContent>
      )}
      <CardActions className={classes.action}>
        <Button size='small' onClick={onFinished}>
          Voltar
        </Button>
      </CardActions>
    </Card>
  );
};

export default App;
