import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Created by "}
      <Link color="inherit" href="https://github.com/mdmundo">
        Edmundo Paulino
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3, 2)
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    backgroundPosition: "center"
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}));

export default function StickyFooter() {
  const strogonoff =
    "Ó Deus de amor,\nvimos nós Te adorar.\nVós, ó nações,\nrendei louvor!";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="xs">
        <Card>
          <CardContent>
            <Typography
              variant="caption"
              display="block"
              color="textSecondary"
              align="right"
              gutterBottom
            >
              1 | Ó Deus de Amor
            </Typography>
            <Typography variant="h4" component="pre">
              {strogonoff}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Voltar</Button>
          </CardActions>
        </Card>
        <Card>
          <CardMedia className={classes.background} image={""} />
        </Card>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="xs">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
