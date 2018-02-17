/**
 * @description will responsible for react setup in app
 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../routes';
import history from '../store/history';

const App = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}

export default App;