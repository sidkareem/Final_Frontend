import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from '../../../shared/constants/AppEnums';
import UserSignin1 from './UserSignin';
import NavTabs from '../tabs';
const Signin1 = props => {
  const useStyles = makeStyles(theme => ({
    imgRoot: {
      cursor: 'pointer',
      display: 'inline-block',
      width: 150,
    },
    cardRoot: {
      maxWidth: '36rem',
      width: '100%',
      verticalAlign:"center",
      height:500,
      marginBottom:200,
      overflow: 'hidden',
      boxShadow: '10px 10px 15px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      position: 'relative',
      paddingTop: 20,
      [theme.breakpoints.up('xl')]: {
        paddingTop: 32,
      },
      '&:before': {
        content: "''",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        width: 130,
        height: 9,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: 'NONE',
      },
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    signin:{

      marginTop:100
    }
  }));
  const classes = useStyles(props);

  return (
    <Box flex={1} display='flex'  flexDirection='column' justifyContent='center' className={classes.signin}>
      <Box mb={{xs: 6, md: 8, xl: 18}} textAlign='center' >
       
      </Box>

      <Box
      
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <Card  className={classes.cardRoot}>
        <img
          className={classes.imgRoot}
          src={require('assets/images/download.png')}
          alt='crema-logo'
          style={{verticalAlign:"bottom"}}
        />
          <UserSignin1/>
         
         
        </Card>
      </Box>
    </Box>
  );
};

export default Signin1;
