import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BarChart6 from '../cards/UI/barchart/barchart6';
const useStyles = makeStyles({
  root: {
    width:"90%",
    
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

export default function OutlinedCard6() {
  const classes = useStyles();
 

  return (
    <Card className={classes.root} variant="outlined">
        <Typography className= {classes.title} >
        
         ACIVITY TREND
        </Typography>
        <br/><br/>
       <BarChart6/>
     
       <Typography variant="body2" component="p">
         
          <br />
            <br/>
            <hr/>
            <br/>
            
        </Typography>
      
    
    </Card>
  );
}













