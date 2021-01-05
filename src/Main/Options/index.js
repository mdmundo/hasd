import { forwardRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
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
  const [openOptions, setOpenOptions] = useState(false);

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
            variant='outlined'
            color='primary'
            onClick={handleClickOpenOptions}
            fullWidth>
            Opções
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
        fullScreen
        open={openOptions}
        onClose={handleCloseOptions}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleCloseOptions}>
              <CloseIcon />
            </IconButton>
            <Typography variant='h6'>Opções</Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText
              primary='Favoritos'
              secondary='Remove todos os favoritos salvos'
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary='Arquivos'
              secondary='Remove todos os hinos baixados'
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary='Tudo' secondary='Remove todos os dados' />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default App;
