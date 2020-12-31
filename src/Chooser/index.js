import { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import options from './options.json';
import context from '../context';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  auto: {
    paddingBottom: theme.spacing(2)
  }
}));

const App = () => {
  const { state, dispatch } = useContext(context);
  const [input, setInput] = useState('');
  const [number, setNumber] = useState(state.hymn.number);
  const [sung, setSung] = useState(state.hymn.sung);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isNaN(number) || parseInt(number) < 1 || parseInt(number) > 613) return;

    dispatch({
      type: 'UPDATE',
      update: {
        hymn: { sung, number },
        timer: '0:00',
        progress: 0,
        finished: false
      }
    });
  };

  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={onSubmit} noValidate>
      <Autocomplete
        value={options[number - 1]}
        onChange={(e, value) => setNumber(value?.number)}
        inputValue={input}
        onInputChange={(e, value) => setInput(value)}
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

      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}>
        Tocar Hino
      </Button>
      <FormControlLabel
        control={
          <Checkbox
            checked={sung}
            onChange={(e) => setSung(e.target.checked)}
            name='Sung'
            color='primary'
          />
        }
        label='Cantado'
      />
    </form>
  );
};

export default App;
