import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginComponent from '../src/components/containers/login/LoginComponent';
import Dashboard from '../src/components/containers/workspace/Dashboard';
import Visualization from '../src/components/containers/workspace/Visualization';
import Discover from '../src/components/containers/workspace/Discover';
import ConfigureCompany from '../src/components/containers/configure/ConfigureCompany';
import ConfigureUsers from '../src/components/containers/configure/ConfigureUsers';
import ConfigureNavigation from '../src/components/containers/configure/ConfigureNavigation';
import AppSettings from '../src/components/containers/configure/AppSettings';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LoginComponent} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/visualization" component={Visualization} />
      <Route path="/discover" component={Discover} />
      <Route path="/configure-company" component={ConfigureCompany} />
      <Route path="/configure-users" component={ConfigureUsers} />
      <Route path="/configure-navigation" component={ConfigureNavigation} />
      <Route path="/app-settings" component={AppSettings} />
    </Switch>
  </div>
);

export default Routes;
