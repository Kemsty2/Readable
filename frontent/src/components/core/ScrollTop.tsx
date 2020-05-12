import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FunctionComponent = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Fragment>{props.children}</Fragment>;
};

export default ScrollToTop;
