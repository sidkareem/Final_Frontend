import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Barchart5 from '../cards/UI/barchart/barchart5';
const useStyles = makeStyles({
  root: {
    width: 175,
    
    display: 'inline-block',
    marginRight: '36px',
    marginLeft:'36px',
    marginTop:'56px',
    size:"auto"
    
   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginLeft:"20px",
    fontWeight:"bolder",
    color:"red"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard5() {
  const classes = useStyles();
 

  return (
    <Card className={classes.root} variant="outlined">
        <Typography className= {classes.title} >
       
         # USERS
        </Typography>
        <br/><br/>
       <Barchart5/>
     
       <Typography variant="body2" component="p">
         
          <br />
            <br/>
            <hr/>
            <br/>
            
        </Typography>
      
    
    </Card>
  );
}













