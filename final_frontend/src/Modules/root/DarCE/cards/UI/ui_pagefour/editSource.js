import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import {useSpring, animated} from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'red',
    boxShadow: theme.shadows[5],
    //borderRadius:"2px white",
    padding: theme.spacing(2, 4, 3),
  },
  label: {
    width: '100%',
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const {in: open, children, onEnter, onExited, ...other} = props;
  const style = useSpring({
    from: {opacity: 0},
    to: {opacity: open ? 1 : 0},
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModalEdit() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [type, settype] = React.useState('');

  const handleChange = (event) => {
    settype(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid style={{width: 800}} container spacing={4}>
              <Grid item md={11} sm={11} xs={11}>
                <p style={{fontSize: '20px'}}>
                  <b>ADD DATA SOURCE</b>
                </p>
              </Grid>
              <Grid item md={1} sm={1} xs={1}>
                <CloseRoundedIcon
                  onClick={() => {
                    setOpen(false);
                  }}>
                  Close
                </CloseRoundedIcon>
              </Grid>

              <Grid item md={4} sm={4} xs={4}>
                <p>
                  <b>DATA SOURCE ID</b>
                </p>
              </Grid>
              <Grid item md={8} sm={8} xs={8}>
                <TextField
                  className={classes.label}
                  required
                  id='standard-required'
                  label='Required'
                  variant='outlined'
                  defaultValue='Hello World'
                />
              </Grid>
              <Grid item md={4} sm={4} xs={4}>
                <p>
                  <b>DESCRIPTION</b>
                </p>
              </Grid>
              <Grid item md={8} sm={8} xs={8}>
                <TextField
                  className={classes.label}
                  id='outlined-multiline-static'
                  label='Multiline'
                  multiline
                  rows={4}
                  defaultValue='Default Value'
                  variant='outlined'
                />
              </Grid>
              <Grid item md={4} sm={4} xs={4}>
                <p>
                  <b>DATA SOURCE ID</b>
                </p>
              </Grid>
              <Grid item md={8} sm={8} xs={8}>
                <FormControl variant='outlined' className={classes.label}>
                  <InputLabel id='demo-simple-select-outlined-label'>
                    Type
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-outlined-label'
                    id='demo-simple-select-outlined'
                    value={type}
                    onChange={handleChange}
                    label='Type'>
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>BPC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={4} sm={4} xs={4}>
                <p>
                  <b>DESCRIPTION</b>
                </p>
              </Grid>
              <Grid item md={8} sm={8} xs={8}>
                <TextField
                  id='outlined-multiline-static'
                  label='Multiline'
                  multiline
                  className={classes.label}
                  rows={4}
                  defaultValue='Default Value'
                  variant='outlined'
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12} />

              <Grid item md={8} sm={8} xs={8} />
              <Grid item md={2} sm={2} xs={2}>
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.button}
                  onClick={() => {
                    setOpen(false);
                  }}>
                  ClOSE
                </Button>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.button}>
                  SAVE
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
