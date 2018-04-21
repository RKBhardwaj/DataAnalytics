import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginComponent from '../src/components/containers/login';
import Dashboard from '../src/components/containers/workspace/Dashboard';
import Visualization from '../src/components/containers/workspace/Visualization';
import Discover from '../src/components/containers/workspace/Discover';
import ConfigureCompany from '../src/components/containers/configure/Company';
import ConfigureUsers from '../src/components/containers/configure/User';
import ConfigureNavigation from '../src/components/containers/configure/Navigation';
import AppSettings from '../src/components/containers/configure/Settings';
import * as ROUTES from '../src/common/constants/routes';

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
      checkPath(path) ? <Component {...props} /> : <Redirect to={{ pathname: `${ROUTES.LOGIN}` }} />
    )}
  />
);


const Routes = () => (
  <div>
    <Switch>
      <ValidateRoute exact path="/" component={LoginComponent} />
      <ValidateRoute path={ROUTES.LOGIN} component={LoginComponent} />
      <ValidateRoute path={ROUTES.DASHBOARD} component={Dashboard} />
      <ValidateRoute path={ROUTES.VISUALIZATION} component={Visualization} />
      <ValidateRoute path={ROUTES.DISCOVER} component={Discover} />
      <ValidateRoute path={ROUTES.CONFIGURE_COMPANY} component={ConfigureCompany} />
      <ValidateRoute path={ROUTES.CONFIGURE_USER} component={ConfigureUsers} />
      <ValidateRoute path={ROUTES.CONFIGURE_NAVIGATION} component={ConfigureNavigation} />
      <ValidateRoute path={ROUTES.APP_SETTINGS} component={AppSettings} />
    </Switch>
  </div>
);

export default Routes;
