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
      user: props.user,
      activeTab: 'settings',
    };
    this.handleTabs = this.handleTabs.bind(this);
  }

  handleTabs(activeTab) {
    this.setState({ activeTab });
  }

  render() {
    return (
      <AppSettingsView
        user={this.state.user}
        activeTab={this.state.activeTab}
        handleTabs={this.handleTabs}
      />
    );
  }
}

export default AppSettings;
