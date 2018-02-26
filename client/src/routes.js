import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginComponent from '../src/components/containers/login/LoginComponent';
import Dashboard from '../src/components/containers/configure/Dashboard';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LoginComponent} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/main-dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default Routes;
