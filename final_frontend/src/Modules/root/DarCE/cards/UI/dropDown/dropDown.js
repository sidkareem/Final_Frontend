import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'inline-flex'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [model, setModel] = React.useState('');

  const handleChange = (event) => {
    setModel(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" style={{color:"black",fontWeight:"bolder"}} >MODEL/CALC GROUP</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={model}
          onChange={handleChange}
          style={{width:"200px",  backgroundColor:"rgba(0, 0, 0, 0)",
          color:"black",
         
          transition:"height 1s",
        }}
        >
          <MenuItem value={10}>MODEL 1</MenuItem>
          <MenuItem value={20}>MODEL 2</MenuItem>
          <MenuItem value={30}>MODEL 3</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}
