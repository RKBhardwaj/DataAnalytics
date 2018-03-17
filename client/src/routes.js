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

const checkPath = (path) => {
  const isValidPath = path !== '/';
  return isValidPath;
};

const ValidateRoute = ({
  component: Component, validator, path, ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      checkPath(path) ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
    )}
  />
);


const Routes = () => (
  <div>
    <Switch>
      <ValidateRoute exact path="/" component={LoginComponent} />
      <ValidateRoute path="/login" component={LoginComponent} />
      <ValidateRoute path="/dashboard" component={Dashboard} />
      <ValidateRoute path="/visualization" component={Visualization} />
      <ValidateRoute path="/discover" component={Discover} />
      <ValidateRoute path="/configure-company" component={ConfigureCompany} />
      <ValidateRoute path="/configure-users" component={ConfigureUsers} />
      <ValidateRoute path="/configure-navigation" component={ConfigureNavigation} />
      <ValidateRoute path="/app-settings" component={AppSettings} />
    </Switch>
  </div>
);

export default Routes;
