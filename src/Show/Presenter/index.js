import { useContext, useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';
import context from '../../context';
import hymns from './hymns';
import { setFavorite } from './favorites';

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
  caption: {
    marginBottom: theme.spacing(2)
  },
  favorite: {
    marginLeft: 'auto'
  },
  content: {
    minHeight: theme.spacing(40)
  }
}));

const App = () => {
  const { state, dispatch } = useContext(context);

  const hymn = hymns[state.hymn.number - 1];

  const [nextUpdate, setNextUpdate] = useState(0);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    if (hymn.text[nextUpdate]?.show === state.timer) {
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

  const onFavorite = async () => {
    await setFavorite(state.hymn.number);
  };

  const classes = useStyles();

  return (
    <Card>
      <LinearProgress variant='determinate' value={state.playedProgress} />
      {current < 0 ? (
        <CardContent className={classes.content}>
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
        <CardContent className={classes.content}>
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
            <Typography key={index} variant='body1'>
              {str}
            </Typography>
          ))}
        </CardContent>
      )}
      <CardActions disableSpacing className={classes.action}>
        <Tooltip title='Voltar'>
          <IconButton onClick={onFinished}>
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Favoritar'>
          <IconButton className={classes.favorite} onClick={onFavorite}>
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default App;
