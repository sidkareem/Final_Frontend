import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navigation from '@crema/core/Navigation/VerticleNav/darce';
import Navigation1 from '@crema/core/Navigation/VerticleNav/Darwin';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
   Width: "10px",
   flexGrow: 1,
    backgroundColor: "rgb(49,53,65)",
  },
  tab:{
    backgroundColor:"rgb(49,53,65)"
    
  },
  tabs:{
     backgroundColor:"yellow"
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          
        >
          <LinkTab className={classes.tab} label="DARCE" href="C:\Users\sidka\Downloads\themeforest-6kQ6LePy-crema\aws-starter-template\src\@crema\core\Navigation\VerticleNav\darce.js" {...a11yProps(0)} />
          <LinkTab className={classes.tab} label="DARWIN" href="/trash" {...a11yProps(1)} />
          <LinkTab className={classes.tab} label="ADMIN" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel  value={value} index={0}>
      <Navigation/>
      </TabPanel>
      <TabPanel   value={value} index={1}>
       <Navigation1/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
    </div>
  );
}
