import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConfigureNavigationView from './views/ConfigureNavigationView';

@connect(store => ({
  user: store.LoginReducer.loginDetails
}))
class ConfigureNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <ConfigureNavigationView
        user={this.state.user}
      />
    );
  }
}

export default ConfigureNavigation;
