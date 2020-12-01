import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
import AppAnimate from '../../../@crema/core/AppAnimate';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Convert from '../Pages/cards/UI/ui_pageeight/convert';
import Copy from '../Pages/cards/UI/ui_pageeight/copy';
import Delete from '../Pages/cards/UI/ui_pageeight/delete';

import {makeStyles, fade} from '@material-ui/core/styles';
import Main from '../Pages/cards/UI/ui_pageeight/searchbar_env.js/main';
const useStyles = makeStyles((theme) => ({
  root1: {
    width: '100%',
    height: 1700,
    backgroundColor: 'rgb(246,248,249)',
  },
  type: {
    fontFamily: "font-family: 'Roboto', sans-serif",
    fontWeight: 'bolder',
  },
  flexcontainer: {
    display: 'flex',
  },
  flexchild: {
    flex: 0.6,
    border: 'none',
  },
  main: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  grid: {
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '40px',
  },
}));
const Tabs_copyconfig = () => {
  const classes = useStyles();

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
        <Box component='h4' fontSize={20}>
          <Card className={classes.root1}>
            {/* <Grid container spacing={4} className={classes.grid}></Grid> */}

            <Tabs style={{animation: 'transition.slideUpIn', delay: 200}}>
              <TabList>
                <Tab>
                  <Typography className={classes.type}>COPY</Typography>
                </Tab>{' '}
                {/*created 3 tabs for copy convert delete,28-10-2020*/}
                <Tab>
                  <Typography className={classes.type}>CONVERT</Typography>
                </Tab>
                <Tab>
                  <Typography className={classes.type}>DELETE</Typography>
                </Tab>
              </TabList>

              <TabPanel>
                <h2>
                  <Copy />{' '}
                </h2>
                {/* <Main className={classes.main}/>   content for each tab ,28-10-2020 */}
              </TabPanel>
              <TabPanel>
                <Convert />
              </TabPanel>
              <TabPanel>
                <Delete />
              </TabPanel>
            </Tabs>
          </Card>
        </Box>
      </Box>
    </AppAnimate>
  );
};

export default Tabs_copyconfig;
