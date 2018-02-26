import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardView from '../../views/configure/DashboardView';

@connect(store => ({
  loginDetails: store.LoginReducer.loginDetails
}))
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginUserDetails: props.user
    };
  }

  render() {
    return (
      <DashboardView
        user={this.state.LoginUserDetails}
      />
    );
  }
}

export default Dashboard;
