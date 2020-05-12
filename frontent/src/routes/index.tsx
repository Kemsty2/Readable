/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import ScrollToTop from '../components/core/ScrollTop';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ScrollToTop>
  </HashRouter>
);

export default Routes;
