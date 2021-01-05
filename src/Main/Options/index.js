import { forwardRef, useEffect, useState } from 'react';
import localforage from '../../Show/Loader/storage';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';

const Transition = forwardRef((props, ref) => {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2.75)
  },
  appBar: {
    position: 'relative'
  }
}));

const App = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [length, setLength] = useState(0);
  const [openOptions, setOpenOptions] = useState(false);

  useEffect(() => {
    localforage.length().then((number) => {
      setLength(number);
    });
  }, [length]);

  const handleClickOpenAbout = () => {
    setOpenAbout(true);
  };

  const handleCloseAbout = () => {
    setOpenAbout(false);
  };

  const handleClickOpenOptions = () => {
    setOpenOptions(true);
  };

  const handleCloseOptions = () => {
    setOpenOptions(false);
  };

  const deleteAll = async () => {
    await localforage.clear();
    setOpenOptions(false);
    setLength(0);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Button
            variant='outlined'
            color='primary'
            onClick={handleClickOpenAbout}
            fullWidth>
            Sobre
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            disabled={length === 0}
            variant='outlined'
            color='primary'
            onClick={handleClickOpenOptions}
            fullWidth>
            Limpar
          </Button>
        </Grid>
      </Grid>
      <Dialog
        maxWidth='xs'
        open={openAbout}
        onClose={handleCloseAbout}
        TransitionComponent={Transition}>
        <DialogTitle>Sobre</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Este aplicativo foi construído para reproduzir hinos do Hinário
            Adventista do Sétimo Dia. Os hinos e as letras são propriedades da
            Casa Publicadora Brasileira. Obtenha o código ou contribua{' '}
            <Link href='https://github.com/mdmundo/hasd'>aqui</Link>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAbout} color='primary'>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openOptions}
        onClose={handleCloseOptions}
        TransitionComponent={Transition}>
        <DialogTitle>Limpar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Deseja apagar todos os hinos baixados? ${
              length < 2 ? `É ${length} hino.` : `São ${length} hinos.`
            }`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteAll} color='secondary'>
            Apagar
          </Button>
          <Button autoFocus onClick={handleCloseOptions} color='primary'>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
