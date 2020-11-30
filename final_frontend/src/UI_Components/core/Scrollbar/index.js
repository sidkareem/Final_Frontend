import React, {useEffect} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {useLocation, withRouter} from 'react-router-dom';

const Scrollbar = React.forwardRef((props, ref) => {
  const {
    children,
    history,
    scrollToTop,
    staticContext,
    className,
    ...others
  } = props;
  let _scrollBarRef = null;
  const {pathname} = useLocation();

  useEffect(() => {
    if (_scrollBarRef) {
      _scrollBarRef._container.scrollTop = 0;
    }
  }, [_scrollBarRef, pathname]);

  return (
    <PerfectScrollbar
      ref={(ref) => {
        _scrollBarRef = ref;
      }}
      {...others}
      className={className}>
      {children}
    </PerfectScrollbar>
  );
});

export default withRouter(Scrollbar);

Scrollbar.defaultProps = {
  className: '',
};

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
};
