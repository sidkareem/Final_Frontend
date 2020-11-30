import React, {useContext, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {setInitialPath} from '../../redux/actions';
import {matchRoutes} from 'react-router-config';
import AppContext from './AppContext';
import {useAuthToken} from './AppHooks';
import {Loader} from '../index';
import PropTypes from 'prop-types';
import {initialUrl} from '../../shared/constants/AppConst';

const AuthRoutes = ({children}) => {
  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const {routes} = useContext(AppContext);

  const [token, loading] = useAuthToken();
  const initialPath = useSelector(({settings}) => settings.initialPath);
  const currentRoute = matchRoutes(routes, pathname)[0].route;

  useEffect(() => {
    function setInitPath() {
      if (
        initialPath === '/' &&
        [
          '/signin',
          '/signup',
          '/confirm-signup',
          '/reset-password',
          '/forget-password',
        ].indexOf(pathname) === -1
      ) {
        dispatch(setInitialPath(pathname));
      }
    }

    setInitPath();
  }, [dispatch, initialPath, loading, pathname, token]);

  useEffect(() => {
    if (!loading) {
      if (!token && currentRoute.auth && currentRoute.auth.length >= 1) {
        history.push('/signin');
      } else if (
        (pathname === '/signin' ||
          pathname === '/signup' ||
          pathname === '/confirm-signup' ||
          pathname === '/reset-password' ||
          pathname === '/forget-password') &&
        token
      ) {
        if (pathname === '/') {
          history.push(initialUrl);
        } else if (
          initialPath !== '/' ||
          initialPath !== '/signin' ||
          initialPath !== '/signup'
        ) {
          history.push(initialPath);
        } else {
          history.push(initialUrl);
        }
      }
    }
  }, [token, loading, pathname, initialPath, currentRoute.auth, history]);

  return loading ? <Loader /> : <>{children}</>;
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
