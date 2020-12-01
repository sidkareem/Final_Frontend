import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles, fade} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
//import SearchBar from '../../../@crema/core/SearchBar';
//import Badge from '../../../@crema/core/Badge/index';
import AppAnimate from '../../../@crema/core/AppAnimate';
import Card from '@material-ui/core/Card';
import {Grid} from '@material-ui/core';
import DataTables from '../Pages/cards/UI/ui_pagefive/table';
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import SearchIcon from '@material-ui/icons/Search';
import App from '../Pages/cards/UI/ui_pagefive/table/App';
const useStyles = makeStyles((theme) => ({
  root1: {
    width: '100%',
    height: 1700,
    backgroundColor: 'rgb(246,248,249)',
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
const PageFive = () => {
  const classes = useStyles();
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
        <Box component='h4' fontSize={20}>
          <Card className={classes.root1}>
            <Grid container spacing={4} className={classes.grid}>
              <Grid item md={3} xs={3} sm={3} />

              <Grid item md={8} xs={8} sm={8}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    variant='outlined'
                    placeholder='Search…'
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{'aria-label': 'search'}}
                  />
                </div>
              </Grid>
              <Grid item md={1} xs={1} sm={1}>
                <AutorenewIcon fontSize='large' />
              </Grid>
              <Grid item md={12} />
              <Grid item md={12} />
              <Grid item md={12} />

              <Grid item md={12}>
                <App />
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </AppAnimate>
  );
};

export default PageFive;
