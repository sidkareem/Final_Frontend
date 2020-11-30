import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {Auth as awsAuth, Hub} from 'aws-amplify';
import {UPDATE_COGNITO_USER} from '../../shared/constants/ActionTypes';
import {onGetLoggedInCognitoUser} from '../../redux/actions';

export const useAuthToken = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const authUser = useSelector(({auth}) => auth.user);
  useEffect(() => {
    const awsAuthUser = () =>
      new Promise((resolve) => {
        awsAuth
          .currentAuthenticatedUser()
          .then((user) => {
            resolve();
            if (user) {
              dispatch({
                type: UPDATE_COGNITO_USER,
                payload: {
                  uid: user.username,
                  displayName: user.attributes.name,
                  email: user.attributes.email,
                  photoURL: user.photoURL,
                  token: user.signInUserSession.accessToken.jwtToken,
                },
              });
            }
          })
          .catch(function (error) {
            resolve();
          });
        return Promise.resolve();
      });
    const checkAuth = () => {
      Promise.all([awsAuthUser()]).then(() => {
        setLoading(false);
      });
      Hub.listen('auth', ({payload: {event, data}}) => {
        switch (event) {
          case 'signIn':
            dispatch(onGetLoggedInCognitoUser());
            break;
          case 'signOut':
            dispatch({type: UPDATE_COGNITO_USER, payload: null});
            break;
          default:
            return false;
        }
      });
    };
    checkAuth();
  }, [dispatch]);

  useEffect(() => {
    if (!authUser) {
      setToken(null);
    }
    if (authUser) {
      setToken(authUser.token);
    }
  }, [authUser]);

  return [token, loading];
};

export const useAuthUser = () => {
  const authUser = useSelector(({auth}) => auth.user);
  if (authUser) {
    return authUser;
  }
  return {
    displayName: 'Loading',
  };
};
