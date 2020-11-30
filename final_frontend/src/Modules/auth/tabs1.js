import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FunctionsIcon from '@material-ui/icons/Functions';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
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
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: "rgb(49,53,65)",
    color:"white",
    textTransform:"capitalize"
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar  className={classes.root} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="white"
          textColor="white"
          className={classes.root}
          aria-label="scrollable force tabs example"
        >
          <Tab  className={classes.root} label="DarCE" icon={<FunctionsIcon style={{ color: "#40e379" }} />} {...a11yProps(0)} />
          <Tab  className={classes.root}label="Darwin" icon={<AssessmentIcon style={{ color: "#3ec5c9" }}/>} {...a11yProps(1)} />
          <Tab className={classes.root} label="Admin" icon={<PersonPinIcon style={{ color: "#e8ab41" }}/>} {...a11yProps(2)}  />
          <Tab    className={classes.root} label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Navigation/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Navigation1/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
     
      
    </div>
  );
}
