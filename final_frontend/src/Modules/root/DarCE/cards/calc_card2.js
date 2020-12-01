import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CustomizedSteppers from './UI/progressbar';

const useStyles = makeStyles({
  root: {
   width:870,
   height:1000,
   display: 'inline-block',
   marginRight: '10px',
   marginLeft:'90px',
   marginTop:2,
   size:"auto",
  },
 
 
});

export default function CalcCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}  variant="outlined">
        <CardHeader className={classes.header}
        // avatar={
        // //   <p style={{fontSize:'15px',fontFamily:'monospace'}}>CALC GROUPTREE VIEW</p>
        // }
        action={
            <div >
      <IconButton aria-label="question">
        <Button style={{backgroundColor:"peachpuff"}} >BACK</Button>
      </IconButton>
      <IconButton aria-label="delete">
      <Button style={{backgroundColor:"peachpuff"}}>SAVE</Button>
      </IconButton>
      
      <IconButton color="primary" aria-label="add to shopping cart">
      <MoreVertIcon />
      </IconButton>
        </div> }/>
      <CardContent>
          
      <CustomizedSteppers/>
      
      </CardContent>
      
    </Card>
  );
}
