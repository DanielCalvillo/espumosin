import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

function ProductCTA(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                RECIBE OFERTAS!
              </Typography>
              <Typography variant="h5">
                Consigue lo mejor y más de nuestros productos
              </Typography>
              <TextField
                noBorder
                className={classes.textField}
                placeholder="Your email"
                variant="standard"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Mantenme al tanto
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden mdDown>
            <div className={classes.imageDots} />
            <img
              src="data:image/jpeg;base64,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"
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
