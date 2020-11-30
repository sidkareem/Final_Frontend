import React from 'react';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import {Checkbox} from '@material-ui/core';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch} from 'react-redux';
import {Auth} from 'aws-amplify';
import InfoView from '@crema/core/InfoView';
import {onSignInCognitoUser} from '../../../redux/actions';
import {Link, useHistory} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Fonts} from '../../../shared/constants/AppEnums';
import grey from '@material-ui/core/colors/grey';

const MyTextField = props => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  password: yup
    .string()
    .required(<IntlMessages id='validation.passwordRequired' />),
});

const UserSignin1 = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onGoToForgetPassword = () => {
    history.push('/forget-password', {tab: 'awsCognito'});
  };
  const onGoToDashboard = () => {
    history.push('/sample/page-1', {tab: 'awsCognito'});
  };

  const {messages} = useIntl();

  const useStyles = makeStyles(theme => ({
    formRoot: {
      textAlign: 'left',
      [theme.breakpoints.up('xl')]: {
        marginBottom: 24,
       
        color:"red"
     },
    },
    myTextFieldRoot: {
      width: '100%',
      fontSize:200
     
    },
    checkboxRoot: {
      marginLeft: -12,
     color:"black"
      //marginBottom:"50px"
    },
    pointer: {
      cursor: 'pointer',
      color:"#60a65a",
      fontWeight:"bold"

    },
    btnRoot: {
      borderRadius: theme.overrides.MuiCard.root.borderRadius,
      width: '100%',
      fontFamily: Fonts.BOLD,
      backgroundColor:"#60a65a",
      
      fontSize: 16,
      textTransform: 'capitalize',
      // marginLeft:160,
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 20,
      },
      '&:hover, &:focus': {
        backgroundColor: "#638f60",
      },
    },
    dividerRoot: {
      marginBottom: 16,
      marginLeft: -48,
      marginRight: -48,
      [theme.breakpoints.up('xl')]: {
        marginBottom: 32,
      },
    },
    signup:{
    marginLeft:100
    },
    iconButtonRoot: {
      marginLeft: 8,
      marginRight: 8,
      color: theme.palette.grey[500],
      '&:hover, &:focus': {
        color: "#60a65a",
      },
    },
    textLg: {
      fontSize: 18,
    },
    textPrimary: {
      color: theme.palette.text.primary,
    },
    colorTextPrimary: {
      color: "#60a65a",
    },
    underlineNone: {
      textDecoration: 'none',
    },
    textGrey: {
      color: theme.palette.grey[500],
    },
    input:{
      fontSize:50,
      color:"red"
    }
  }));
  const classes = useStyles(props);

  return (
    <Box flex={1} display='flex' flexDirection='column'>
      <Box
        px={{xs: 6, sm: 10, xl: 15}}
        pt={{xs: 8, xl: 12}}
        flex={1}
        display='flex'
        flexDirection='column'>
        <Formik 
          validateOnChange={true}
          initialValues={{
            email: 'crema.demo@gmail.com',
            password: 'Pass@1!@all',
          }}
          validationSchema={validationSchema}
          onSubmit={(data, {setSubmitting}) => {
            setSubmitting(true);
            dispatch(
              onSignInCognitoUser({email: data.email, password: data.password}),
              history,
            );
            setSubmitting(false);
          }}>
          {({isSubmitting}) => (
            <Form className={classes.formRoot} noValidate autoComplete='off'>
              <Box mb={{xs: 5, xl: 8}}>
                <MyTextField className=
                {classes.input}
                  placeholder={messages['common.Userid']}
                  label={<IntlMessages   id='common.UserId' />}
                  name='email'
                  variant='outlined'
                  className={classes.myTextFieldRoot}
                />
              </Box>

              <Box mb={{xs: 5, lg: 6}}>
                <MyTextField fontSize="200px"
                  type='password'
                  placeholder={messages['common.password']}
                  label={<IntlMessages id='common.password'  />}
                  name='password'
                  variant='outlined'
                  className={classes.myTextFieldRoot}
                />
              </Box>

              <Box
                mb={{xs: 4, xl: 6}}
                display='flex'
                flexDirection={{xs: 'column', sm: 'row'}}
                alignItems={{sm: 'center'}}
                justifyContent={{sm: 'space-between'}}
                fontSize={18}>
                <Box display='flex' alignItems='center' >
                  <Checkbox className={classes.checkboxRoot} style={{color:"green"}} />
                  <Box className={classes.textGrey} component='span'>
                    <IntlMessages id='common.rememberMe' />
                  </Box>
                </Box>
                <Box
                
                  color='primary.main'
                  component='span'
                  ml={{sm: 4}}
                  className={classes.pointer}
                  onClick={onGoToForgetPassword}>
                  <IntlMessages id='common.forgetPassword' />
                </Box>
              </Box>

              <Box
                mb={6}
                display='flex'
                flexDirection={{xs: 'column', sm: 'row'}}
                alignItems={{sm: 'center'}}
                justifyContent={{sm: 'space-between'}}>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  // onClick={onGoToDashboard}
                  disabled={isSubmitting}
                  className={classes.btnRoot}>
                   <IntlMessages id='common.login' />
                 
                </Button>
                </Box>
                <Box
                className={classes.signup}
                  ml={{xs: 0, sm: 4}}
                  mt={{xs: 3, sm: 0}}
                  color='text.secondary'
                  fontSize={18}>
                   
                  <Box className={classes.textGrey} component='span' mr={2}>
                    <IntlMessages id='common.dontHaveAccount' />
                  </Box>
                  <Box  component='span'>
                    <Link
                      to='/signup'
                      className={clsx(
                        classes.underlineNone,
                        classes.colorTextPrimary,
                      )}>
                      <IntlMessages id='common.signup' />
                    </Link>
                  </Box>
                </Box>
             
            </Form>
          )}
        </Formik>
      </Box>

      
      <InfoView />
    </Box>
  );
};

export default UserSignin1;
