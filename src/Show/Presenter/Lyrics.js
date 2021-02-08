import { useContext, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';
import context from '../../context';
import hymns from './hymns';
import { setFavorite, getFavorites } from '../../favorites';

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
  content: {
    minHeight: theme.spacing(40)
  },
  stanza: {
    marginBottom: theme.spacing(2)
  },
  lyrics: {
    marginTop: theme.spacing(8)
  }
}));

const App = () => {
  const { hymnState, dispatch } = useContext(context);

  const hymn = hymns[hymnState - 1];

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getFavorites().then((favorites) => {
      setIsFavorite(favorites.includes(hymnState));
    });
  }, [hymnState]);

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
    await setFavorite(hymnState, isFavorite);
    setIsFavorite(!isFavorite);
  };

  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography
          variant='caption'
          display='block'
          color='textSecondary'
          align='center'
          gutterBottom>
          {hymnState}
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
        <div className={classes.lyrics}>
          {hymn.text.map((stanza, index) => {
            return (
              <div key={index} className={classes.stanza}>
                {stanza.text.split('\n').map((str, index) => (
                  <Typography key={index} variant='body1'>
                    {str}
                  </Typography>
                ))}
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.action}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'>
          <Tooltip title='Voltar' placement='top-start'>
            <IconButton onClick={onFinished}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={isFavorite ? 'Desfavoritar' : 'Favoritar'}
            placement='top-end'>
            <IconButton
              onClick={onFavorite}
              color={isFavorite ? 'primary' : 'default'}>
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default App;
