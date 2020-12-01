import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles, fade} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppAnimate from '../../../../../../@crema/core/AppAnimate';
import Card from '@material-ui/core/Card';
import {Grid} from '@material-ui/core';
import Main from './searchbar_env.js/main';
import Popover1 from './popover';
import RadioButtonsGroup from './radio';
import Button from '@material-ui/core/Button';
import {Fonts} from '../../../../../../shared/constants/AppEnums';
import SimplePopoverConvert from './popover_convert';

const useStyles = makeStyles((theme) => ({
  root1: {
    width: '100%',
    height: 1700,
    backgroundColor: 'rgb(246,248,249)',
  },
  typo: {
    fontFamily: Fonts.BOLD,
  },
  flexcontainer: {
    display: 'flex',
  },
  flexchild: {
    flex: 0.6,
    border: 'none',
  },
  grid: {
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '40px',
  },
  tab: {
    marginTop: 100,
  },
  button: {
    borderRadius: theme.overrides.MuiCard.root.borderRadius,
    width: '100%',
    fontFamily: Fonts.BOLD,
    backgroundColor: '#60a65a',

    fontSize: 16,
    textTransform: 'capitalize',
    // marginLeft:160,
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 20,
    },
    '&:hover, &:focus': {
      backgroundColor: '#638f60',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid grey',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 300,
    width: 30,
    height: 40,

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    border: 'red',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: 30,
    border: 'grey',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

//   },
//   tab: {
//     marginTop: 100,
//   },
// });

const Convert = () => {
  const classes = useStyles();
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
        <Box component='h4' fontSize={20}>
          <Card className={classes.root1}>
            <Grid container spacing={4} className={classes.grid}>
              <Grid item md={1} xs={2} sm={3}>
                <p>
                  <b>Environment</b>
                </p>
              </Grid>
              <Grid item md={1} xs={1} sm={1}>
                <div style={{align: 'left'}}>
                  {' '}
                  <SimplePopoverConvert />{' '}
                </div>{' '}
                {/*Help Modal ,, 28-10-2020,Sidrah */}
              </Grid>
              <Grid item md={10} xs={10} sm={8} />
              <Grid item md={2} xs={3} sm={3}>
                <Typography className={classes.typo}>
                  Source(Required):
                </Typography>
                {/*Select a source from the dropdown , 28-10-2020,Sidrah */}
              </Grid>
              <Grid item md={3} xs={2} sm={2}>
                <p>
                  <b>
                    <Main />
                  </b>
                </p>
              </Grid>
              <Grid item md={1} />

              <Grid item md={2} xs={3} sm={3}>
                <Typography className={classes.typo}>
                  Target(Required):
                </Typography>
                {/*Select a target from the dropdown , 28-10-2020,Sidrah*/}
              </Grid>
              <Grid item md={3} xs={2} sm={2}>
                <p>
                  <b>
                    <Main />
                  </b>
                </p>
              </Grid>
              <Grid item md={12} xs={12} sm={12} />

              <Grid item md={1} xs={3} sm={3}>
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.button}>
                  CONVERT
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </AppAnimate>
  );
};

export default Convert;
