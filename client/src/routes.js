import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginComponent from '../src/components/containers/login/LoginComponent';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/" component={LoginComponent} />
        </Switch>
    </div>
);

export default Routes;