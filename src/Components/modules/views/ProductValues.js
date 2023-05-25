import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: '2rem'
  },
  unorderedList: {
    listStyleType: 'none',
    paddingRight: '3rem'
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

const tickets = 'data:image/png;base64,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'

const vision = 'data:image/jpeg;base64,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'

const marco = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Lp0KCpfWUWZGObursXbiVTB_JHB4DFLiJA&usqp=CAU'
function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={tickets}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                PREVENTA GENERAL
              </Typography>
              <Typography variant="h5">
              <ul className={classes.unorderedList}>
                  <li>$150.00 x 1</li>
                  <li>$250.00 x 2</li>
                  <li>$350.00 x 3</li>
                  <li>$400.00 x 4</li>
              </ul>
              </Typography>

            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={tickets}
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                VIP X-PERIENCE PREVENT
              </Typography>
              <Typography variant="h5">
              <ul className={classes.unorderedList}>
                  <li>$300.00 x 1</li>
                  <li>$500.00 x 2</li>
              </ul>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={tickets}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                GENERAL - DÍA DEL EVENTO
              </Typography>
              <Typography variant="h5" >
                <ul className={classes.unorderedList}>
                    <li>$200.00 x 1</li>
                </ul>
              </Typography>
              <Typography variant="h6">
                VIP X-PERIENCE  - DÍA DEL EVENTO
              </Typography>
              <Typography variant="h5">
                <ul className={classes.unorderedList}>
                  <li>$350.00 x 1 *sujeto a disponibilidad día del evento</li>
                </ul>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
