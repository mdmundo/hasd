import { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MusicOffIcon from '@material-ui/icons/MusicOff';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import InstrumentalIcon from './InstrumentalIcon';
import hymns from './options.json';
import context from '../../context';
import { getFavorites } from '../../favorites';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    paddingBottom: theme.spacing(3)
  },
  auto: {
    paddingBottom: theme.spacing(2)
  }
}));

const App = () => {
  const {
    hymnState,
    hymnDispatch,
    modeState,
    modeDispatch,
    progressDispatch,
    URIDispatch,
    finishedDispatch
  } = useContext(context);
  const [input, setInput] = useState('');
  const [hymn, setHymn] = useState(hymnState);
  const [mode, setMode] = useState(modeState);
  const [options, setOptions] = useState(hymns);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isNaN(hymn) || parseInt(hymn) < 1 || parseInt(hymn) > 613) return;

    hymnDispatch(hymn);
    modeDispatch(mode);
    progressDispatch(0);
    URIDispatch('');
    finishedDispatch(false);
  };

  useEffect(() => {
    getFavorites().then((favorites) => {
      const favoritesToOptions = favorites.map((favorite) => {
        const option = hymns[favorite - 1];

        return { ...option, category: 'Favoritos' };
      });

      const favoritesPlusHymns = favoritesToOptions.concat(hymns);

      setOptions(favoritesPlusHymns);
    });
  }, []);

  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={onSubmit} noValidate>
      <Autocomplete
        value={hymns[hymn - 1]}
        onChange={(e, value) => setHymn(value.number)}
        inputValue={input}
        onInputChange={(e, value) => setInput(value)}
        autoHighlight
        disableClearable
        className={classes.auto}
        fullWidth
        id='grouped-demo'
        options={options}
        noOptionsText='Sem Opções'
        groupBy={(option) => option.category}
        getOptionLabel={(option) =>
          `${parseInt(option.number)} \u2012 ${option.hymn}`
        }
        renderInput={(params) => (
          <TextField {...params} label='Selecione o Hino' variant='outlined' />
        )}
      />
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'
        spacing={1}>
        <Grid item xs={2}>
          <Tooltip title='Cantado'>
            <IconButton
              disableRipple
              onClick={() => {
                setMode('sung');
              }}>
              <MusicNoteIcon color={mode === 'sung' ? 'primary' : 'action'} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title='Instrumental'>
            <IconButton
              disableRipple
              onClick={() => {
                setMode('instrumental');
              }}>
              <InstrumentalIcon
                color={mode === 'instrumental' ? 'primary' : 'action'}
              />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title='Letra'>
            <IconButton
              disableRipple
              onClick={() => {
                setMode('lyrics');
              }}>
              <MusicOffIcon color={mode === 'lyrics' ? 'primary' : 'action'} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={6}>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            {mode !== 'lyrics' ? 'Tocar Hino' : 'Ver Letra'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default App;
