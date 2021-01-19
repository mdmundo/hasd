import { forwardRef, useEffect, useState } from 'react';
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
import { hymnal, favorites } from '../../storage';
import { getFavorites } from '../../favorites';

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
  const [hymnalLength, setHymnalLength] = useState(0);
  const [favoritesLength, setFavoritesLength] = useState(0);
  const [openOptions, setOpenOptions] = useState(false);

  useEffect(() => {
    hymnal.length().then((number) => {
      setHymnalLength(number);
    });
  }, [hymnalLength]);

  useEffect(() => {
    getFavorites().then((favorites) => {
      const length = favorites.length;
      setFavoritesLength(length);
    });
  }, [favoritesLength]);

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
    await hymnal.clear();
    await favorites.clear();
    setOpenOptions(false);
    setHymnalLength(0);
    setFavoritesLength(0);
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
            disabled={hymnalLength === 0 && favoritesLength === 0}
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
            {`Deseja apagar todos os hinos baixados e todos os favoritos salvos? ${hymnalLength} ${
              hymnalLength < 2 ? 'hino' : 'hinos'
            } e ${favoritesLength} ${
              favoritesLength < 2 ? 'favorito' : 'favoritos'
            } ${
              favoritesLength + hymnalLength < 2
                ? 'será apagado'
                : 'serão apagados'
            }.`}
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
