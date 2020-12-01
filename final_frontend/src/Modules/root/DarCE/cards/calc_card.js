import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CustomizedTreeView from './UI/tree';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Divider from '@material-ui/core/Divider';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import ToggleButtons from './UI/toggle';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import SimplePopover from './UI/popover';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const useStyles = makeStyles((theme)=>({
  root: {
   width:450,
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
 
 
}));

export default function CalcCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}  variant="outlined">
     
      <CardHeader className={classes.header}
        avatar={
          <p style={{fontSize:'15px',fontFamily:'monospace'}}>CALC GROUPTREE VIEW</p>
        }
        action={
            <div >
      <IconButton aria-label="question">
        <SimplePopover/>
      </IconButton>
      <IconButton aria-label="delete">
        <AccountTreeIcon/>
      </IconButton>
      <IconButton aria-label="delete"  color="primary">
        <FormatListBulletedIcon/>
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
       <AutorenewIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
      <MoreVertIcon />
      </IconButton>
    </div>
        //   <IconButton aria-label="settings">
        //        <Button style={{width:"5px"}} variant="outlined" name={ "Log out"} />
        //      < ToggleButtons/>
        //        <Button h={40} w={50} name={ "Update"} />
   
     
        //     <MoreVertIcon />
        //   </IconButton>
        }
        // title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      />
          
      {/* <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        
     
        <div style={{ flexDirection: "row" ,marginLeft:20,justifyContent: 'space-evenly'}}>
       <div style={{float:"left"}}>
       
        <Typography className={classes.title} color="textSecondary" >
         CALC GROUP TREE VIEW
        </Typography></div>
        <div style={{float:"right"}}>
        <Button h={40} w={100} name={ "Update"} />
    <Button h={40} w={100} name={ "Log out"} />
        </div>
   
</div>
</ListItem>
<Divider/>
 <ListItem>
 
 </ListItem>
 </List> */}
  <CardContent>
 <CustomizedTreeView/>
        
      </CardContent>
    
    </Card>
   
  );
}
