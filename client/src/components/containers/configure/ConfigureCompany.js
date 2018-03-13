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
      user: props.user,
      companyName: 'Test',
      shortName: 'Test',
      dataSource: 'Test',
      timeConfiguration: 'test'
    };
  }

  render() {
    return (
      <ConfigureCompanyView
        user={this.state.user}
        companyName={this.state.companyName}
        shortName={this.state.shortName}
        dataSource={this.state.dataSource}
        timeConfiguration={this.state.timeConfiguration}
      />
    );
  }
}

export default ConfigureCompany;
