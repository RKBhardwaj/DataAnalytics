import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';
import configureStore from './store';
import './stylesheets/main.scss';
import Header from './components/shared/Header';

ReactDOM.render(
  <Provider store={configureStore()}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <Header />
        <App />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
