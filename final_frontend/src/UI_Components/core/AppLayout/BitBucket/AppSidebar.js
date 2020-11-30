import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import UserInfo from '../../../../shared/components/UserInfo';
import Navigation from '../../Navigation/VerticleNav';
import {toggleNavCollapsed} from '../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import BucketMinibar from './BucketMinibar';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PropTypes from 'prop-types';
import useStyles from './AppSidebar.style';

const AppSidebar = (props) => {
  const {isCollapsed, setCollapsed} = props;

  const dispatch = useDispatch();
  const navCollapsed = useSelector(({settings}) => settings.navCollapsed);

  const handleToggleDrawer = () => {
    dispatch(toggleNavCollapsed());
  };
  const classes = useStyles(props);

  let sidebarClasses = classes.sidebarStandard;

  const sideBarComponent = () => {
    return (
      <Box className={clsx(classes.bitBucketSidebar, 'bit-bucket-sidebar')}>
        <Box
          className={classes.bitBucketBtn}
          onClick={() => setCollapsed(!isCollapsed)}>
          {isCollapsed ? <NavigateNextIcon /> : <NavigateBeforeIcon />}
        </Box>
        <BucketMinibar />
        <Box className={`app-sidebar-container ${classes.appSidebarContainer}`}>
          <Box className={clsx(classes.sidebarBg, sidebarClasses)}>
            <UserInfo />
            <PerfectScrollbar className={classes.drawerScrollAppSidebar}>
              <Navigation />
            </PerfectScrollbar>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor={props.position}
          open={navCollapsed}
          onClose={(ev) => handleToggleDrawer()}
          classes={{
            root: clsx(classes.sidebarWrapper, props.variant),
            paper: clsx(
              classes.sidebar,
              props.variant,
              props.position === 'left'
                ? classes.leftSidebar
                : classes.rightSidebar,
            ),
          }}
          // container={props.rootRef.current}
          BackdropProps={{
            classes: {
              root: classes.backdrop,
            },
          }}
          style={{position: 'absolute'}}>
          {sideBarComponent()}
        </Drawer>
      </Hidden>
      <Hidden mdDown>{sideBarComponent()}</Hidden>
    </>
  );
};
export default AppSidebar;

AppSidebar.defaultProps = {
  variant: '',
  position: 'left',
};

AppSidebar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
};
