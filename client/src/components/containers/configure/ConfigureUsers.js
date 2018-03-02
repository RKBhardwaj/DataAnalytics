import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConfigureUsersView from '../../views/configure/ConfigureUsersView';

@connect(store => ({
  user: store.LoginReducer.loginDetails
}))
class ConfigureUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <ConfigureUsersView
        user={this.state.user}
      />
    );
  }
}

export default ConfigureUsers;
