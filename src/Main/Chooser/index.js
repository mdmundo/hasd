import { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import hymns from './options.json';
import context from '../../context';
import { getFavorites } from '../../favorites';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

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
  const { state, dispatch } = useContext(context);
  const [input, setInput] = useState('');
  const [hymn, setHymn] = useState(state.hymn);
  const [mode, setMode] = useState(state.mode);
  const [options, setOptions] = useState(hymns);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isNaN(hymn) || parseInt(hymn) < 1 || parseInt(hymn) > 613) return;

    dispatch({
      type: 'UPDATE',
      update: {
        hymn,
        timer: '0:00',
        downloadProgress: 0,
        finished: false,
        play: mode !== 'lyrics',
        mode
      }
    });
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
          `${parseInt(option.number)} - ${option.hymn}`
        }
        renderInput={(params) => (
          <TextField {...params} label='Selecione o Hino' variant='outlined' />
        )}
      />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ButtonGroup
            variant='outlined'
            color='primary'
            fullWidth
            disableElevation>
            <Tooltip title='Cantado'>
              <Button
                variant={mode === 'sung' ? 'contained' : 'outlined'}
                onClick={() => {
                  setMode('sung');
                }}>
                C
              </Button>
            </Tooltip>
            <Tooltip title='Instrumental'>
              <Button
                variant={mode === 'instrumental' ? 'contained' : 'outlined'}
                onClick={() => {
                  setMode('instrumental');
                }}>
                I
              </Button>
            </Tooltip>
            <Tooltip title='Letra'>
              <Button
                variant={mode === 'lyrics' ? 'contained' : 'outlined'}
                onClick={() => {
                  setMode('lyrics');
                }}>
                L
              </Button>
            </Tooltip>
          </ButtonGroup>
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
