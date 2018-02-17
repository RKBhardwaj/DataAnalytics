import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './stylesheets/app.scss';
import App from './components/App';
import configureStore from './store';

ReactDOM.render(
    <Provider store={configureStore}>
      <App />
    </Provider>,
    document.getElementById('root')
);