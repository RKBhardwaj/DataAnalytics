import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppSettingsView from '../../views/configure/AppSettingsView';

@connect(store => ({
  user: store.LoginReducer.loginDetails
}))
class AppSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <AppSettingsView
        user={this.state.user}
      />
    );
  }
}

export default AppSettings;
