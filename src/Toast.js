import { useContext } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import context from './context';

const App = () => {
  const { errorState, errorDispatch, finishedDispatch } = useContext(context);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;

    errorDispatch(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      open={errorState}
      autoHideDuration={6000}
      onClose={handleClose}
      message='Ocorreu um erro.'
      action={
        <Button color='secondary' size='small' onClick={handleClose}>
          Fechar
        </Button>
      }
    />
  );
};

export default App;
