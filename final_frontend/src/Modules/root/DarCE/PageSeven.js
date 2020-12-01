import React from 'react';
import Box from '@material-ui/core/Box';
import AppAnimate from '../../../@crema/core/AppAnimate';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CustomizedSelects from './Dropdown';
import NavTabs from './Select';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import { typography } from '@storybook/theming';
import {withStyles} from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import PictureAsPdfSharpIcon from '@material-ui/icons/PictureAsPdfSharp';

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    width: 150,
  },
}))(MenuItem);
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const useStyles = makeStyles({
  card: {
    width: '100%',
    height: 750,
    backgroundColor: '#f0f0f5',
  },
  inside: {
    marginTop: 50,
    marginLeft: 30,
    //  marginRight: 30,
    height: 650,
    width: '90%',
    position: 'fixed',
    display: 'inline-block',
  },
  btnRoot: {
    marginTop: '5px',
    marginLeft: '10px',
    width: 150,
  },
});

const Audit = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
        <Box component='p' fontSize={16}>
          {/* Audit Page */}
          <Card className={classes.card}>
            <Box component='p'>
              <Card className={classes.inside} variant='outlined'>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  // onClick={onGoToDashboard}
                  // disabled={isSubmitting}
                  className={classes.btnRoot}>
                  Refresh
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  className={classes.btnRoot}>
                  Clear
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  className={classes.btnRoot}>
                  Print
                </Button>
                {/* <div> */}
                <Button
                  aria-controls='customized-menu'
                  aria-haspopup='true'
                  variant='contained'
                  color='primary'
                  className={classes.btnRoot}
                  onClick={handleClick}>
                  Export
                </Button>
                <StyledMenu
                  id='customized-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
                  <StyledMenuItem>
                    <ListItemIcon>
                      <PictureAsPdfSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary='PDF' />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary='CSV' />
                  </StyledMenuItem>
                </StyledMenu>
                {/* </div> */}
                <hr />
              </Card>
            </Box>
          </Card>
        </Box>
      </Box>
    </AppAnimate>
  );
};

export default Audit;
