import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {onResetCognitoPassword} from '../../../redux/actions';
import {Link, useHistory} from 'react-router-dom';
import InfoView from '@crema/core/InfoView';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {makeStyles} from '@material-ui/core';
import {Fonts} from '../../../shared/constants/AppEnums';
import clsx from 'clsx';

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
});

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const useStyles = makeStyles(theme => ({
    image: {
      display: 'inline-block',
      cursor: 'pointer',
      width: 140,
    },
    card: {
      maxWidth: 576,
      width: '100%',
      textAlign: 'center',
      height:500,
      marginTop:200,
      padding: 24,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '10px 10px 15px 10px rgba(0, 0, 0, 0.1)',
      [theme.breakpoints.up('sm')]: {
        padding: 40,
      },
      [theme.breakpoints.up('md')]: {
        padding: 48,
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: 48,
        paddingRight: 48,
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
        backgroundColor: 'none',
      },
    },
    form: {
      textAlign: 'left',
    },
    textField: {
      width: '100%',
    },
    btnRoot: {
      width: '100%',
      fontFamily: Fonts.BOLD,
      textTransform: 'capitalize',
      fontSize: 16,
      backgroundColor:"#60a65a",
      paddingTop: 12,
      paddingBottom: 12,
      borderRadius: theme.overrides.MuiCard.root.borderRadius,
      [theme.breakpoints.up('xl')]: {
        fontSize: 20,
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
      '&:hover, &:focus': {
        backgroundColor: "#638f60",
      },
    },
    textSecondary: {
      color: "#60a65a",
      marginLeft: 10,
    },
    underlineNone: {
      textDecoration: 'none',
    },
    textGrey: {
      color: theme.palette.grey[500],
    },
  }));

  const classes = useStyles();

  return (
    <Box flex={1} display='flex' flexDirection='column' justifyContent='center'>
      {/* <Box mb={{xs: 6, md: 8, xl: 18}} textAlign='center'>
        <img
          className={classes.image}
          src={require('assets/images/logo-white-with-name.png')}
          alt='crema-logo'
        />
      </Box> */}

      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
         
 
        <Card className={classes.card}>
          <Box
            component='h2'
            mb={{xs: 6, xl: 8}}
            color='text.primary'
            fontFamily={Fonts.BOLD}
            fontSize={{xs: 24, sm: 30}}>
            <IntlMessages id='common.forgetPassword' />
          </Box>
          <Box mb={{xs: 6, xl: 12}} fontSize={18}>
            <Typography>
              <IntlMessages id='common.forgetPasswordTextOne' /> <br />
              <IntlMessages id='common.forgetPasswordTextTwo' />
            </Typography>
          </Box>

          <Formik
            validateOnChange={true}
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, {setSubmitting, resetForm}) => {
              setSubmitting(true);
              dispatch(onResetCognitoPassword(data.email, history));
              setSubmitting(false);
              resetForm();
            }}>
            {({isSubmitting}) => (
              <Form className={classes.form}>
                <Box mb={{xs: 5, lg: 8}}>
                  <MyTextField
                    placeholder='Email'
                    name='email'
                    label={<IntlMessages id='common.emailAddress' />}
                    className={classes.textField}
                    variant='outlined'
                  />
                </Box>

                <Box mb={4}>
                  <Button
                    variant='contained'
                    color='primary'
                    disabled={isSubmitting}
                    className={classes.btnRoot}
                    type='submit'>
                    <IntlMessages id='common.sendNewPassword' />
                  </Button>
                </Box>

                <Box
                  pt={3}
                  textAlign='center'
                  fontSize={18}
                  className={classes.textGrey}>
                  <IntlMessages id='common.alreadyHavePassword' />
                  <Link
                    to='/signin'
                    className={clsx(
                      classes.underlineNone,
                      classes.textSecondary,
                    )}>
                    <IntlMessages id='common.signIn' />
                  </Link>
                </Box>
              </Form>
            )}
          </Formik>

         
        </Card>
      </Box>
    </Box>
  );
};

export default ForgetPassword;
