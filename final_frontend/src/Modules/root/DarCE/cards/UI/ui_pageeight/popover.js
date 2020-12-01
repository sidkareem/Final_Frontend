import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(15),
  },
  popover: {
    width: 1000,
    animation: 'transition.slideUpIn',
    delay: 200,
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.popover}>
      {/* <Button aria-describedby={id} variant="contained" style={{backgroundColor:"white",color:"white"}}  onClick={handleClick}> */}
      <HelpIcon
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}
        style={{color: 'green'}}
      />
      {/* </Button> */}
      <Popover
        id={id}
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'right',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}>
        <Typography className={classes.typography}>
          <b>DATA OPTION</b> asks you how you would like to handle data copying.
          The options are: <br />
          <strong>Full Overwrite</strong> - This option copies entire records
          from the Source Environment over to the Target Environment, making
          Source and Target identical. In other words, this means any record in
          the Target Environment must be cleared and purged before the copying
          takes place. <br />
          <strong>Exclude any custom record in Target</strong> - This option
          clears and purges any record except those starting with a Z in the
          Target Environment, before the copying takes place to copy everything
          from the Source Environment. <br />
          Generally speaking, if you do not have any custom DarCE
          configurations, select "Full Overwrite". If you have some custom
          calculation rules that are tailored to your Darwin's module's
          customization, select "Exclude any custom record in Target". <br />
          If none of your DarCE configurations belongs to any Darwin module
          (i.e. you are licensed to DarCE and not Darwin module, and you rewrote
          your original logic calculations from BPC Logic Scripts and custom
          BAdIs to DarCE configs), you probably do not have a Z prefix in front
          of any of the Calc Groups or Calcs. In that case, either option should
          work for you, unless you also leverage the Z prefix to create system
          specific Z calcs for debugging purpose (e.g. You created a Z prefix
          calc to debug in one environment which you do not wish to copy over to
          another environment).{' '}
        </Typography>
      </Popover>
    </div>
  );
}
