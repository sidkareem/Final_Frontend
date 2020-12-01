import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import Checkbox from '@material-ui/core/Checkbox';
import SimpleSelect from '../../UI/dropDown/dropdown_env';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const useStyles = makeStyles((theme)=>({
  root: {
   width:"100%",
   height:1000,
   display: 'inline-block',
   marginRight: '60px',
   marginLeft:'6px',
   marginTop:2,
   size:"auto",
   paddingLeft:0
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    fontWeight:"bolder",
    paddingLeft:0
  },
  pos: {
    marginBottom: 12,
  },
  header: {
    '& > *': {
      margin: theme.spacing(0.2),
    },
  },
  Name :{display:"inline-block",
   width:390
},



 label: {
     display: "block !important", 
     width:"150% !important" }

 
 
}));

export default function Setting() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}  variant="outlined">
        
   
      <CardHeader className={classes.header}
        avatar={
            <div className={classes.Name}>
                 <p className={classes.label}>Environments</p>
           < SimpleSelect className={classes.Name}/>
            </div>
           
        } />
        <CardContent>
        <div >
     
      <IconButton aria-label="delete">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={ <AccountTreeIcon/>}
      >
      CALC GROUP
      </Button>
       
      </IconButton>
      <IconButton aria-label="delete"  color="primary">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={ <FileCopyIcon/>}
      >
     COPY
      </Button>
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={ <MoveToInboxIcon/>}
      >
      MOVE
      </Button>
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={ <DeleteSweepIcon/>}
      >
     CLEAR
      </Button>
      </IconButton>
    </div>
        </CardContent>
       
            
      
  <CardContent>
  <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={ <DeleteSweepIcon/>}
      >
     RUN SCRIPT
      </Button>
      <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Run Simulation"
          labelPlacement="start"
        />
        
        <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Show Temporary Data"
          labelPlacement="start"
        />
        </FormGroup>
        </FormControl>

      <TextareaAutosize style={
          {
              width:"100%",
              height:1000
          } }/>
        
      </CardContent>
    
    </Card>
   
  );
}
