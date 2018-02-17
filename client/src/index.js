import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware, ConnectedRouter as Router } from 'react-router-redux';

import Routes from './routes';
import './stylesheets/app.scss';
import configureStore from './store';
import history from './store/history';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={configureStore}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
