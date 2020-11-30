import React, {useContext} from 'react';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import {ContentView} from '../../../index';
import Box from '@material-ui/core/Box';
import useStyles from './index.style';
import AppFixedFooter from './AppFixedFooter';
import clsx from 'clsx';
import AppContext from '../../../utility/AppContext';
import {LayoutType} from '../../../../shared/constants/AppEnums';

const DrawerLayout = (props) => {
  const classes = useStyles(props);
  const {footer, layoutType, footerType} = useContext(AppContext);

  return (
    <Box
      className={clsx(
        classes.appMain,
        layoutType === LayoutType.BOXED ? classes.boxedLayout : '',
        {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
        },
      )}>
      <AppHeader />
      <AppSidebar />
      <Box className={classes.mainContent}>
        <Box className={classes.mainContainerFull}>
          <ContentView />
        </Box>
      </Box>
      <AppFixedFooter />
    </Box>
  );
};

export default DrawerLayout;
