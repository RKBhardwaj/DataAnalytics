import React, { Component } from 'react';
import { connect } from 'react-redux';

import DiscoverView from '../../views/workspace/DiscoverView';

@connect(store => ({
  user: store.LoginReducer.loginDetails
}))
class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <DiscoverView
        user={this.state.user}
      />
    );
  }
}

export default Discover;
