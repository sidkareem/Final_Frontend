import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(25),
  },
  popover: {
    width: 1000,
    animation: 'transition.slideUpIn',
    delay: 200,
  },
}));

export default function SimplePopoverConvert() {
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
          <strong>CONVERT</strong> tab allows you to convert any DarCE version
          6.3 (or earlier) configurations into version 7.0 format. <br />
          DarCE EVO on or after version 7.0 has an entirely different table
          structure, so it is necessary to run conversion process on your any
          version 6.3 or prior existing configurations in order for DarCE EVO
          engine to understand.
          <br />
          <p style={{color: 'red'}}>
            *If you are upgrading from DarCE version 6.3 or earlier, it is part
            of the installation step to run a conversion here to bring over your
            existing configurations into the 7.0 EVO format.
          </p>{' '}
        </Typography>
      </Popover>
    </div>
  );
}
