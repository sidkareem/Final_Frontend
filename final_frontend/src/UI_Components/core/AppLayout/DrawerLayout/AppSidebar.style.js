import {makeStyles} from '@material-ui/core';
import {useContext} from 'react';
import AppContext from '../../../utility/AppContext';
import {ThemeMode} from '../../../../shared/constants/AppEnums';

const useStyles = makeStyles((theme) => {
  const {themeMode} = useContext(AppContext);
  return {
    drawerContainer: {
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      width: '19rem',
      maxHeight: '100vh',
      [theme.breakpoints.up('xl')]: {
        width: '21.6rem',
      },
    },
    sidebarBg: {
      overflow: 'hidden',
      backgroundColor:
        themeMode === ThemeMode.SEMI_DARK
          ? theme.palette.sidebar.bgColor
          : themeMode === ThemeMode.LIGHT
          ? 'white'
          : '#313541',
    },
    drawerScrollAppSidebar: {
      paddingTop: 8,
      paddingBottom: 32,
      height: 'calc(100vh - 58px) !important',

      [theme.breakpoints.up('xl')]: {
        height: 'calc(100vh - 65px) !important',
      },
    },
  };
});
export default useStyles;
