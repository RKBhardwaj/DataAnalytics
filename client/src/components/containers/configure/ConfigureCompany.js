import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConfigureCompanyView from '../../views/configure/ConfigureCompanyView';

@connect(store => ({
  user: store.LoginReducer.loginDetails
}))
class ConfigureCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <ConfigureCompanyView
        user={this.state.user}
      />
    );
  }
}

export default ConfigureCompany;
